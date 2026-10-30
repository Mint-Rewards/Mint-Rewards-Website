import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Boxes,
  Factory,
  HeartHandshake,
  Leaf,
  PackageCheck,
  Recycle,
  Users,
} from "lucide-react";
import { BUSINESS_ROOT } from "../siteMode";
import EnquiryForm from "../components/business/EnquiryForm";
import "../styles/business.css";

/**
 * Mint Rewards for Business — the overview page.
 *
 * PORTED FROM AHSAN'S BUILD, NOT REDESIGNED. The layout, the copy, the blue
 * accent on white, the section order and the careful disclaimers are his,
 * built against the B2B specification. An earlier attempt here re-art-directed
 * the page from scratch and produced something thinner: fewer sections, less
 * content, abstract texture in place of real recovery-facility photography.
 * His design was already the better answer.
 *
 * What changed in the port, and only this:
 *   - wouter -> react-router
 *   - his business-only header and footer dropped, because this site has a
 *     header with a Personal/Business switch and his had no route back
 *   - styles scoped under .b2b so generic names (.container, .hero, .card)
 *     cannot collide with the consumer site's Tailwind
 *
 * THE DISCLAIMERS ARE LOAD-BEARING. Section 15 of the spec forbids inventing
 * metrics, licences and client relationships, and B2B copy is exactly where a
 * model reaches for them. Every line that qualifies a claim is deliberate.
 * Do not tighten them into claims.
 */

const OFFERS = [
  {
    Icon: Recycle,
    name: "RecovLoop",
    label: "Industrial & Commercial Waste Management",
    desc: "Licensed hazardous and non hazardous waste management, recycling and resource recovery solutions supported by digital reporting and operational visibility.",
    benefits: [
      "Collection and logistics",
      "Recovery and material value",
      "Operational visibility",
    ],
    url: `${BUSINESS_ROOT}/waste-management`,
    cta: "Explore Waste Management",
  },
  {
    Icon: HeartHandshake,
    name: "Rewards Partnership",
    label: "Customer Acquisition & Brand Loyalty",
    desc: "Connect your brand with Mint Rewards users through exclusive offers, rewards, targeted promotions and sustainability driven customer engagement.",
    benefits: [
      "Reach new customers",
      "Encourage repeat visits",
      "Flexible offer design",
    ],
    url: `${BUSINESS_ROOT}/rewards`,
    cta: "Become a Rewards Partner",
  },
  {
    Icon: Leaf,
    name: "Impact Solutions",
    label: "Corporate Sustainability & ESG Programmes",
    desc: "Design and implement recycling, resource recovery and community engagement programmes with measurable environmental outcomes.",
    benefits: [
      "Defined programme goals",
      "Community participation",
      "Outcome reporting",
    ],
    url: `${BUSINESS_ROOT}/impact`,
    cta: "Explore Impact Solutions",
  },
];

const SECTORS = [
  "Manufacturing and Industry",
  "FMCG and Consumer Brands",
  "Retail and E commerce",
  "Hospitality and Restaurants",
  "Corporate Offices",
  "Property Developers",
  "Institutions and Public Sector",
];

