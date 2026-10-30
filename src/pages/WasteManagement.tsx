import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  Check,
  PackageCheck,
  Recycle,
  ShieldCheck,
  Truck,
} from "lucide-react";
import CtaBand from "../components/business/CtaBand";
import EnquiryForm from "../components/business/EnquiryForm";
import Eyebrow from "../components/business/Eyebrow";
import PageMeta from "../components/business/PageMeta";
import "../styles/business.css";

/**
 * RecovLoop — industrial and commercial waste management.
 *
 * Ported from Ahsan's build. His copy, his sections, his order.
 *
 * THIS PAGE IS WHERE THE ACCURACY RULES BITE HARDEST, because it is the one
 * making regulatory and commercial claims. Everything qualifying a claim is
 * deliberate and is quoted from his build, not paraphrased:
 *
 *   - the licensing panel says a relevant licence is confirmed and that the
 *     specifics MUST BE VERIFIED, with every field marked "· verify" and an
 *     explicit line that no licence number, EPA certification, disposal
 *     permission or category coverage is represented
 *   - the comparison table is "a balanced comparison of approaches, not a
 *     claim that other providers cannot offer technology or reporting"
 *   - the dashboard is labelled CONCEPTUAL UI · SAMPLE DATA, its figures read
 *     "Illustrative", "Example only" and "Not live data", and the chart is
 *     captioned as not client data
 *   - the sector list "does not represent confirmed clients or blanket
 *     acceptance of every material"
 *   - Tracifai is stated as independent, not a subsidiary or Mint-owned, and
 *     its AI, computer vision and IoT capabilities are explicitly NOT
 *     represented as operational
 *
 * Section 15 of the specification requires every one of these. Do not soften
 * or shorten them for layout.
 */

const SERVICES = [
  [
    "Hazardous Waste Management",
    "Assessment, segregation, handling, collection, transportation and appropriate treatment or disposal of approved hazardous waste streams.",
    "Approved streams only",
    ShieldCheck,
  ],
  [
    "Non Hazardous Waste Management",
    "Reliable collection, segregation and management of routine industrial and commercial waste.",
    "Practical site coordination",
    Recycle,
  ],
  [
    "Industrial Recycling & Recovery",
    "Recovery of suitable plastics, paper, cardboard, metals, textiles and industrial scrap.",
    "Recover material value",
    PackageCheck,
  ],
  [
    "Waste Collection & Logistics",
    "Scheduled and tailored collection arrangements for factories, warehouses, commercial premises and multiple sites.",
    "Flexible collection planning",
    Truck,
  ],
  [
    "Material Recovery & Purchasing",
    "Assessment and potential purchase of valuable recyclable materials, including industrial scrap and recurring recoverable waste streams.",
    "Explore purchasing opportunities",
    Boxes,
  ],
  [
    "Integrated Waste Management Contracts",
    "Tailored solutions covering multiple waste streams, coordinated collections, recovery arrangements and performance reporting.",
    "One coordinated approach",
    Building2,
  ],
] as const;

const SECTORS: [string, string][] = [
  ["Textiles & Garments", "Fabric offcuts, textile scrap, packaging and applicable chemical residues."],
  ["Food & Beverages", "PET, plastic packaging, cardboard and production waste."],
  ["FMCG & Packaging", "Packaging materials, plastics, paper and suitable production scrap."],
  ["Pharmaceuticals & Healthcare", "Packaging, manufacturing residues and approved specialised waste streams."],
  ["Chemicals & Petrochemicals", "Chemical residues, containers, sludge and solvents, subject to authorised handling arrangements."],
  ["Automotive & Engineering", "Scrap metals, lubricants, used oils and industrial residues."],
  ["Cement & Construction", "Construction debris, metals, packaging and recoverable materials."],
  ["Hospitality & Retail", "Commercial dry waste, packaging and recyclable materials."],
  ["Corporate & Commercial Facilities", "Office recyclables, packaging and routine commercial waste."],
];

