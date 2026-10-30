import { ArrowRight } from "lucide-react";

/**
 * The closing band, shared by the three service pages.
 *
 * His links to #enquiry on the same page, and the form is on every business
 * page here too, so the anchor works everywhere this renders.
 *
 * It used to carry a second branch that routed a non-anchor href to
 * /business/contact. Nothing passed one, and that route was never built — so
 * the branch was dead code whose only effect, had anything reached it, would
 * have been a 404. If a contact page is ever built, this takes a route again.
 */
export default function CtaBand({
  title,
  description,
  button = "Talk to Our Team",
  href = "#enquiry",
}: {
  title: string;
  description: string;
  button?: string;
  href?: string;
}) {
  return (
    <section className="container section" style={{ paddingTop: 18 }}>
      <div className="cta-band">
        <div className="cta-copy">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <a className="btn-primary" href={href}>
          {button}
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