const TECH_NODES = [
  { Icon: Factory, t: "Physical operations", s: "Materials, collection and recovery" },
  { Icon: Users, t: "Consumer engagement", s: "Offers and participation" },
  { Icon: Boxes, t: "Business workflows", s: "Service design and coordination" },
  { Icon: PackageCheck, t: "Reporting", s: "Records and programme insights" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export default function Business() {
  return (
    <div className="b2b">
      <main id="main">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <Eyebrow>Mint Rewards for business</Eyebrow>
              <h1>Business Solutions That Deliver More.</h1>
              <p className="hero-sub">
                Smarter Waste Management. Stronger Customer Connections.
                Measurable Sustainability.
              </p>
              <p className="hero-copy">
                Mint Rewards combines practical waste management, consumer
                rewards and corporate sustainability solutions to help
                businesses improve efficiency, unlock value and make
                environmental responsibility commercially meaningful.
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="#solutions">
                  Explore Our Solutions <ArrowDown size={15} />
                </a>
                <Link className="btn-secondary" to={`${BUSINESS_ROOT}/contact`}>
                  Talk to Our Team <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            {/* His photograph of a material recovery facility, carried over
                from the handover. WebP with a JPEG fallback; it is the hero,
                so it is not lazy-loaded. */}
            <div className="hero-art">
              <picture>
                <source srcSet="/images/recovery-hero.webp" type="image/webp" />
                <img
                  src="/images/recovery-hero.jpg"
                  alt="Material recovery facility with sorted recyclable materials"
                  width={1024}
                  height={1024}
                />
              </picture>
              <div className="photo-shade" />
              <div className="floating-note">
                <strong>Physical recovery</strong>connected with digital insight
              </div>
              <div className="art-caption">A more connected circular economy</div>
            </div>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="container">
            <div className="section-head">
              <Eyebrow>Three ways to work with Mint</Eyebrow>
              <h2>Practical solutions. One connected purpose.</h2>
              <p>
                Choose the service that fits your priorities today. Each
                solution can stand alone or complement the others.
              </p>
            </div>
            {/* His structure exactly: the whole card is the link, not a card
                with a link inside it. */}
            <div className="cards">
              {OFFERS.map(({ Icon, ...o }) => (
                <Link to={o.url} className="solution-card" key={o.name}>
                  <div className="card-icon">
                    <Icon size={21} />
                  </div>
                  <h3>{o.name}</h3>
                  <div className="card-label">{o.label}</div>
                  <p>{o.desc}</p>
                  <ul className="benefit-list">
                    {o.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <span className="text-link">
                    {o.cta}
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container split">
            <div>
              <Eyebrow>Connected by possibility</Eyebrow>
              <div className="section-head">
                <h2>One Ecosystem. More Ways to Create Value.</h2>
                <p>
                  A manufacturer may use RecovLoop to manage waste, become a
                  Rewards Partner to connect with consumers, or sponsor a
                  recycling programme through Impact Solutions. Start where it
                  makes sense for your business.
                </p>
              </div>
              <Link className="text-link" to={`${BUSINESS_ROOT}/contact`}>
                Explore a fit for your business <ArrowRight size={15} />
              </Link>
            </div>
            <div className="ecosystem">
              {/*
                One wrapper, deliberately. `.eco-center` is `display:grid;
                place-items:center`, which makes every child its own grid
                item — so the bare text and the <small> became two rows,
                each centred in its own row, and the circle read as a label
                at the top and a caption at the bottom with a hole between.
                Wrapped, the grid has a single item to centre and the lines
                sit together as one block.
              */}
              <div className="eco-center">
                <span style={{ lineHeight: 1.35, display: "block" }}>
                  Mint
                  <br />
                  Rewards
                  <small
                    style={{
                      display: "block",
                      fontWeight: 400,
                      marginTop: 4,
                      opacity: 0.75,
                    }}
                  >
                    business ecosystem
                  </small>
                </span>
              </div>
              <div className="eco-options">
                <div className="eco-option">
                  RecovLoop<span>Recover resources</span>
                </div>
                <div className="eco-option">
                  Rewards<span>Connect customers</span>
                </div>
                <div className="eco-option">
                  Impact<span>Engage communities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head center">
              <Eyebrow>Made for business realities</Eyebrow>
              <h2>Who we work with</h2>
              <p>
                From production floors to customer-facing brands, we tailor
                conversations around your organisation and its goals.
              </p>
            </div>
            <div className="industry-grid">
              {SECTORS.map((s, i) => (
                <div className="industry" key={s}>
                  <strong>{s}</strong>
                  <span>Business sector · {String(i + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="technology-band">
              <div>
                <Eyebrow>Technology driven circular economy</Eyebrow>
                <h2>Where Physical Recovery Meets Digital Intelligence.</h2>
                <p>
                  We combine waste management operations, consumer engagement
                  and digital systems to make recycling and resource recovery
                  more connected, transparent and measurable.
                </p>
                {/* LOAD-BEARING: deployed capabilities distinguished from
                    proposed ones, as section 15 requires. */}
                <small>
                  An overview of Mint's ecosystem — not a claim that every
                  advanced technology capability is operational.
                </small>
              </div>
              <div className="tech-nodes">
                {TECH_NODES.map(({ Icon, t, s }) => (
                  <div className="tech-node" key={t}>
                    <Icon size={18} /> {t}
                    <small>{s}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div>
              <Eyebrow>Built on trust, not borrowed logos</Eyebrow>
              <div className="section-head">
                <h2>Building Partnerships That Create Value.</h2>
                <p>
                  We are preparing approved partner and client materials for
                  this preview. We will only display verified relationships and
                  authorised brand assets.
                </p>
              </div>
            </div>
            {/* LOAD-BEARING: a row of placeholder logos would imply that
                prospects are signed clients, which the spec forbids. */}
            <div className="logo-note">
              <strong>Partner stories belong here</strong>
              Verified partner categories and approved marks will be added when
              supplied. No client or endorsement claims are implied in this
              preview.
            </div>
          </div>
        </section>

        <section className="container section" style={{ paddingTop: 0 }}>
          <div className="cta-band">
            <div className="cta-copy">
              <h2>Let's Explore What Mint Can Do for Your Business.</h2>
              <p>
                Tell us what you're looking for and our team will help identify
                the right solution.
              </p>
            </div>
            <Link to={`${BUSINESS_ROOT}/contact`} className="btn-primary">
              Talk to Our Team <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        <EnquiryForm showServicePicker title="Tell us what you need" />
      </main>
    </div>
  );
}
