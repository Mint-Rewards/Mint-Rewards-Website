import type { ReactNode } from "react";

/**
 * The small blue label above a heading.
 *
 * A <div>, NOT a <p>, and that is the whole point of this file existing.
 *
 * `.b2b .section-head p { color:#65727b }` is more specific than
 * `.b2b .eyebrow`, so an eyebrow rendered as a paragraph inside a section
 * head loses its blue and comes out grey. Every eyebrow above a section
 * heading was wrong that way once; the one in the hero, which sits outside a
 * section-head, was right — which is why it read as inconsistent rather than
 * as broken, and took a diff rather than a glance to find.
 *
 * It lived as a private copy in each page until there were four of them. The
 * comment is the asset here: a copy that loses it is one `<p>` away from the
 * same bug.
 */
export default function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}