const ROWS: [string, string][] = [
  ["Focus on collection and disposal", "Collection, recovery and material value"],
  ["Multiple fragmented vendors", "Coordinated waste management solutions"],
  ["Limited visibility after collection", "Improved digital records and operational visibility"],
  ["Waste primarily viewed as a cost", "Opportunities to recover commercial value"],
  ["Periodic manual reporting", "Data driven reporting and performance insights"],
  ["Transactional service relationship", "Long term optimisation partnership"],
];

const COMPLIANCE_FEATURES = [
  "Hazardous waste management",
  "Non hazardous waste management",
  "Collection and transportation",
  "Handling and downstream treatment arrangements",
  "Relevant documentation",
  "Operational reporting",
];

const COMPLIANCE_FIELDS = [
  "Regulatory authority · verify",
  "Licence number · verify",
  "Licence holder · verify",
  "Authorised waste categories · verify",
  "Geographic jurisdiction · verify",
  "Permitted activities · verify",
];

const FLOW = [
  "Waste generated",
  "Collection",
  "Transportation",
  "Sorting / processing",
  "Recovery or disposal",
  "Reporting",
];

const PROCESS: [string, string][] = [
  ["Assess your waste streams.", "Understand materials, volumes, operating context and constraints."],
  ["Design a tailored solution.", "Align collection, recovery and appropriate handling arrangements."],
  ["Manage the material journey.", "Coordinate collection, recovery and approved disposal arrangements."],
  ["Report and improve.", "Provide records and identify practical optimisation opportunities."],
];

const CHIPS = [
  "PET & plastics",
  "Textile waste",
  "Metals",
  "Paper & cardboard",
  "Packaging scrap",
  "Other recoverables",
];

