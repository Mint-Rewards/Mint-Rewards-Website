/**
 * Generate public/sitemap.xml from the routes the app actually serves.
 *
 * WHY GENERATED AND NOT HAND-WRITTEN. A sitemap is a promise that these
 * URLs exist and are worth crawling, and a hand-written one goes stale the
 * first time somebody adds a page — silently, because nothing breaks. This
 * reads App.tsx, compares what it finds against the curated table below,
 * and FAILS if the two disagree. A new route therefore cannot ship without
 * somebody deciding whether it belongs in the sitemap.
 *
 * Run from `npm run build`, so the file in dist/ is never older than the
 * routes beside it.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ORIGIN = "https://www.mintrewards.app";

/**
 * Every route, and what to do with it.
 *
 * `priority` is a hint about relative importance within this site only —
 * it says nothing to Google about ranking against anyone else. The home
 * page and the two section landings carry the most; legal pages carry
 * least because they are necessary rather than sought.
 */
const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/personal", priority: "0.9", changefreq: "monthly" },
  { path: "/how-it-works", priority: "0.8", changefreq: "monthly" },
  { path: "/co2-calculator", priority: "0.7", changefreq: "monthly" },
  { path: "/faqs", priority: "0.6", changefreq: "monthly" },
  { path: "/about", priority: "0.6", changefreq: "yearly" },
  { path: "/story", priority: "0.5", changefreq: "yearly" },
  { path: "/careers", priority: "0.6", changefreq: "weekly" },
  { path: "/contact", priority: "0.6", changefreq: "yearly" },

  { path: "/business", priority: "0.9", changefreq: "monthly" },
  { path: "/business/waste-management", priority: "0.8", changefreq: "monthly" },
  { path: "/business/rewards", priority: "0.8", changefreq: "monthly" },
  { path: "/business/impact", priority: "0.8", changefreq: "monthly" },
  { path: "/business/impact/tracifai", priority: "0.7", changefreq: "monthly" },
  { path: "/business/impact/sectors", priority: "0.7", changefreq: "monthly" },
  { path: "/business/impact/regulations", priority: "0.7", changefreq: "monthly" },

  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
];

/**
 * Routes that exist but must never be listed.
 *
 * `/app` is a redirect to the stores — listing a redirect asks a crawler
 * to index a URL that answers with somebody else's page. `*` is the 404.
 */
const EXCLUDED = new Set(["/app", "*"]);

/* Comments first. App.tsx keeps two retired home variants commented out,
   and a naive match treats them as live routes. */
const source = readFileSync(join(root, "src/App.tsx"), "utf8")
  .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
  .replace(/\/\*[\s\S]*?\*\//g, "");

const declared = [...source.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((p) => !EXCLUDED.has(p));

const listed = new Set(ROUTES.map((r) => r.path));
const missing = declared.filter((p) => !listed.has(p));
const stale = [...listed].filter((p) => !declared.includes(p));

if (missing.length || stale.length) {
  console.error("sitemap is out of step with App.tsx\n");
  if (missing.length) {
    console.error(`  routed but not in the sitemap: ${missing.join(", ")}`);
    console.error("  -> add it to ROUTES, or to EXCLUDED if it should not be crawled");
  }
  if (stale.length) {
    console.error(`  in the sitemap but not routed: ${stale.join(", ")}`);
    console.error("  -> remove it, or the sitemap promises a 404");
  }
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const body = ROUTES.map(
  ({ path, priority, changefreq }) => `  <url>
    <loc>${ORIGIN}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
).join("\n");

writeFileSync(
  join(root, "public/sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`,
);

console.log(`sitemap.xml: ${ROUTES.length} urls`);
