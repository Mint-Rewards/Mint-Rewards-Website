import {
  ArrowRight,
  Boxes,
  FileCheck2,
  GitBranch,
  Link2,
  Scan,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import CtaBand from "../components/business/CtaBand";
import EnquiryForm from "../components/business/EnquiryForm";
import Eyebrow from "../components/business/Eyebrow";
import ImpactNav from "../components/business/ImpactNav";
import PageMeta from "../components/business/PageMeta";
import "../styles/business.css";

/**
 * Tracifai — the traceability layer behind the impact pillars.
 *
 * WHAT THIS PAGE MAY AND MAY NOT SAY. The wireframe presents Tracifai as
 * finished and verifying: rows stamped ON-CHAIN, VALID and PROVEN, and a
 * claim that 100% of claims are traceable. None of that is written here.
 * The RecovLoop page already states that Tracifai's advanced AI, computer
 * vision and IoT verification "are not represented as operational", and a
 * site cannot hold both positions at once.
 *
 * So every capability below is written as what the platform is built to
 * do, the page says plainly which parts are in development, and no
 * verification badge appears anywhere. If a capability ships, the honest
 * edit is to move it out of the development note — not to add a badge.
 */

const BENEFITS = [
  "Move from self-reported estimates towards primary, recorded data.",
  "Give a circularity or ESG claim a trail somebody can follow back.",
  "Make changes to a record visible rather than silent.",
  "Reduce the scramble that assurance turns into at year end.",
  "Turn traceability into something a buyer can be shown.",
];

const CAPABILITIES = [
  [
    "Digital material records",
    "A record per batch of material, rather than a row in somebody's spreadsheet.",
    Boxes,
  ],
  [
    "Movement traceability",
    "Where a material went and when, recorded as it moves rather than reconstructed later.",
    GitBranch,
  ],
  [
    "Tamper evident trails",
    "Changes to a record are visible. The point is not that nothing changes, it is that nothing changes quietly.",
    FileCheck2,
  ],
  [
    "Chain of custody",
    "Who held the material at each step, so a gap in the chain is a gap you can see.",
    Workflow,
  ],
  [
    "Claim support",
    "Assemble the records behind a claim before it is published, not after it is questioned.",
    Scan,
  ],
  [
    "Reporting integration",
    "Feed recorded data into the disclosures your pillars report against.",
    Link2,
  ],
];

const WHO = [
  "Textiles & apparel exporters",
  "FMCG & manufacturing",
  "PET & polymers",
  "Food systems",
  "EU-facing exporters",
];

export default function Tracifai() {
  return (
    <div className="b2b">
      <PageMeta
        title="Tracifai — Material Traceability & Audit Trails | Mint Rewards"
        description="Tracifai records material journeys, movements and chain of custody so circularity and ESG claims can be traced back to what happened."
      />
      <ImpactNav />
      <main id="main" className="impact">
        <section className="page-hero plain">
          <div className="container">
            <Eyebrow>Impact solutions &middot; Tracifai</Eyebrow>
            <h1>Follow it back.</h1>
            <p className="hero-sub">
              Material records, movements and custody — written down as they
              happen.
            </p>
            <p className="hero-copy">
              Tracifai is the traceability layer underneath our circular and ESG
              work. It exists so that a claim has a trail behind it, and so that
              the trail is built while the work is being done rather than
              assembled the week before an audit.
            </p>
            <div className="hero-actions">
              <a href="#enquiry" className="btn-primary">
                Book a demo <ArrowRight size={15} />
              </a>
              <Link to="/business/impact" className="btn-secondary">
                Back to impact solutions
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <Eyebrow>What it is for</Eyebrow>
              <h2>From estimates towards recorded fact.</h2>
              <p>
                Most sustainability reporting rests on what somebody typed into
                a form. Tracifai is built so the underlying movements are
                recorded, and so a claim can be checked rather than trusted.
              </p>
            </div>
            <ul className="benefit-list">
              {BENEFITS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head">
              <Eyebrow>Capabilities</Eyebrow>
              <h2>What the platform is built to do.</h2>
            </div>
            <div className="feature-grid">
              {CAPABILITIES.map(([heading, copy, Icon]) => (
                <div className="feature" key={heading as string}>
                  <Icon size={17} />
                  <h3>{heading as string}</h3>
                  <p>{copy as string}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOAD-BEARING. The RecovLoop page states that Tracifai's advanced
            capabilities are not represented as operational. This page must
            say the same thing, in the same breath as the capability list
            above, or the two pages disagree. */}
        <section className="section">
          <div className="container">
            <div className="compliance-box">
              <h3>What is live, and what is not</h3>
              <p>
                The capabilities above describe what Tracifai is built to do.
                Advanced AI, computer vision and IoT verification are under
                development and are not represented here as operational, and no
                claim on this site should be read as independently verified on
                the strength of this page.
              </p>
              <p style={{ marginTop: 14, marginBottom: 0, fontSize: 11 }}>
                Where a capability is in use on a live programme, we will say so
                for that programme specifically.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head">
              <Eyebrow>Who it is for</Eyebrow>
              <h2>Where provenance is commercially decisive.</h2>
              <p>
                Sectors where a buyer or a regulator asks where the material
                came from, and expects an answer with a record behind it.
              </p>
            </div>
            <div className="category-chips">
              {WHO.map((w) => (
                <span className="chip" key={w}>
                  {w}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Want to see what a trail looks like?"
          description="We will walk a material journey end to end and show you exactly which parts are recorded today."
          button="Book a demo"
        />

        <EnquiryForm />
      </main>
    </div>
  );
}
