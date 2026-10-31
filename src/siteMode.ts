/**
 * Which of the two sites the visitor is on.
 *
 * "consumer", not "personal". docs/VOCABULARY.md uses consumer throughout —
 * consumer-facing, consumer incentive, consumer routes — and never defines
 * personal as a term. The switch in the header says Consumer for the same
 * reason. The `/personal` ROUTE keeps its path: a URL is a published
 * contract and renaming it breaks every link already shared.
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
 * both — terms, privacy, careers — resolve to `consumer`, which is right:
 * they are company pages, and the consumer site is the company's front door.
 */
export type SiteMode = "consumer" | "business";

export const BUSINESS_ROOT = "/business";

export function siteModeFor(pathname: string): SiteMode {
  return pathname === BUSINESS_ROOT || pathname.startsWith(`${BUSINESS_ROOT}/`)
    ? "business"
    : "consumer";
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

/**
 * Which brand's mark the header should wear.
 *
 * RecovLoop is a sub-brand with its own identity — its own guide, palette and
 * logo — and its page is the one place a visitor is reading about RecovLoop
 * rather than about Mint. Wearing the Mint mark there makes the page look
 * like a Mint page about a product, when it is meant to read as the product's
 * own front door.
 *
 * Derived from the path like everything else here, so a shared link to the
 * RecovLoop page opens wearing the right mark rather than correcting itself
 * after a render.
 */
export type Brand = "mint" | "recovloop";

export const RECOVLOOP_ROOT = `${BUSINESS_ROOT}/waste-management`;

export function brandFor(pathname: string): Brand {
  return pathname === RECOVLOOP_ROOT || pathname.startsWith(`${RECOVLOOP_ROOT}/`)
    ? "recovloop"
    : "mint";
}
