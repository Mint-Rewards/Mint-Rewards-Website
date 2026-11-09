import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  Clock3,
  Diamond,
  GraduationCap,
  Heart,
  Link2,
  Recycle,
  ScrollText,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import EnquiryForm from "../components/business/EnquiryForm";
import Eyebrow from "../components/business/Eyebrow";
import ImpactNav from "../components/business/ImpactNav";
import PageMeta from "../components/PageMeta";
import "../styles/business.css";

/**
 * Impact solutions — the Mint Impact Solutions wireframe, page 01.
 *
 * THE COPY IS THE WIREFRAME'S, VERBATIM. An earlier pass rewrote almost
 * every line of it — the hero lead, the pillar descriptions, the FAQ, the
 * ledger rows — and dropped the insights section entirely, which was not
 * a port of anything. The brief was the wireframe's content in this
 * site's design language, so the only thing that changes crossing over
 * is the markup and the palette.
 *
 * WHAT THAT MEANS, SINCE IT WAS RAISED AND OVERRULED. The wireframe
 * states things this repo cannot support, and they are now on the page:
 *
 *   - "we verify every claim with our own traceability technology", and
 *     the ledger's ON-CHAIN / VALID / PROVEN stamps. WasteManagement.tsx
 *     says, flagged LOAD-BEARING against section 15 of the spec, that
 *     Tracifai is "not a subsidiary or Mint-owned product" and that its
 *     verification is "not represented as operational". Those two pages
 *     now contradict each other. That is a decision for the owner, not
 *     something to resolve by quietly rewording one of them.
 *   - "Offices — Karachi & London". Nothing in this repo mentions a
 *     London office; the FAQ says Karachi, Lahore and Islamabad.
 *   - "100% Claims traceable via Tracifai" and "9 Priority sectors
 *     served" — the latter against RecovLoop's line that its sector list
 *     "does not represent confirmed clients".
 *   - "Circularity claim — 72% diverted" is the figure from this page's
 *     old INDICATORS placeholder, which was explicitly invented.
 *
 * Also gone, because the wireframe has no equivalent section: Ahsan's
 * five impact solutions, and the conceptual indicator view with its
 * three disclaimers. Both are recoverable from git if they are wanted
 * back alongside this.
 */

const PILLARS = [
  [
    "Circular Economy Consulting",
    "Turn waste into verified, revenue-bearing circular systems.",
    Recycle,
    "Explore",
    "#circular",
  ],
  [
    "ESG Consulting",
    "Make your ESG performance measured, reported, and defensible.",
    ScrollText,
    "Explore",
    "#esg",
  ],
  [
    "People ESG Training",
    "Build the internal capability that keeps ESG alive.",
    GraduationCap,
    "Explore",
    "#people",
  ],
] as const;

const LEDGER = [
  [
    "Recycled PET — Batch 4821",
    "Source to recovery, 6 checkpoints",
    "ON-CHAIN",
    Recycle,
  ],
  [
    "Scope 3 emissions data",
    "Supplier-validated, audit-ready",
    "VALID",
    Clock3,
  ],
  [
    "Circularity claim — 72% diverted",
    "Evidence trail attached",
    "PROVEN",
    Sparkles,
  ],
] as const;

const PROOF = [
  ["9", "Priority sectors served"],
  ["100%", "Claims traceable via Tracifai"],
  ["5", "Global reporting frameworks"],
];

const CIRCULAR_CHIPS = [
  "Circular strategy & roadmap",
  "Material flow design",
  "Recycling & recovery",
  "Nature & biodiversity",
  "Resource efficiency",
];

const CIRCULAR_STEPS = [
  ["Map the material streams", "Baseline waste, inputs, recovery points", Target],
  ["Design the circular system", "Reduce, recycle, redesign supply loops", Recycle],
  ["Verify with Tracifai", "Audit-ready evidence at every checkpoint", BadgeCheck],
] as const;

const ESG_CHIPS = [
  "ESG & sustainability strategy",
  "Materiality assessment",
  "Stakeholder engagement",
  "CSR policy & governance",
];

