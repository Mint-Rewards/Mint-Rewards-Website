import {
  ArrowDown,
  ArrowRight,
  Boxes,
  Globe2,
  GraduationCap,
  HeartHandshake,
  PackageCheck,
  Recycle,
  ScrollText,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import CtaBand from "../components/business/CtaBand";
import EnquiryForm from "../components/business/EnquiryForm";
import Eyebrow from "../components/business/Eyebrow";
import PageMeta from "../components/business/PageMeta";
import "../styles/business.css";

/**
 * Impact solutions — the hub for the consulting pillars and Tracifai.
 *
 * Rebuilt from the Mint Impact Solutions wireframe: its narrative, its
 * section order, its three-pillars-plus-an-engine structure. The visual
 * language stays this site's own `.b2b` system — the wireframe's green
 * ramp, Bricolage Grotesque and dark mode are not adopted, and almost no
 * CSS was added, because the system already had a class for nearly every
 * section the wireframe drew.
 *
 * THE DISCLAIMERS ARE STILL THE DESIGN. The wireframe is written in a
 * confident register — "100% claims traceable", VERIFIED, PROVEN, "9
 * priority sectors served" — and this page is read by CSR and
 * sustainability teams, who are the one audience that checks. A claim
 * that cannot be evidenced is the kind quoted back during assurance, so
 * each was qualified or dropped:
 *
 *   - "100% claims traceable" is gone. It states an outcome nothing here
 *     can support.
 *   - the hero carries no VERIFIED / ON-CHAIN / PROVEN stamps. The
 *     wireframe's own example row, "72% diverted", is this page's
 *     INDICATORS placeholder — an invented figure — redrawn as verified
 *     fact.
 *   - "9 priority sectors SERVED" became sectors we work across, because
 *     the RecovLoop page states the sector list "does not represent
 *     confirmed clients", and two pages of one site must not disagree.
 *   - the London office and the mintimpactsolutions.com address are not
 *     here. Nothing in this repo mentions either, and an office is not a
 *     thing to assert on a maybe.
 *
 * The conceptual indicator view keeps all three of its warnings.
 */

const PILLARS = [
  [
    "Circular Economy Consulting",
    "Turn waste into circular systems that can be designed, run and evidenced.",
    Recycle,
    "#circular",
  ],
  [
    "ESG Consulting",
    "Make ESG performance measured, reported and defensible to a board.",
    ScrollText,
    "#esg",
  ],
  [
    "People ESG Training",
    "Build the internal capability that keeps a programme alive after handover.",
    GraduationCap,
    "#people",
  ],
] as const;

/*
 * Ahsan's original five, kept as the circular pillar's detail.
 *
 * The wireframe replaces them with generic consultancy language, which
 * reads well and says nothing about what Mint can actually do. These five
 * are the connection to a real recycling operation, so they stay as the
 * substance underneath the pillar rather than being written over.
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

const ESG_SCOPE = [
  "ESG & sustainability strategy",
  "Materiality assessment",
  "Reporting & disclosure",
  "Stakeholder engagement",
  "CSR policy & governance",
];

const PEOPLE_SCOPE = [
  "ESG & sustainability training",
  "Leadership & culture",
  "DEI education",
  "Community engagement",
];

const STANDARDS = ["GRI", "CSRD", "TCFD", "CDP", "ISSB"];

/*
 * SAMPLE FIGURES. INVENTED. NOT TO BE QUOTED ANYWHERE.
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
 *
 * The wireframe lifted the 72% into its hero as a verified on-chain
 * claim. It is an invention. It does not leave this section.
 */
const INDICATORS: [string, string][] = [
  ["Materials collected", "412 t"],
  ["Materials recovered", "298 t"],
  ["Recovery rate", "72%"],
  ["Participating households", "1,860"],
  ["Programme locations", "14"],
  ["Community participation", "68%"],
];

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

const FAQS: [string, string][] = [
  [
    "What standards can you report against?",
    "We work to the structures of GRI, CSRD, TCFD, CDP and ISSB, and shape programme indicators so the evidence behind them is collected as the work happens rather than reconstructed afterwards.",
  ],
  [
    "How is Tracifai different from a reporting platform?",
    "Most platforms store what you type into them. Tracifai is built to record the material journey itself, so a claim can be traced back to the movements behind it.",
  ],
  [
    "Do you work with organisations early in their ESG journey?",
    "Yes. A first materiality assessment is a perfectly good starting point, and most programmes begin well before anything is ready to disclose.",
  ],
  [
    "How do we get started?",
    "Tell us the objective and the constraints. We scope what is practical, and say plainly which parts can be evidenced and which cannot.",
  ],
];

export default function Impact() {
  return (
    <div className="b2b">
      <PageMeta
        title="Impact Solutions — Circular Economy, ESG & Training | Mint Rewards"
        description="Circular economy consulting, ESG consulting and people training, with material journeys traceable through Tracifai. Practical programmes with evidence collected as the work happens."
      />
      <main id="main" className="impact">
        <section className="page-hero">
          <div className="container hero-grid">
            <div>
              <Eyebrow>Mint Rewards &middot; Impact solutions</Eyebrow>
              <h1>Technology for Good, proven.</h1>
              <p className="hero-sub">
                Circular systems. Defensible ESG. Capability that stays.
              </p>
              <p className="hero-copy">
                We help organisations build circular, low impact, people first
                operations — and we design the evidence trail alongside the
                programme, so what you report can be traced back to what
                actually happened.
              </p>
              <div className="hero-actions">
                <a href="#enquiry" className="btn-primary">
                  Book a consultation <ArrowRight size={15} />
                </a>
                <a href="#pillars" className="btn-secondary">
                  Explore the pillars <ArrowDown size={15} />
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
                <strong>From intent to evidence</strong>Build a programme people
                can join, and a record that holds up
              </div>
              <div className="art-caption">
                A practical foundation for measurable programmes
              </div>
            </div>
          </div>
        </section>

        {/* Three pillars and the engine underneath them — the wireframe's
            central idea, and the reason the page is ordered this way. */}
        <section className="section" id="pillars">
          <div className="container">
            <div className="section-head">
              <Eyebrow>What we do</Eyebrow>
              <h2>Three pillars, one engine.</h2>
              <p>
                Consulting that sets the strategy, and traceability that records
                what happened. Start in whichever lane fits where you are.
              </p>
            </div>
            <div className="services-grid">
              {PILLARS.map(([heading, copy, Icon, anchor]) => (
                <article className="service-tile" key={heading}>
                  <div className="card-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{heading}</h3>
                  <p>{copy}</p>
                  <a className="text-link" href={anchor}>
                    Explore <ArrowRight size={13} />
                  </a>
                </article>
              ))}
              <article className="service-tile">
                <div className="card-icon">
                  <Boxes size={20} />
                </div>
                <h3>Tracifai</h3>
                <p>The traceability layer the three pillars report through.</p>
                <Link className="text-link" to="/business/impact/tracifai">
                  See the platform <ArrowRight size={13} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/*
          The wireframe's proof band, with its numbers made answerable.

          "100% claims traceable" is dropped outright — it is an outcome,
          not a count. The two that remain are list lengths, which is the
          only reason they can be stated at all: nine sectors below, five
          standards in the ESG section. Both are checkable on this page.
        */}
        {/* `compliance-box` rather than `section-dark`: the item chips are
            10px on a translucent white, drawn to sit inside that pale
            panel. The page already has two dark bands below — the engine
            and the indicator view — and a third would flatten both. */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <Eyebrow>How we work</Eyebrow>
              <h2>Evidence designed in, not reconstructed.</h2>
              <p>
                The difference between a sustainability story and a
                sustainability claim is whether anyone can follow it back.
              </p>
            </div>
            <div className="compliance-box">
              <h3>What that means in scope terms</h3>
              <p>
                Counts below are the length of the lists on this page, and
                nothing more. They are checkable without taking our word for
                it, which is the only reason they are stated at all.
              </p>
              <div className="compliance-grid">
                <div className="compliance-item">
                  {SECTORS.length} sectors we work across
                </div>
                <div className="compliance-item">
                  {STANDARDS.length} reporting structures we build towards
                </div>
                <div className="compliance-item">
                  Material journeys recorded through Tracifai
                </div>
              </div>
              <p style={{ marginTop: 18, marginBottom: 0, fontSize: 11 }}>
                Sector and standard counts describe the scope of our work, not
                confirmed clients or completed assurance.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="circular">
          <div className="container">
            <div className="section-head">
              <Eyebrow>Pillar 01 &middot; Circular Economy</Eyebrow>
              <h2>Circularity you can follow.</h2>
              <p>
                We design waste reduction, recycling and recovery programmes,
                then record the material journey behind them so the claim and
                the evidence are built together.
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

        <section className="section section-soft" id="esg">
          <div className="container split">
            <div>
              <Eyebrow>Pillar 02 &middot; ESG Consulting</Eyebrow>
              <div className="section-head">
                <h2>ESG your board and regulators can follow.</h2>
                <p>
                  From strategy through to disclosure, aligned to the structures
                  that matter in your market, with the underlying records agreed
                  up front rather than chased at year end.
                </p>
              </div>
              <div className="category-chips">
                {ESG_SCOPE.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="compliance-box">
              <h3>Reporting structures</h3>
              <div className="compliance-grid">
                {STANDARDS.map((s) => (
                  <div className="compliance-item" key={s}>
                    {s}
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 18, marginBottom: 0, fontSize: 11 }}>
                Structures we build reporting towards. Assurance is carried out
                by your auditor, not by us.
              </p>
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
                  ESG fails when it lives only in a consultant's report. We
                  build the understanding, from the board to the floor, that
                  keeps a programme running once we have gone.
                </p>
              </div>
              <div className="category-chips">
                {PEOPLE_SCOPE.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            {/* Label first, then the text: `.flow-step span` is the small
                mono caption above the line, as on the RecovLoop page. */}
            <div className="flow">
              <div className="flow-step">
                <span>LEVEL 01</span>
                Board &amp; leadership set the mandate
              </div>
              <div className="flow-step">
                <span>LEVEL 02</span>
                Managers turn it into daily practice
              </div>
              <div className="flow-step">
                <span>LEVEL 03</span>
                Teams and community keep it running
              </div>
            </div>
          </div>
        </section>

        {/* The engine band. `technology-band` already existed for exactly
            this shape on the RecovLoop page. */}
        <section className="section">
          <div className="container">
            <div className="technology-band">
              <div>
                <Eyebrow>The engine</Eyebrow>
                <h2>Meet Tracifai.</h2>
                <p>
                  Traceability built for material journeys and supply chain
                  accountability — digital material records, movement history
                  and tamper evident audit trails.
                </p>
                <Link
                  className="btn-primary"
                  to="/business/impact/tracifai"
                  style={{ marginTop: 20 }}
                >
                  See how Tracifai works <ArrowRight size={15} />
                </Link>
              </div>
              <div className="tech-nodes">
                <div className="tech-node">
                  Digital material records
                  <small>A record per batch, not per spreadsheet</small>
                </div>
                <div className="tech-node">
                  Movement traceability
                  <small>Where it went, and when</small>
                </div>
                <div className="tech-node">
                  Tamper evident trails
                  <small>Changes are visible, not silent</small>
                </div>
                <div className="tech-node">
                  Chain of custody
                  <small>Who held it at each step</small>
                </div>
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
                  recovered, participating households, community participation,
                  programme locations and environmental measures appropriate to
                  your programme.
                </p>
                <small style={{ color: "#a9c8b9" }}>
                  All values shown are examples only. No actual programme data
                  is represented.
                </small>
              </div>
              <div>
                {/* Directly above the numbers, because that is where
                    somebody reading them is looking. */}
                <div className="sample-tag">
                  Sample data &middot; not a report
                </div>
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
            <div className="section-head">
              <Eyebrow>Industries</Eyebrow>
              <h2>Sustainability, in the language of your sector.</h2>
              <p>
                Each industry carries its own circularity, disclosure and
                traceability pressures.
              </p>
            </div>
            <div className="category-chips">
              {SECTORS.map((s) => (
                <Link className="chip" to="/business/impact/sectors" key={s}>
                  {s}
                </Link>
              ))}
            </div>
            <p style={{ marginTop: 16, fontSize: 11 }}>
              This list describes where our work applies. It does not represent
              confirmed clients.
            </p>
          </div>
        </section>

        <section className="section">
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

        <CtaBand
          title="Ready to make your impact answerable?"
          description="Tell us the objective and the constraints, and we will say plainly which parts can be evidenced."
          button="Book a consultation"
        />

        <EnquiryForm />
      </main>
    </div>
  );
}
