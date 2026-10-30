/**
 * Which of the two sites the visitor is on.
 *
 * Mint Rewards speaks to two audiences who want unrelated things. A household
 * wants to know what they get for recycling; a café wants to know who collects,
 * how often, and what it costs. Those are not the same page with different
 * words, so they are not the same site — the header switches between them.
 *
 * DERIVED FROM THE URL, never stored. A mode kept in state or localStorage
 * would mean a link to a business page could open the consumer site, and the
 * two would disagree after a back button. The path is the only thing both the
 * visitor and the router already agree on, so it is the source of truth.
 *
 * Everything under /business belongs to the business site. Pages shared by
 * both — terms, privacy, careers — resolve to `personal`, which is right:
 * they are company pages, and the consumer site is the company's front door.
 */
export type SiteMode = "personal" | "business";

export const BUSINESS_ROOT = "/business";

export function siteModeFor(pathname: string): SiteMode {
  return pathname === BUSINESS_ROOT || pathname.startsWith(`${BUSINESS_ROOT}/`)
    ? "business"
    : "personal";
}

/**
 * Where the switch sends you.
 *
 * To the other site's HOME, not to an equivalent page, because there is no
 * equivalence to honour: /co2-calculator has no business counterpart and a
 * waste-collection quote has no consumer one. Trying to map between them would
 * land people on a 404 or, worse, a page that quietly is not what they were
 * reading a moment ago.
 */
export function switchTarget(mode: SiteMode): string {
  return mode === "business" ? "/" : BUSINESS_ROOT;
}
