import {
  ArrowDown,
  ArrowRight,
  Building2,
  Globe2,
  HeartHandshake,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import CtaBand from "../components/business/CtaBand";
import EnquiryForm from "../components/business/EnquiryForm";
import AppShowcase from "../components/business/AppShowcase";
import Eyebrow from "../components/business/Eyebrow";
import PageMeta from "../components/business/PageMeta";
import "../styles/business.css";

/**
 * Rewards & brand partnerships.
 *
 * Ported from Ahsan's build: his copy, his sections, his order.
 *
 * THE RESTRAINT ON THIS PAGE IS THE POINT. It is the page a brand team
 * reads before deciding whether to partner, which makes it the page most
 * tempted to quote a user count, name a participating business or show a
 * redemption figure. His build quotes none, and says so out loud in two
 * places — the "Partnerships, with permission" section and the audience
 * section. Both are reproduced verbatim rather than paraphrased:
 *
 *   - no partner logos, because approved marks have not been supplied, and
 *     inventing a participating business is inventing an endorsement;
 *   - no registered-user, coverage, network, redemption or campaign numbers,
 *     because current approved figures do not exist yet;
 *   - the campaign workspace is labelled illustrative in its heading, its
 *     body and in every one of its four values, since a dashboard is read as
 *     real unless it insists otherwise.
 *
 * A later pass that has approved assets should add them. A pass that fills
 * these gaps with plausible-looking numbers should not.
 */

const BENEFITS = [
  [
    "Reach New Customers",
    "Showcase your business and offers to Mint Rewards users.",
    Users,
  ],
  [
    "Increase Visits & Sales",
    "Encourage customers to visit your locations or online channels through redeemable offers.",
    Target,
  ],
  [
    "Build Customer Loyalty",
    "Use discounts, vouchers and exclusive benefits to encourage repeat engagement.",
    HeartHandshake,
  ],
  [
    "Target Your Audience",
    "Explore location based or relevant audience promotions where supported by available platform functionality.",
    Globe2,
  ],
  [
    "Enhance Brand Visibility",
    "Connect your business with sustainable consumer behaviour.",
    Sparkles,
  ],
  [
    "Flexible Commercial Model",
    "Develop reward offers and promotional arrangements tailored to your business.",
    Building2,
  ],
] as const;

/**
 * His two arrays, zipped. In his build the step headings and their
 * descriptions are separate lists indexed in parallel inside the render,
 * so adding a step to one and not the other silently shifts every
 * description down by one.
 */
const STEPS: [string, string][] = [
  ["Register your business.", "Share your business and audience goals."],
  [
    "Agree on rewards and offers.",
    "Shape offer terms and eligibility together.",
  ],
  [
    "Publish eligible offers through Mint Rewards.",
    "Eligible offers are made available through Mint Rewards.",
  ],
  [
    "Engage users and encourage redemptions.",
    "Encourage redemption across agreed channels.",
  ],
  [
    "Review campaign activity and opportunities.",
    "Discuss available campaign activity and next opportunities.",
  ],
];

const CATEGORIES = [
  "Restaurants & cafés",
  "Retail & fashion",
  "FMCG",
  "Electronics & appliances",
  "Hospitality & travel",
  "Health & wellness",
  "Lifestyle & services",
];

/*
 * SAMPLE FIGURES. INVENTED. NOT TO BE QUOTED ANYWHERE.
 *
 * These four read "Illustrative", "Sample view", "Not live data" and "No
 * metric supplied" where their numbers go. That did not read as restraint,
 * it read as a broken component — and a workspace mock that shows no
 * numbers stops demonstrating the one thing it is on the page to
 * demonstrate, which is what a brand team would actually look at.
 *
 * They hold figures now and the labelling moves to the frame: the eyebrow
 * says illustrative, a tag sits directly above the tiles, and the body
 * copy repeats it in full. Same trade as the RecovLoop dashboard.
 *
 * THE NUMBERS INTERLOCK, which is the part worth preserving if anyone
 * edits them: four of the six campaigns are live, and 2,310 redemptions
 * against 18,400 reached is about one in eight. Sample numbers that do not
 * add up read as carelessness rather than as a placeholder, and a brand
 * team is exactly the audience that checks.
 */
const WORKSPACE: [string, string][] = [
  ["Offers live", "4 of 6"],
  ["Campaigns this quarter", "6"],
  ["Redemptions", "2,310"],
  ["Audience reached", "18,400"],
];

export default function Rewards() {
  return (
    <div className="b2b">
      <PageMeta
        title="Rewards & Brand Partnerships Pakistan | Mint Rewards"
        description="Partner with Mint Rewards in Pakistan to connect your brand with consumers through exclusive offers, rewards and sustainability-linked engagement."
      />
      <main id="main" className="rewards">
        <section className="page-hero">
          <div className="container hero-grid">
            <div>
              <Eyebrow>Mint Rewards · Brand partnerships</Eyebrow>
              <h1>Turn Sustainability into Customer Loyalty.</h1>
              <p className="hero-sub">
                Reach New Customers. Drive Sales. Build Lasting Relationships.
              </p>
              <p className="hero-copy">
                Partner with Mint Rewards and connect your business with
                consumers through exclusive discounts, rewards and promotional
                experiences linked to positive environmental action.
              </p>
              <div className="hero-actions">
                <a href="#enquiry" className="btn-primary">
                  Become a Rewards Partner <ArrowRight size={15} />
                </a>
                <a href="#how-it-works" className="btn-secondary">
                  How it works <ArrowDown size={15} />
                </a>
              </div>
            </div>
            <div className="hero-art">
              <img
                src="/images/recovery-hero.jpg"
                alt="Materials being sorted for recovery as consumers and businesses participate in a circular economy"
              />
              <div className="photo-shade" />
              <div className="floating-note">
                <strong>More than an offer</strong>Build a reason to return
              </div>
              <div className="art-caption">
                Rewards that make positive action relevant
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <Eyebrow>Commercial first. Purpose in the mix.</Eyebrow>
              <h2>Make your next customer connection count.</h2>
              <p>
                Mint Rewards gives brands a way to shape relevant offers and
                build engagement around positive environmental action.
              </p>
            </div>
            <div className="two-col-feature">
              {BENEFITS.map(([heading, copy, Icon]) => (
                <article className="benefit" key={heading}>
                  <div className="card-icon">
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3>{heading}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="how-it-works">
          <div className="container">
            <div className="section-head">
              <Eyebrow>A straightforward partnership journey</Eyebrow>
              <h2>From first conversation to campaign review.</h2>
            </div>
            {/*
              The column count comes from the data, not a number typed into
              the stylesheet. At a fixed four, these five steps put "Review
              campaign activity" alone on a second row — a pathway with a
              stranded last stop.
            */}
            <div
              className="process-grid"
              style={{ ["--steps" as string]: STEPS.length }}
            >
              {STEPS.map(([heading, copy], i) => (
                <div className="process-step" key={heading}>
                  {/* The run of path to the NEXT stop, so the last one has
                      none. Decorative: the order is already in the markup
                      and the numbers are generated by a counter. */}
                  {i < STEPS.length - 1 && (
                    <span className="process-link" aria-hidden="true" />
                  )}
                  <h3>{heading}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*
          STILL LOAD-BEARING, BUT ONE CLAIM HAS CHANGED. Read before editing.

          This section used to say that app screens had not been supplied,
          beside a placeholder box. It now shows one — the coupon screen the
          consumer site already publishes, carrying a Dawlance offer. That
          is our own artwork showing a partner who already appears publicly,
          so it repeats a public claim rather than making a new one, and the
          sentence about app screens had to go with the placeholder or it
          would have been describing the opposite of what is on screen.

          WHAT MUST STAY is the rest: no approved marks for a partner
          showcase, and no invented businesses, offers or endorsements. One
          real screen does not license a wall of logos we were never given.
        */}
        <section className="section">
          <div className="container split">
            <div>
              <Eyebrow>Partnerships, with permission</Eyebrow>
              <div className="section-head">
                <h2>Good partnerships deserve the real thing.</h2>
                <p>
                  Recycle, collect points, redeem them with partner brands
                  &mdash; the whole loop in twenty seconds. Approved marks for
                  a full partner showcase have not been supplied, and we will
                  not invent participating businesses, offers or endorsements.
                </p>
              </div>
              <p className="body-copy">
                Potential partner categories include restaurants and cafés,
                retail and fashion, FMCG, electronics and appliances,
                hospitality and travel, health and wellness, lifestyle and
                services.
              </p>
            </div>
            <AppShowcase
              src="/media/app-showcase.mp4"
              poster="/media/app-showcase-poster.jpg"
              caption="Mint Rewards, end to end"
              description="A short film: recycling waste earns points in the Mint Rewards app, and those points are redeemed against offers from partner brands."
            />
          </div>
        </section>

        {/* LOAD-BEARING. Names every figure that is deliberately absent. */}
        <section className="section section-soft">
          <div className="container">
            <div className="section-head center">
              <Eyebrow>Audience &amp; reach</Eyebrow>
              <h2>Start with a conversation, not a made-up metric.</h2>
              <p>
                Registered user, geographic coverage, partner network,
                redemption and campaign activity figures are intentionally
                omitted until current, approved data is available.
              </p>
            </div>
            <div
              className="category-chips"
              style={{ justifyContent: "center" }}
            >
              {CATEGORIES.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="visual-dashboard">
              <div>
                <Eyebrow>Illustrative campaign workspace</Eyebrow>
                <h3>Campaign views, built around your goals.</h3>
                <p>
                  A visual example of the kind of information a brand team may
                  want to review. This is conceptual, not a live dashboard or
                  performance report.
                </p>
              </div>
              <div>
                {/* Directly above the numbers, because that is where
                    somebody reading them is looking. */}
                <div className="sample-tag">Sample data &middot; not a report</div>
                <div className="dashboard-sample">
                  {WORKSPACE.map(([label, value]) => (
                    <div className="metric-light" key={label}>
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBand
          title="Ready to Grow with Mint Rewards?"
          description="Become a Rewards Partner and explore an offer model shaped for your business."
          button="Become a Rewards Partner"
        />

        <EnquiryForm service="rewards" title="Become a Rewards Partner" />
      </main>
    </div>
  );
}
