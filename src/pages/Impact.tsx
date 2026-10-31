import {
  ArrowDown,
  ArrowRight,
  Globe2,
  HeartHandshake,
  PackageCheck,
  Recycle,
  Users,
} from "lucide-react";
import CtaBand from "../components/business/CtaBand";
import EnquiryForm from "../components/business/EnquiryForm";
import Eyebrow from "../components/business/Eyebrow";
import PageMeta from "../components/business/PageMeta";
import "../styles/business.css";

/**
 * Impact solutions — corporate sustainability programmes.
 *
 * Ported from Ahsan's build: his copy, his sections, his order.
 *
 * THE DISCLAIMERS ARE THE DESIGN HERE, as on the rewards page. This is the
 * page a CSR or sustainability team reads, and a sustainability claim that
 * cannot be evidenced is the kind that ends up quoted back in an audit. His
 * build therefore refuses to state an outcome it cannot support, and says
 * so where a reader would otherwise assume one:
 *
 *   - the impact view names six indicators and gives every one of them a
 *     placeholder, under a heading that calls it conceptual and a line that
 *     says no actual programme data is represented;
 *   - the closing section states that indicators reflect the programme and
 *     are not borrowed impact claims.
 *
 * Replacing a placeholder here means having the operational record behind
 * it. Nothing on this page should read as a measured result until it is one.
 */

const SOLUTIONS = [
  [
    "Sponsored Recycling & Recovery",
    "Fund defined waste recovery programmes targeting selected materials, locations or communities.",
    Recycle,
  ],
  [
    "Corporate & Employee Engagement",
    "Deliver workplace recycling campaigns, awareness activities and sustainability challenges.",
    Users,
  ],
  [
    "Community Recycling Programmes",
    "Support recycling initiatives in residential communities, educational institutions and other locations.",
    Globe2,
  ],
  [
    "Brand & Consumer Campaigns",
    "Engage consumers through co branded recycling and environmental initiatives.",
    HeartHandshake,
  ],
  [
    "Impact Measurement & Reporting",
    "Define programme indicators and report on outcomes supported by available operational records.",
    PackageCheck,
  ],
] as const;

const REASONS = [
  "Practical implementation",
  "Defined sustainability objectives",
  "Community participation",
  "Measurable programme activity",
  "Brand engagement",
  "Flexible programme design",
];

const SHAPE = [
  "Objectives & scope",
  "Locations & participants",
  "Recovery activity",
  "Review & reporting",
];

/*
 * SAMPLE FIGURES. INVENTED. NOT TO BE QUOTED ANYWHERE.
 *
 * These six read "Sample only", "Illustrative", "Example view" and so on
 * where their numbers go. That did not read as restraint, it read as a
 * broken component — and a view whose whole purpose is to show what
 * programme reporting looks like cannot do that with no figures in it.
 *
 * THEY DESCRIBE ONE COHERENT PROGRAMME, which is the part to preserve if
 * anyone edits them. 1,860 households across 14 locations is about 130
 * each; 412 tonnes across those households is roughly 220kg apiece; 298
 * of 412 tonnes recovered is the 72%; and 1,860 taking part of the ~2,740
 * invited is the 68%. Figures that do not reconcile read as carelessness
 * rather than as a placeholder, and a sustainability team is exactly the
 * audience that adds them up.
 *
 * The frame says what they are three times over: the eyebrow calls the
 * view conceptual, a tag sits directly above the tiles, and the line
 * beneath the copy states plainly that no actual programme data is
 * represented. All three stay.
 */
const INDICATORS: [string, string][] = [
  ["Materials collected", "412 t"],
  ["Materials recovered", "298 t"],
  ["Recovery rate", "72%"],
  ["Participating households", "1,860"],
  ["Programme locations", "14"],
  ["Community participation", "68%"],
];

const FOCUS = [
  "Circularity",
  "Participation",
  "Recovery",
  "Community engagement",
  "Operational records",
  "Programme reporting",
];