const ESG_STEPS = [
  ["Strategy & materiality", "What matters to your stakeholders", Diamond],
  ["Measure & collect", "Verified data, not estimates", Clock3],
  ["Report & assure", "Defensible to board and regulator", CheckCircle2],
] as const;

const STANDARDS = ["GRI", "CSRD", "TCFD", "CDP", "ISSB"];

const PEOPLE_CHIPS = [
  "ESG & sustainability training",
  "Leadership & culture",
  "DEI education",
  "Community engagement",
];

const PEOPLE_STEPS = [
  ["Board & leadership", "Set the tone and the mandate", Target],
  ["Managers & teams", "Translate strategy into daily practice", Users],
  ["Community & culture", "Engagement that sustains the programme", Heart],
] as const;

const ENGINE_FEATURES = [
  ["Blockchain-backed verification", Link2],
  ["AI-driven data capture", Sparkles],
  ["Audit-ready evidence trail", Clock3],
] as const;

const SECTORS = [
  "Textile & Apparel",
  "PET & Polymers",
  "Food Systems",
  "Health",
  "Power & Utilities",
  "Technology & Telecom",
  "Retail",
  "Property & Construction",
  "Financial Services",
];

/*
 * Off until the articles exist.
 *
 * A flag rather than commented-out markup: the section stays
 * type-checked, linted and formatted while it is dark, so turning it
 * back on is one word rather than a merge of rotted JSX. The three
 * entries are the wireframe's, kept verbatim.
 */
const SHOW_INSIGHTS = false;

const INSIGHTS: [string, string, string][] = [
  [
    "Circularity",
    "Why circular claims need a chain of evidence",
    "Traceability is what turns a sustainability story into something a buyer can trust.",
  ],
  [
    "Disclosure",
    "CSRD is coming for your supply chain data",
    "What EU-facing exporters in the region need to put in place now.",
  ],
  [
    "People",
    "ESG dies in the handover. Here is how to keep it alive.",
    "Internal capability is the difference between a report and a programme.",
  ],
];

const FAQS: [string, string][] = [
  [
    "What standards do you report against?",
    "We deliver reporting aligned to GRI, CSRD, TCFD, CDP and ISSB, and give you a verified evidence trail through Tracifai so disclosures hold up to assurance.",
  ],
  [
    "How is Tracifai different from a normal ESG platform?",
    "Most platforms store self-reported estimates. Tracifai verifies the data behind your claims and records it in a tamper-evident, audit-ready form.",
  ],
  [
    "Do you work with organisations early in their ESG journey?",
    "Yes. We meet you where you are, from first materiality assessment through to full disclosure and verified circular systems.",
  ],
  [
    "How do we get started?",
    "Book a consultation. We scope your priorities and show you where verified data changes what you can credibly claim.",
  ],
];

