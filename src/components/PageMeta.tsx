import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Per-route metadata for every page on the site.
 *
 * MOVED OUT OF components/business. It began as a business-pages fix and
 * is now on all of them, and a consumer page importing from a `business`
 * folder reads as an accident rather than a decision.
 *
 * It was missing from my port entirely, and nothing on screen said so —
 * which is exactly why the B2B ticket called this out as the easiest thing
 * to lose in a port. Every business page shared the consumer site's single
 * <title> and description, so the pages meant to be found by procurement
 * teams searching for industrial waste services in Pakistan described a
 * consumer recycling app instead.
 *
 * ONE DELIBERATE CHANGE FROM HIS: he sets robots to noindex,nofollow,
 * correct for a Replit preview that must not outrank the real site. That is
 * the opposite of what this needs once it ships, so it takes a prop and
 * defaults to indexable — with the preview behaviour still one flag away.
 *
 * Client-side, like his. It is a Vite SPA, so a crawler that does not run
 * JavaScript sees the shell. Google does run it; others vary. Whether these
 * pages need prerendering to rank is a real question and is tracked
 * separately — worth settling before the content work, not after.
 */
export default function PageMeta({
  title,
  description,
  noindex = false,
  image,
}: {
  title: string;
  description: string;
  noindex?: boolean;
  /** Absolute, or site-root relative. Falls back to the document default. */
  image?: string;
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = `https://www.mintrewards.app${pathname}`;
    document.title = title;

    const ensureMeta = (
      selector: string,
      attribute: string,
      name: string,
      content: string,
    ) => {
      let meta = document.querySelector<HTMLMetaElement>(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    ensureMeta('meta[name="description"]', "name", "description", description);
    ensureMeta('meta[property="og:title"]', "property", "og:title", title);
    ensureMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description,
    );
    ensureMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      noindex ? "noindex,nofollow" : "index,follow",
    );

    /*
     * og:url has to move with the route.
     *
     * index.html carries the site defaults, and a share of /business/impact
     * that still said og:url=/ would have every link on social resolve to
     * the home page. The image is left to the document default unless a
     * page passes one: a wrong picture is worse than a generic one.
     */
    ensureMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    ensureMeta('meta[property="og:type"]', "property", "og:type", "website");
    ensureMeta(
      'meta[property="og:site_name"]',
      "property",
      "og:site_name",
      "Mint Rewards",
    );
    ensureMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    ensureMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description,
    );
    if (image) {
      const url = image.startsWith("http")
        ? image
        : `https://www.mintrewards.app${image}`;
      ensureMeta('meta[property="og:image"]', "property", "og:image", url);
      ensureMeta('meta[name="twitter:image"]', "name", "twitter:image", url);
    }

    let canonical =
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let schema = document.querySelector<HTMLScriptElement>(
      'script[data-page-schema="mint-business"]',
    );
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.pageSchema = "mint-business";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonicalUrl,
      publisher: {
        "@type": "Organization",
        name: "Mint Rewards",
        url: "https://www.mintrewards.app/",
      },
    });
  }, [title, description, noindex, image, pathname]);

  return null;
}
