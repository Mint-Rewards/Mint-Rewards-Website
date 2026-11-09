import { useEffect } from "react";

/**
 * A block of structured data for one page.
 *
 * Separate from PageMeta because the two answer different questions.
 * PageMeta describes the page — title, description, canonical. This
 * describes what is ON it, and only some pages have something worth
 * describing: a list of questions, a product, an article.
 *
 * Keyed by `id` so a route change replaces its own block rather than
 * stacking a second one. Without that, navigating between two pages that
 * both carry schema leaves both in the head, and a crawler reading two
 * contradictory descriptions of one page trusts neither.
 */
export default function JsonLd({ id, data }: { id: string; data: unknown }) {
  useEffect(() => {
    const selector = `script[data-jsonld="${id}"]`;
    let el = document.querySelector<HTMLScriptElement>(selector);
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.dataset.jsonld = id;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
    return () => {
      /* Removed on unmount: this describes THIS page, and leaving it
         behind would have it describe the next one. */
      document.querySelector(selector)?.remove();
    };
  }, [id, data]);

  return null;
}