export default function Impact() {
  return (
    <div className="b2b">
      <PageMeta
        title="Corporate Sustainability & Recycling Programmes | Mint Rewards"
        description="Design corporate sustainability programmes with Mint Rewards: recycling, resource recovery and community engagement with practical measurement and reporting."
      />
      <main id="main" className="impact">
        <section className="page-hero">
          <div className="container hero-grid">
            <div>
              <Eyebrow>Mint Rewards · Impact solutions</Eyebrow>
              <h1>Go Beyond Sustainability Commitments.</h1>
              <p className="hero-sub">
                Create Real Programmes. Engage Communities. Measure Impact.
              </p>
              <p className="hero-copy">
                Mint Rewards helps organisations design and deliver recycling,
                resource recovery and community engagement programmes aligned
                with their sustainability goals.
              </p>
              <div className="hero-actions">
                <a href="#enquiry" className="btn-primary">
                  Discuss an Impact Programme <ArrowRight size={15} />
                </a>
                <a href="#solutions" className="btn-secondary">
                  Explore solutions <ArrowDown size={15} />
                </a>
              </div>
            </div>
            <div className="hero-art">
              <img
                src="/images/recovery-hero.jpg"
                alt="A material recovery facility supporting practical sustainability programmes"
              />
              <div className="photo-shade" />
              <div className="floating-note">
                <strong>From intent to activity</strong>Build a programme
                people can join
              </div>
              <div className="art-caption">
                A practical foundation for measurable programmes
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="container">
            <div className="section-head">
              <Eyebrow>Purpose, designed into practice</Eyebrow>
              <h2>Our Impact Solutions</h2>
              <p>
                Programmes can be developed around defined objectives,
                participant groups, materials and operational realities.
              </p>
            </div>
            <div className="services-grid">
              {SOLUTIONS.map(([heading, copy, Icon]) => (
                <article className="service-tile" key={heading}>
                  <div className="card-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{heading}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container split">
            <div>
              <Eyebrow>Practical by design</Eyebrow>
              <div className="section-head">
                <h2>Why partner with Mint?</h2>
                <p>
                  Connect ambitions to programmes people can take part in, then
                  agree on indicators that fit the work and available records.
                </p>
              </div>
              <ul className="benefit-list" style={{ fontSize: 14, gap: 14 }}>
                {REASONS.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div className="ecosystem">
              <div className="tagline">A programme takes shape</div>
              <div className="flow" style={{ flexDirection: "column" }}>
                {SHAPE.map((step, i) => (
                  <div className="flow-step" key={step}>
                    <span>0{i + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LOAD-BEARING. The heading, the body and the small print all say
            this is conceptual, and every value below is a placeholder. A
            dashboard is read as real unless it insists otherwise. */}
        <section className="section">
          <div className="container">
            <div className="visual-dashboard">
              <div>
                <Eyebrow>Conceptual impact view</Eyebrow>
                <h3>Make programme activity easier to understand.</h3>
                <p>
                  Define indicators such as materials collected, materials
                  recovered, participating households, community
                  participation, programme locations and environmental
                  measures appropriate to your programme.
                </p>
                <small style={{ color: "#a9c8b9" }}>
                  All values shown are examples only. No actual programme data
                  is represented.
                </small>
              </div>
              <div>
                {/* Directly above the numbers, because that is where
                    somebody reading them is looking. */}
                <div className="sample-tag">Sample data &middot; not a report</div>
                <div className="dashboard-sample">
                  {INDICATORS.map(([label, value]) => (
                    <div className="metric-light" key={label}>
                      <span>{label}</span>
                      <strong style={{ fontSize: 14 }}>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head center">
              <Eyebrow>Built around the outcome</Eyebrow>
              <h2>One programme. A clear line of sight.</h2>
              <p>
                Every initiative is shaped with its own scope, partners,
                collection arrangements and reporting approach. Indicators
                reflect the programme—not borrowed impact claims.
              </p>
            </div>
            <div
              className="category-chips"
              style={{ justifyContent: "center" }}
            >
              {FOCUS.map((f) => (
                <span className="chip" key={f}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Let's Build Your Next Sustainability Programme."
          description="Share your sustainability priorities and we can explore a practical programme together."
          button="Discuss an Impact Programme"
        />

        <EnquiryForm service="impact" title="Discuss an impact programme" />
      </main>
    </div>
  );
}
