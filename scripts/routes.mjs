/**
 * The routes this site serves, and what each is for.
 *
 * ONE LIST, TWO CONSUMERS. The sitemap generator and the prerenderer both
 * read it, because two copies would eventually disagree and the symptom —
 * a URL in the sitemap with no prerendered HTML behind it — looks like a
 * crawler problem rather than a drifted constant.
 *
 * make-sitemap.mjs checks this against App.tsx and fails on drift, so a
 * route cannot reach the prerenderer without first being a decision here.
 */
export const ORIGIN = "https://www.mintrewards.app";

export const ROUTES = [
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
 * Routed, but never listed and never prerendered.
 *
 * `/app` is a redirect to the app stores — prerendering it would capture
 * a redirect mid-flight, and listing it asks a crawler to index a URL
 * that answers with somebody else's page. `*` is the 404.
 */
export const EXCLUDED = new Set(["/app", "*"]);
