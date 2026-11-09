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
import { ORIGIN, ROUTES, EXCLUDED } from "./routes.mjs";

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
