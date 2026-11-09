import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CtaBand from "../components/business/CtaBand";
import EnquiryForm from "../components/business/EnquiryForm";
import Eyebrow from "../components/business/Eyebrow";
import PageMeta from "../components/business/PageMeta";
import "../styles/business.css";

/**
 * Sectors — where the impact work applies.
 *
 * THE WIREFRAME SAYS "9 PRIORITY SECTORS SERVED". This page does not.
 * The RecovLoop page already states that its sector list "does not
 * represent confirmed clients or blanket acceptance of every material",
 * and a second page claiming nine sectors served would contradict it in
 * the same site. The list describes where the work applies; the line
 * under the grid says so.
 */

const SECTORS: [string, string][] = [
  [
    "Textile & Apparel",
    "Traceable circular supply chains and ESG evidence for exporters facing buyer scrutiny.",
  ],
  [
    "PET & Polymers",
    "Closed loop recovery and provenance records for plastics and packaging value chains.",
  ],
  [
    "Food Systems",
    "Circular packaging, waste recovery and traceable sourcing across food and beverage.",
  ],
  [
    "Health",
    "Responsible operations, waste streams and ESG governance for health and pharma.",
  ],
  [
    "Power & Utilities",
    "Decarbonisation strategy, disclosure and resource efficiency for energy providers.",
  ],
  [
    "Technology & Telecom",
    "Circular device programmes and ESG reporting, including media and broadcast services.",
  ],
  [
    "Retail",
    "Circular packaging, supplier engagement and evidenced sustainability claims at the shelf.",
  ],
  [
    "Property & Construction",
    "Material circularity, embodied carbon tracking and ESG governance for the built environment.",
  ],
  [
    "Financial Services",
    "ESG strategy, disclosure and governance for regulated banks and microfinance.",
  ],
];

export default function Sectors() {
  return (
    <div className="b2b">
      <PageMeta
        title="Sectors — Circular Economy & ESG by Industry | Mint Rewards"
        description="Circular economy and ESG work across textiles, polymers, food systems, health, utilities, technology, retail, construction and financial services."
      />
      <main id="main" className="impact">
        <section className="page-hero">
          <div className="container hero-grid">
            <div>
              <Eyebrow>Impact solutions &middot; Sectors</Eyebrow>
              <h1>Sustainability, in the language of your sector.</h1>
              <p className="hero-copy">
                Each industry carries its own circularity, disclosure and
                traceability pressures. The work below describes where our
                pillars apply, and what tends to matter first in each.
              </p>
              <div className="hero-actions">
                <a href="#enquiry" className="btn-primary">
                  Book a consultation <ArrowRight size={15} />
                </a>
                <Link to="/business/impact" className="btn-secondary">
                  Back to impact solutions
                </Link>
              </div>
            </div>
            <div className="hero-art">
              <img
                src="/images/recovery-hero.jpg"
                alt="Recovered materials from a range of industrial streams"
              />
              <div className="photo-shade" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="industry-grid">
              {SECTORS.map(([name, copy]) => (
                <div className="industry" key={name}>
                  <strong>{name}</strong>
                  <span>{copy}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 18, fontSize: 11 }}>
              This list describes where our work applies. It does not represent
              confirmed clients, completed engagements, or blanket acceptance of
              every material in a sector.
            </p>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head">
              <Eyebrow>Not listed?</Eyebrow>
              <h2>The questions rhyme across industries.</h2>
              <p>
                Where does the material go, who held it, and can you show it.
                Tell us the sector and we will say which of the three pillars
                applies and what evidence it needs.
              </p>
            </div>
          </div>
        </section>

        <CtaBand
          title="Tell us your industry."
          description="We will show you where circularity, disclosure and traceability apply to it."
          button="Book a consultation"
        />

        <EnquiryForm />
      </main>
    </div>
  );
}