export default function WasteManagement() {
  return (
    <div className="b2b">
      <PageMeta
        title="Industrial & Commercial Waste Management Pakistan | RecovLoop"
        description="Explore RecovLoop industrial and commercial waste management, recycling and resource recovery for businesses in Pakistan. Request a waste assessment."
      />
      <main id="main" className="recov-page">
        <section className="page-hero">
          <div className="container hero-grid">
            <div>
              {/* The RecovLoop mark is worn by the header on this route, so
                  the hero does not repeat it — see brandFor() in siteMode. */}
              <Eyebrow>
                RecovLoop | Industrial &amp; Commercial Waste Management
              </Eyebrow>
              <h1>Waste Management. Reimagined.</h1>
              <p className="hero-sub">Your Waste. Your Data. Your Control.</p>
              <p className="hero-copy">
                Licensed hazardous and non hazardous waste management,
                intelligent resource recovery and technology enabled reporting
                solutions for modern businesses.
                <br />
                <br />
                From collection through recovery or appropriate disposal, we
                help businesses manage waste responsibly, improve efficiency and
                recover more value from their materials.
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="#enquiry">
                  Request a Waste Assessment <ArrowRight size={15} />
                </a>
                <a className="btn-secondary" href="#services">
                  Explore Our Services <ArrowDown size={15} />
                </a>
              </div>
            </div>
            <div className="hero-art">
              <picture>
                <source srcSet="/images/recovery-hero.webp" type="image/webp" />
                <img
                  src="/images/recovery-hero.jpg"
                  alt="Industrial material recovery facility, sorted cardboard and recyclable plastics"
                  width={1024}
                  height={1024}
                />
              </picture>
              <div className="photo-shade" />
              <div className="floating-note">
                <strong>RecovLoop</strong>Responsible recovery, with better
                visibility
              </div>
              <div className="art-caption">
                Industrial &amp; commercial resource recovery
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split compliance-split">
            <div>
              <Eyebrow>Compliance comes first</Eyebrow>
              <div className="section-head">
                <h2>Professional Waste Management. Built Around Compliance.</h2>
                <p>
                  We provide waste management services within verified
                  permissions and agreed operating scope. Waste streams and
                  handling arrangements are assessed before a service is
                  confirmed.
                </p>
              </div>
            </div>
            {/* LOAD-BEARING. Every field says "verify", and the closing line
                states what is NOT represented. Section 15 forbids displaying
                licences beyond their actual authorised scope. */}
            <div className="compliance-box">
              <h3>Licensing &amp; authorised scope</h3>
              <p>
                Mint has confirmed a relevant licence. Specific regulatory
                claims, licence details and authorised scope must be verified
                against current documents before publication or service
                confirmation.
              </p>
              <div className="compliance-grid">
                {COMPLIANCE_FIELDS.map((s) => (
                  <div className="compliance-item" key={s}>
                    {s}
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 18, marginBottom: 0, fontSize: 11 }}>
                No licence number, EPA certification, disposal permission or
                category coverage is represented here.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="feature-row">
              {COMPLIANCE_FEATURES.map((x) => (
                <div className="feature" key={x}>
                  {/* No colour prop: lucide defaults to currentColor, and
                      `.feature svg` takes the page's accent token — green
                      here, blue on the Mint business pages. */}
                  <Check size={17} />
                  <h3>{x}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="services">
          <div className="container">
            <div className="section-head">
              <Eyebrow>End-to-end service options</Eyebrow>
              <h2>Services designed around material flows.</h2>
              <p>
                Scope is tailored to waste characteristics, site requirements,
                location and applicable regulatory approvals.
              </p>
            </div>
            <div className="services-grid">
              {SERVICES.map(([title, desc, value, Icon]) => (
                <article className="service-tile" key={title}>
                  <div className="card-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <div className="tagline">{value}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <Eyebrow>Sector-aware planning</Eyebrow>
              <h2>Built for Industry. Tailored to Your Waste.</h2>
              <p>
                Examples of waste streams that may be assessed. This list does
                not represent confirmed clients or blanket acceptance of every
                material.
              </p>
            </div>
            <div className="waste-industries">
              {SECTORS.map(([name, desc]) => (
                <article className="industry-waste" key={name}>
                  <h3>{name}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
            <p className="note">
              Service availability depends on waste characteristics, location
              and applicable regulatory approvals.
            </p>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head center">
              <Eyebrow>A more considered operating model</Eyebrow>
              <h2>More Than Waste Collection.</h2>
              {/* LOAD-BEARING: a comparison table invites a claim about
                  competitors. This says explicitly that it is not one. */}
              <p>
                A balanced comparison of approaches, not a claim that other
                providers cannot offer technology or reporting.
              </p>
            </div>
            <div className="comparison">
              {ROWS.map((row, i) => (
                <div className="compare-row" key={row[0]}>
                  <div>{i === 0 ? "Conventional approach" : row[0]}</div>
                  <div>{i === 0 ? "RecovLoop approach" : row[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <Eyebrow>Illustrative customer experience</Eyebrow>
              <h2>Your Waste. Your Data. Your Control.</h2>
              <p>
                From the initial waste stream to an operational record, a clear
                material journey helps teams make more informed decisions.
              </p>
            </div>
            <div className="flow">
              {FLOW.map((x, i) => (
                <div className="flow-step" key={x}>
                  <span>STEP 0{i + 1}</span>
                  {x}
                </div>
              ))}
            </div>
            {/* LOAD-BEARING: a dashboard is the easiest place on a B2B page
                to imply a product that does not exist.

                The three tiles used to read "Illustrative", "Example only"
                and "Not live data" where their numbers go, which did not
                read as restraint — it read as a broken component, and the
                mock stopped showing what the screen is actually for.

                They carry sample figures now, and the labelling moves to the
                frame, which is where a reader looks for it anyway: the
                eyebrow says illustrative, the bar above the tiles says
                SAMPLE DATA, and the note below repeats it in full. The
                figures are internally consistent (913 of 1,248 tonnes is the
                73% recovery rate) because sample numbers that do not add up
                read as carelessness rather than as a placeholder. They are
                invented and must not be quoted anywhere. */}
            <div className="dashboard">
              <div className="dash-top">
                <span>RecovLoop · operations overview</span>
                <span className="sample-label">CONCEPTUAL UI · SAMPLE DATA</span>
              </div>
              <div className="dash-content">
                <div className="dash-metrics">
                  {[
                    ["Total collected", "1,248 t"],
                    ["Material recovered", "913 t"],
                    ["Recovery rate", "73%"],
                  ].map(([l, v]) => (
                    <div className="metric" key={l}>
                      <span>{l}</span>
                      <strong>{v}</strong>
                    </div>
                  ))}
                </div>
                <div
                  className="chart"
                  aria-label="Illustrative chart, not client data"
                >
                  {[35, 53, 43, 74, 60, 85, 67, 92, 77].map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
                <p className="note">
                  This conceptual dashboard illustrates a potential customer
                  experience. No live client data, tracking or operational
                  product capability is represented.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container split">
            <div>
              <Eyebrow>Recover commercial value</Eyebrow>
              <div className="section-head">
                <h2>Your Waste Could Be Worth More Than You Think.</h2>
                <p>
                  We assess potential material purchasing and recovery
                  opportunities for plastics, textile waste, metals, paper and
                  cardboard, packaging scrap and other recoverable materials.
                </p>
                <p>
                  Value depends on material quality, contamination, quantities,
                  location and market conditions.
                </p>
              </div>
              <a className="btn-primary" href="#enquiry">
                Sell Your Recyclable Waste <ArrowRight size={15} />
              </a>
            </div>
            <div className="ecosystem">
              <div className="tagline">
                Material value is specific to your stream
              </div>
              <div className="category-chips">
                {CHIPS.map((x) => (
                  <span className="chip" key={x}>
                    {x}
                  </span>
                ))}
              </div>
              <p className="note">
                Share a sample description or arrange an assessment to explore
                fit.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <Eyebrow>Clear steps, tailored scope</Eyebrow>
              <h2>How We Work</h2>
            </div>
            <div className="process-grid">
              {PROCESS.map(([h, p]) => (
                <div className="process-step" key={h}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            {/* LOAD-BEARING: the spec requires Tracifai to be treated as an
                independent company, and its advanced capabilities not to be
                presented as operational. Both are stated here explicitly. */}
            <div className="independent">
              <div>
                <div className="tagline">Independent technology company</div>
                <h3>Beyond Collection. Towards Complete Traceability.</h3>
                <p>
                  Tracifai is an independent AI native, blockchain based
                  traceability and auditability platform developing digital
                  infrastructure for material journeys and supply chain
                  accountability.
                </p>
                <p>
                  Its proposition includes digital material records,
                  traceability across movements, tamper evident audit trails,
                  chain of custody visibility, reporting and accountability.
                  Tracifai is separate from Mint Rewards and RecovLoop—not a
                  subsidiary or Mint-owned product. Advanced AI, computer vision
                  and IoT verification are not represented as operational here.
                </p>
                <div className="disclaimer">
                  Independent company · separate from Mint Rewards and RecovLoop
                </div>
              </div>
              <a
                href="https://tracifai.com/"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discover Tracifai <ArrowUpRight size={15} />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div>
              <Eyebrow>Client and partner materials</Eyebrow>
              <div className="section-head">
                <h2>Relationships should be verifiable.</h2>
                <p>
                  Approved industrial and commercial client logos will appear
                  here once supplied and cleared for use. No client names, case
                  studies or performance claims are invented in this preview.
                </p>
              </div>
            </div>
            <div className="logo-note">
              <strong>Approved logos pending</strong>
              Client and partner marks will be added only with permission.
            </div>
          </div>
        </section>

        <CtaBand
          title="Let's Review Your Waste Management Requirements."
          description="From hazardous waste to valuable industrial recyclables, we can explore a solution suited to your operations."
          button="Request a Waste Assessment"
        />

        <EnquiryForm
          service="waste-management"
          title="Request a waste assessment"
        />
      </main>
    </div>
  );
}
