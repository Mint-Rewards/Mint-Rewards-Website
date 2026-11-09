/**
 * Write real HTML for every route, after the SPA has been built.
 *
 * THE PROBLEM. This is a client-rendered app behind a catch-all rewrite,
 * so every URL serves the same shell and the per-page title, description,
 * canonical and schema only exist once React has run. Google executes
 * JavaScript. LinkedIn, WhatsApp, Slack and Facebook do not — so every
 * link shared from this site showed the home page's card, whatever page
 * it actually pointed at.
 *
 * WHAT THIS DOES. Serves dist/, opens each route in a headless browser,
 * waits for the app to mount, and writes the resulting DOM to
 * dist/<route>/index.html. Vercel checks the filesystem before applying
 * rewrites, so those files are served in place of the shell; the rewrite
 * stays for anything not prerendered.
 *
 * IT DOES NOT HYDRATE. main.tsx keeps createRoot().render(), which clears
 * the container and renders fresh rather than adopting the existing
 * markup. Switching to hydrateRoot would avoid that work but requires the
 * server markup to match exactly, and a mismatch there is a blank page
 * rather than a slow one. The prerendered HTML exists to be read by
 * crawlers; the browser re-renders it either way.
 *
 * IT FAILS THE BUILD IF IT CANNOT RUN. A missing browser must not quietly
 * produce a shell-only deploy that looks fine locally — that is the
 * failure this whole script exists to prevent. Set PRERENDER=0 to skip it
 * deliberately.
 */
import { createServer } from "node:http";
import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES } from "./routes.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

if (process.env.PRERENDER === "0") {
  console.log("prerender: skipped (PRERENDER=0)");
  process.exit(0);
}

const TYPES = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".ico": "image/x-icon", ".woff2": "font/woff2", ".xml": "application/xml",
  ".txt": "text/plain",
};

/**
 * The built app, served the way Vercel will serve it: a real file if one
 * exists, the shell otherwise.
 *
 * THE REQUEST NEVER BECOMES A PATH. dist/ is walked once up front into a
 * map of url -> absolute file, and a request is a LOOKUP in that map. So
 * the only paths this process ever opens are ones it found on disk
 * itself; nothing a client sends is joined, resolved or normalised into
 * a filename.
 *
 * The first version did build a path and guard it — resolve() then a
 * prefix test — which closed the hole but CodeQL kept flagging, because
 * a guard it does not recognise is indistinguishable from no guard. A
 * lookup has no sink to flag, and is easier to be sure about than a
 * sanitiser I would have had to argue was correct.
 */
const FILES = new Map();
{
  const walk = async (dir, prefix = "") => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const abs = join(dir, entry.name);
      if (entry.isDirectory()) await walk(abs, `${prefix}/${entry.name}`);
      else FILES.set(`${prefix}/${entry.name}`, abs);
    }
  };
  await walk(dist);
}

const shell = FILES.get("/index.html");
if (!shell) {
  console.error("prerender: dist/index.html is missing — did vite build run?");
  process.exit(1);
}

const server = createServer(async (req, res) => {
  const url = decodeURIComponent((req.url ?? "/").split("?")[0]);
  const target = FILES.get(url) ?? shell;
  try {
    const body = await readFile(target);
    res.writeHead(200, { "content-type": TYPES[extname(target)] ?? "text/plain" });
    res.end(body);
  } catch {
    res.writeHead(404).end("not found");
  }
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const port = server.address().port;
const base = `http://127.0.0.1:${port}`;

let puppeteer;
try {
  puppeteer = (await import("puppeteer")).default;
} catch {
  console.error("prerender: puppeteer is not installed.");
  console.error("  npm i -D puppeteer, or set PRERENDER=0 to ship a shell-only build.");
  server.close();
  process.exit(1);
}

let browser;
try {
  browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
} catch (error) {
  console.error(`prerender: could not launch a browser — ${error.message}`);
  if (process.env.VERCEL) {
    /*
     * Vercel's build image downloads Chrome happily and then cannot run
     * it: the shared libraries are missing (libnspr4.so and friends).
     * There is no flag for that, so the build does not happen there.
     *
     * It does not need to. This project has no Git integration — every
     * deploy is already a CLI deploy from somebody's machine — so the
     * build runs where a browser works and only the output is uploaded.
     */
    console.error("");
    console.error("  Vercel's build image cannot run Chrome: its shared libraries are absent.");
    console.error("  Build here and upload the result instead:");
    console.error("");
    console.error("    npm run deploy       # vercel build --prod && vercel deploy --prebuilt --prod");
    console.error("");
  }
  console.error("  set PRERENDER=0 to ship a shell-only build deliberately.");
  server.close();
  process.exit(1);
}

let written = 0;
const failures = [];

for (const { path } of ROUTES) {
  const page = await browser.newPage();
  try {
    await page.goto(`${base}${path}`, { waitUntil: "networkidle0", timeout: 30_000 });
    /* The app has mounted when the root has content AND PageMeta has had
       its effect — the title is the cheapest proof of both. */
    await page.waitForFunction(
      () => document.getElementById("root")?.childElementCount > 0,
      { timeout: 15_000 },
    );
    const html = await page.content();

    const title = await page.title();
    if (!title || title === "Mint Rewards — Get Rewarded for Recycling") {
      if (path !== "/") failures.push(`${path} (title never changed from the default)`);
    }

    const out = path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, html);
    written += 1;
  } catch (error) {
    failures.push(`${path} (${error.message.split("\n")[0]})`);
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();

if (failures.length) {
  console.error(`prerender: ${failures.length} route(s) did not render`);
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}

console.log(`prerender: ${written} routes written`);
