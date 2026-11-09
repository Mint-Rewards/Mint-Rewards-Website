import { useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * The impact section's own navigation, under the site header.
 *
 * WHY A SECOND BAR RATHER THAN MORE TABS UP TOP. NavbarDark records its
 * business tabs at 440px clearing the centred consumer/business switch at
 * about 1500, and the wireframe's menu is five items plus a CTA. Adding
 * them to that row would collapse the main nav to a hamburger on a 13"
 * laptop, which is a bug that was already fixed once in this repo.
 *
 * The header is `fixed` and reserves no space, so this bar carries the
 * 64px offset itself and sticks just underneath it.
 *
 * Resources holds only Regulations for now: the wireframe lists News &
 * Insights and Events & Webinars, and neither exists — the insights
 * section on the hub is behind SHOW_INSIGHTS = false. A menu item that
 * goes nowhere is worse than a shorter menu.
 */

const HUB = "/business/impact";

const SOLUTIONS: [string, string][] = [
  ["Circular Economy", `${HUB}#circular`],
  ["ESG Consulting", `${HUB}#esg`],
  ["People ESG Training", `${HUB}#people`],
];

const RESOURCES: [string, string][] = [
  ["Regulations & Disclosures", `${HUB}/regulations`],
];

export default function ImpactNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  /*
   * An in-page anchor has to be handled, not just linked.
   *
   * react-router sets the hash and does not scroll, and a plain <a href>
   * would reload the whole SPA. So: scroll when we are already on the hub,
   * navigate then scroll when we are not.
   */
  const goToAnchor = useCallback(
    (event: React.MouseEvent, href: string) => {
      event.preventDefault();
      const [path, hash] = href.split("#");
      const scroll = () => {
        const el = document.getElementById(hash!);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      if (pathname === path) {
        scroll();
      } else {
        navigate(path);
        /* After the route has painted. The hub is a static page, so one
           frame is enough; there is nothing to wait on. */
        requestAnimationFrame(() => requestAnimationFrame(scroll));
      }
    },
    [navigate, pathname],
  );

  const on = (path: string) => (pathname === path ? "active" : undefined);

  return (
    <nav className="impact-nav" aria-label="Impact solutions">
      {/* Full width with 24px gutters, matching the site header's
          `w-full px-6` — not the 1200px content container, which made the
          two bars end at different places on a wide screen. */}
      <div className="impact-nav-row">
        <span className="impact-nav-brand">Mint Impact Solutions</span>

        <div className="impact-nav-links">
          <div className="impact-nav-item">
            <button type="button">
              Solutions <span className="caret" />
            </button>
            <div className="impact-dropdown">
              {SOLUTIONS.map(([label, href]) => (
                <a key={label} href={href} onClick={(e) => goToAnchor(e, href)}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <Link to={`${HUB}/sectors`} className={on(`${HUB}/sectors`)}>
            Sectors
          </Link>
          <Link to={`${HUB}/tracifai`} className={on(`${HUB}/tracifai`)}>
            Tracifai
          </Link>
          <Link to={HUB} className={on(HUB)}>
            Our Impact
          </Link>

          <div className="impact-nav-item">
            <button type="button">
              Resources <span className="caret" />
            </button>
            <div className="impact-dropdown">
              {RESOURCES.map(([label, href]) => (
                <Link key={label} to={href}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <a className="btn-primary impact-nav-cta" href="#enquiry">
          Book a consultation <ArrowRight size={13} />
        </a>
      </div>
    </nav>
  );
}
