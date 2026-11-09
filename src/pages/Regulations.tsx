import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CtaBand from "../components/business/CtaBand";
import EnquiryForm from "../components/business/EnquiryForm";
import Eyebrow from "../components/business/Eyebrow";
import ImpactNav from "../components/business/ImpactNav";
import PageMeta from "../components/business/PageMeta";
import "../styles/business.css";

/**
 * Regulations & disclosures — a plain-language orientation, not advice.
 *
 * THIS IS THE PAGE MOST LIKELY TO AGE BADLY. Every entry below describes
 * a live regulatory regime, and the detail of several — CBAM's reporting
 * scope, CSRD's phase-in thresholds — has moved more than once already.
 * So each card says what the regime is FOR and who it tends to catch,
 * and deliberately avoids thresholds, dates and tonnage figures, which
 * are the parts that go stale and the parts a reader would act on.
 *
 * The disclaimer at the foot is the point of the page, not decoration:
 * nothing here establishes whether a specific obligation applies to a
 * specific organisation, and a reader who treats it as though it does
 * has been misled by us.
 */

const REGULATIONS: [string, string, string, string][] = [
  [
    "GRI",
    "Global Reporting Initiative",
    "The reporting baseline most organisations start from — a structured way to measure and disclose sustainability performance.",
    "Organisations beginning formal ESG reporting",
  ],
  [
    "CSRD",
    "Corporate Sustainability Reporting Directive & ESRS",
    "Detailed, assured sustainability disclosure under the European standards, with far more prescribed content than voluntary reporting.",
    "EU-facing exporters and large corporates",
  ],
  [
    "CBAM",
    "Carbon Border Adjustment Mechanism",
    "Carbon border rules that reach exporters directly: embedded emissions in covered goods have to be measured and reported, not estimated.",
    "Exporters to the EU in covered goods",
  ],
  [
    "EPR",
    "Extended Producer Responsibility",
    "The backbone of circular packaging obligations — producers stay accountable for the lifecycle of what they put on the market.",
    "Producers and packaging-intensive businesses",
  ],
  [
    "ISSB",
    "ISSB & TCFD",
    "Climate and sustainability disclosure for listed and regulated entities, with the TCFD structure now folded into the ISSB standards.",
    "Listed and regulated organisations",
  ],
  [
    "CDP",
    "Carbon Disclosure Project",
    "Disclosure many buyers and investors ask for directly, covering climate, water and forests.",
    "Suppliers and companies under buyer or investor pressure",
  ],
  [
    "SFDR",
    "Sustainable Finance Disclosure Regulation",
    "Sustainability disclosure rules for financial market participants and the products they offer.",
    "Financial institutions and funds",
  ],
  [
    "More",
    "Everything else that applies to you",
    "Regimes vary by sector, market and size, and the ones that bind you may not be on this list at all.",
    "Ask about your specific obligations",
  ],
];

export default function Regulations() {
  return (
    <div className="b2b">
      <PageMeta
        title="Regulations & Disclosures — GRI, CSRD, CBAM, EPR | Mint Rewards"
        description="A plain-language orientation to the sustainability reporting regimes that shape ESG for exporters, corporates and financial institutions."
      />
      <ImpactNav />
      <main id="main" className="impact">
        <section className="page-hero plain">
          <div className="container">
            <Eyebrow>Impact solutions &middot; Regulations</Eyebrow>
            <h1>Know the rule. Show you meet it.</h1>
            <p className="hero-copy">
              A plain-language orientation to the frameworks shaping ESG for
              exporters, corporates and financial institutions — what each one
              is for, and who it tends to catch.
            </p>
            <div className="hero-actions">
              <a href="#enquiry" className="btn-primary">
                Talk to us about your obligations <ArrowRight size={15} />
              </a>
              <Link to="/business/impact" className="btn-secondary">
                Back to impact solutions
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cards">
              {REGULATIONS.map(([code, title, copy, who]) => (
                <article className="solution-card" key={code}>
                  <div className="card-label">{code}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <div className="card-label" style={{ marginBottom: 0 }}>
                    {who}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* The reason the page exists at all, said plainly. Several of
            these regimes turn on provable data, which is where the
            traceability work earns its place — but saying so is not the
            same as saying we have established that any of them applies
            to a particular reader. */}
        <section className="section section-soft">
          <div className="container">
            <div className="compliance-box">
              <h3>What this page is, and is not</h3>
              <p>
                This is an orientation, not legal or compliance advice. Nothing
                here establishes whether a particular obligation applies to a
                particular organisation — thresholds, phase-in dates and covered
                goods change, and they change by market. Check your position
                with a qualified adviser before relying on any of it.
              </p>
              <p style={{ marginTop: 14, marginBottom: 0, fontSize: 11 }}>
                Several of these regimes turn on data you can show rather than
                data you can assert, which is where our traceability work
                applies.
              </p>
            </div>
          </div>
        </section>

        <CtaBand
          title="Have a compliance problem? Start here."
          description="Tell us the market and the goods, and we will map which regimes bite and what evidence each one wants."
          button="Book a consultation"
        />

        <EnquiryForm />
      </main>
    </div>
  );
}