export default function Impact() {
  return (
    <div className="b2b">
      <PageMeta
        title="Technology for Good, proven | Mint Impact Solutions"
        description="Circular economy consulting, ESG consulting and people ESG training, with every claim verified through Tracifai."
      />
      <ImpactNav />
      <main id="main" className="impact">
        <section className="page-hero">
          <div className="container hero-grid">
            <div>
              <Eyebrow>Technology for Good</Eyebrow>
              <h1>Technology for Good, proven.</h1>
              <p className="hero-copy">
                We help organisations build circular, low-impact, people-first
                operations, and we verify every claim with our own traceability
                technology.
              </p>
              <div className="hero-actions">
                <a href="#enquiry" className="btn-primary">
                  Book a consultation <ArrowRight size={15} />
                </a>
                <Link to="/business/impact/tracifai" className="btn-secondary">
                  See how Tracifai works
                </Link>
              </div>
              <div className="hero-trust">
                <div className="t">
                  <strong>GRI &middot; CSRD</strong>
                  <span>Reporting standards we deliver against</span>
                </div>
                <div className="t">
                  <strong>2</strong>
                  <span>Offices — Karachi &amp; London</span>
                </div>
                <div className="t">
                  <strong>Verified</strong>
                  <span>Claims backed by Tracifai</span>
                </div>
              </div>
            </div>
            {/* The wireframe's live-ledger card, in this site's panel
                chrome rather than its deep green one. */}
            <div className="dashboard">
              <div className="dash-top">
                <span>TRACIFAI &middot; LIVE LEDGER</span>
                <span className="sample-label">● VERIFIED</span>
              </div>
              <div className="dash-content">
                {LEDGER.map(([title, detail, state, Icon]) => (
                  <div className="ledger-row" key={title}>
                    <span className="ic">
                      <Icon size={14} />
                    </span>
                    <span className="tx">
                      <b>{title}</b>
                      <span>{detail}</span>
                    </span>
                    <span className="state">{state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="pillars">
          <div className="container">
            <div className="section-head">
              <Eyebrow>What we do</Eyebrow>
              <h2>Three pillars, one engine.</h2>
              <p>
                Consulting that sets the strategy, and technology that proves it
                happened. Pick the lane that fits where you are.
              </p>
            </div>
            <div className="services-grid four">
              {PILLARS.map(([heading, copy, Icon, cta, anchor]) => (
                <article className="service-tile" key={heading}>
                  <div className="card-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{heading}</h3>
                  <p>{copy}</p>
                  <a className="text-link" href={anchor}>
                    {cta} <ArrowRight size={13} />
                  </a>
                </article>
              ))}
              <article className="service-tile">
                <div className="card-icon">
                  <Boxes size={20} />
                </div>
                <h3>Tracifai</h3>
                <p>Blockchain and AI traceability that proves every claim.</p>
                <Link className="text-link" to="/business/impact/tracifai">
                  See the platform <ArrowRight size={13} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container proof-row">
            <div className="proof-intro">
              <Eyebrow>Proof, not promises</Eyebrow>
              <p>The claims we help you make are backed by verifiable data.</p>
            </div>
            <div className="vr" />
            {PROOF.map(([n, l]) => (
              <div className="proof-stat" key={l}>
                <strong>{n}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="circular">
          <div className="container split">
            <div>
              <Eyebrow>Pillar 01 &middot; Circular Economy</Eyebrow>
              <div className="section-head">
                <h2>Circularity you can prove.</h2>
                <p>
                  We design waste-reduction, recycling, and circular supply
                  systems, then verify them through Tracifai so your claims
                  stand up to audit and buyer scrutiny.
                </p>
              </div>
              <div className="category-chips">
                {CIRCULAR_CHIPS.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <div className="compliance-box" style={{ marginTop: 24 }}>
                <p>
                  <strong>Tracifai —</strong> Every material stream we design is
                  tracked and verified, so your circularity claims are
                  audit-ready, not aspirational.
                </p>
              </div>
              <a href="#enquiry" className="btn-primary" style={{ marginTop: 26 }}>
                Talk to a circular economy advisor <ArrowRight size={15} />
              </a>
            </div>
            <div className="dashboard">
              <div className="dash-content">
                {CIRCULAR_STEPS.map(([title, detail, Icon]) => (
                  <div className="ledger-row" key={title}>
                    <span className="ic">
                      <Icon size={14} />
                    </span>
                    <span className="tx">
                      <b>{title}</b>
                      <span>{detail}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="esg">
          <div className="container split">
            <div className="dashboard">
              <div className="dash-content">
                {ESG_STEPS.map(([title, detail, Icon]) => (
                  <div className="ledger-row" key={title}>
                    <span className="ic">
                      <Icon size={14} />
                    </span>
                    <span className="tx">
                      <b>{title}</b>
                      <span>{detail}</span>
                    </span>
                  </div>
                ))}
                <div className="category-chips" style={{ marginTop: 16 }}>
                  {STANDARDS.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Eyebrow>Pillar 02 &middot; ESG Consulting</Eyebrow>
              <div className="section-head">
                <h2>ESG your board and regulators can trust.</h2>
                <p>
                  From strategy to disclosure, we align your ESG programme with
                  the standards that matter and give you the verified data to
                  report against them.
                </p>
              </div>
              <div className="category-chips">
                {ESG_CHIPS.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <div className="compliance-box" style={{ marginTop: 24 }}>
                <p>
                  <strong>Tracifai —</strong> Report on verified data, not
                  estimates. Your disclosures carry a defensible evidence trail.
                </p>
              </div>
              <a href="#enquiry" className="btn-primary" style={{ marginTop: 26 }}>
                Scope an ESG engagement <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="people">
          <div className="container split">
            <div>
              <Eyebrow>Pillar 03 &middot; People ESG Training</Eyebrow>
              <div className="section-head">
                <h2>The capability that outlasts the engagement.</h2>
                <p>
                  ESG fails when it lives only in a consultant&apos;s report. We
                  build the internal understanding, from the board to the floor,
                  that keeps your programme alive.
                </p>
              </div>
              <div className="category-chips">
                {PEOPLE_CHIPS.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <div className="compliance-box" style={{ marginTop: 24 }}>
                <p>
                  <strong>Heritage —</strong> Delivered on the foundation of The
                  Inclusion Lab, a pioneer of DEI and ESG education.
                </p>
              </div>
              <a href="#enquiry" className="btn-primary" style={{ marginTop: 26 }}>
                Design a training programme <ArrowRight size={15} />
              </a>
            </div>
            <div className="dashboard">
              <div className="dash-content">
                {PEOPLE_STEPS.map(([title, detail, Icon]) => (
                  <div className="ledger-row" key={title}>
                    <span className="ic">
                      <Icon size={14} />
                    </span>
                    <span className="tx">
                      <b>{title}</b>
                      <span>{detail}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="technology-band">
              <div>
                <Eyebrow>The engine</Eyebrow>
                <h2>Meet Tracifai, your proof engine.</h2>
                <p>
                  Blockchain and AI traceability that turns sustainability
                  commitments into verifiable, audit-ready data.
                </p>
                <Link
                  className="btn-primary"
                  to="/business/impact/tracifai"
                  style={{ marginTop: 28 }}
                >
                  Book a Tracifai demo <ArrowRight size={15} />
                </Link>
              </div>
              <div className="tech-nodes">
                {ENGINE_FEATURES.map(([label, Icon]) => (
                  <div className="tech-node" key={label}>
                    <Icon size={14} /> {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head">
              <Eyebrow>Industries we serve</Eyebrow>
              <h2>Done this in your industry.</h2>
            </div>
            <div className="category-chips">
              {SECTORS.map((s) => (
                <Link className="chip" to="/business/impact/sectors" key={s}>
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {SHOW_INSIGHTS ? (
          <section className="section">
            <div className="container">
              <div className="section-head">
                <Eyebrow>Insights</Eyebrow>
                <h2>Thinking from our team.</h2>
              </div>
              <div className="cards">
                {INSIGHTS.map(([tag, title, copy]) => (
                  <article className="solution-card" key={title}>
                    <div className="card-label">{tag}</div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section section-soft">
          <div className="container">
            <div className="section-head">
              <Eyebrow>Questions</Eyebrow>
              <h2>Frequently asked.</h2>
            </div>
            <div className="faq-list">
              {FAQS.map(([q, a], i) => (
                <details key={q} open={i === 0}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {/*
              `.cta-copy` is load-bearing, not a wrapper for tidiness. The
              only rule that sizes this heading is
              `.section-head h2, .cta-copy h2`, so flattening it away left
              the h2 at the browser's default — the same defect the engine
              band had. The centring is done on the band and on this.
            */}
            <div className="cta-band closing-band">
              <div className="cta-copy">
                <Eyebrow>Get started</Eyebrow>
                <h2>Ready to make your impact provable?</h2>
                <p>
                  Technology for Good only matters if it can be trusted. Let us
                  show you what verified sustainability looks like for your
                  organisation.
                </p>
              </div>
              <a className="btn-primary" href="#enquiry">
                Book a consultation <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <EnquiryForm />
      </main>
    </div>
  );
}
