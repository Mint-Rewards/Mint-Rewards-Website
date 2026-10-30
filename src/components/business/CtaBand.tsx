import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS_ROOT } from "../../siteMode";

/**
 * The closing band, shared by the three service pages. His component, with
 * the anchor swapped for a route — his links to #enquiry on the same page,
 * and the form is on the page here too, so the anchor still works; the
 * contact route is used where the form is not rendered.
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
  const isAnchor = href.startsWith("#");
  return (
    <section className="container section" style={{ paddingTop: 18 }}>
      <div className="cta-band">
        <div className="cta-copy">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {isAnchor ? (
          <a className="btn-primary" href={href}>
            {button}
            <ArrowRight size={15} />
          </a>
        ) : (
          <Link className="btn-primary" to={`${BUSINESS_ROOT}/contact`}>
            {button}
            <ArrowRight size={15} />
          </Link>
        )}
      </div>
    </section>
  );
}
