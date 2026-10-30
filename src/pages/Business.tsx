import { Link } from "react-router-dom";
import { ArrowRight, Boxes, Factory, PackageCheck, Users } from "lucide-react";
import { BUSINESS_ROOT } from "../siteMode";

/**
 * Mint Rewards for Business — the overview page.
 *
 * ART DIRECTION: "one motif", dealt by the design-taste-frontend skill
 * (seed 989468459). Its instruction is a sentence written from the inventory
 * of what belongs to this client and no competitor:
 *
 *   On this page, RecovLoop's circuit-traced recovery loop becomes the shape
 *   that crops every photograph, cuts every button, and marks every item in a
 *   list.
 *
 * It passes the skill's own test: put a competitor in that sentence and it
 * collapses, because the loop is this brand's name and emblem rather than a
 * decoration. The loop is also the argument — material leaves, is recovered,
 * comes back — so the geometry carries the claim instead of ornamenting it.
 *
 * The direction's discipline, which is easy to erode later: sections are
 * deliberately plain two-column or single-column so the SHAPE is the only
 * thing on the page with character. Resist adding card shadows, gradients,
 * icon tiles or hover lifts; each one takes character away from the motif and
 * gives it to the ornament.
 *
 * CONTENT is Ahsan's, from the B2B specification, preserved rather than
 * rewritten — it was written against the accuracy rules in section 15 and is
 * careful in ways that matter. Two lines are load-bearing and must not be
 * "tightened" into claims: the technology caveat, and the partner-logo note.
 */

/** The motif, reused at three very different scales as the direction requires. */
const LOOP = "rounded-full";

type Offer = {
  name: string;
  label: string;
  desc: string;
  benefits: string[];
  url: string;
  cta: string;
};

const OFFERS: Offer[] = [
  {
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

/*
 * The dealt "Texture" set. The skill ranks these fifth of five, below real
 * pictures of the subject's world from open collections — but Wikimedia
 * Commons refused the connection and Openverse's search timed out from this
 * machine, so they could not be searched.
 *
 * Chosen for being MATERIALS rather than scenery, which is what a recovery
 * business is actually about. They are atmosphere and must never be read as
 * Mint's own sites, vehicles or people.
 *
 * REPLACE with Pakistani archive imagery when the network allows:
 *   node .agents/skills/design-taste-frontend/scripts/assets.mjs "karachi"
 */
const TEXTURES = [
  { id: 210, alt: "Weathered brick wall, its mortar worn by age" },
  { id: 115, alt: "Rain scattered across a dark wet surface" },
  { id: 609, alt: "Smooth grey pebbles sorted by a tide" },
];

const texture = (id: number, w: number, h: number) =>
  `https://picsum.photos/id/${id}/${w}/${h}?grayscale`;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-emerald">
      {children}
    </p>
  );
}

export default function Business() {
  return (
    <main id="main" className="bg-white">
      {/* ── Hero: the motif once, at enormous scale, cropped by the viewport ── */}
      <section className="relative overflow-hidden bg-forest-deep">
        {/*
          ~120vh across, entering from the right, cropped by the top, right and
          bottom edges exactly as the hero blueprint specifies. A ring rather
          than a disc, because the subject is a loop and a filled circle would
          say nothing about it.
        */}
        <div
          className="pointer-events-none absolute overflow-hidden rounded-full bg-emerald"
          style={{
            width: "120vh",
            height: "120vh",
            left: "78%",
            top: "55%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* The picture lives inside the motif, which is what the direction
              asks for and what stops the shape reading as an empty block.
              Multiply over the emerald field keeps one treatment across every
              photograph on the page. */}
          <img
            src={texture(1002, 1600, 1600)}
            alt="Water meeting land from above — the boundary where material is recovered"
            width={1600}
            height={1600}
            className="h-full w-full object-cover opacity-40 mix-blend-multiply"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full border-[1.6vh] border-jade/45"
          style={{
            width: "78vh",
            height: "78vh",
            left: "78%",
            top: "55%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="relative mx-auto grid min-h-[86vh] max-w-6xl grid-cols-12 items-center px-6 py-28">
          <div className="col-span-12 lg:col-span-6">
            <Eyebrow>Mint Rewards for business</Eyebrow>
            <h1 className="mt-5 text-[clamp(36px,4.1vw,64px)] font-bold leading-[0.98] tracking-[-0.03em] text-white">
              Business Solutions That Deliver More.
            </h1>
            <p className="mt-7 max-w-xl text-[19px] leading-relaxed text-sage">
              Smarter Waste Management. Stronger Customer Connections.
              Measurable Sustainability.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-sage/70">
              Mint Rewards combines practical waste management, consumer rewards
              and corporate sustainability solutions to help businesses improve
              efficiency, unlock value and make environmental responsibility
              commercially meaningful.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {/* The action is cut to the motif's shape, per the direction. */}
              <a
                href="#solutions"
                className={`${LOOP} bg-jade px-7 py-3.5 text-sm font-medium text-forest-deep transition hover:bg-green-soft`}
              >
                Explore Our Solutions
              </a>
              <Link
                to={`${BUSINESS_ROOT}/contact`}
                className={`${LOOP} border border-sage/30 px-7 py-3.5 text-sm font-medium text-sage transition hover:border-sage/60 hover:text-white`}
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── features: specimens on colour tiles ── */}
      <section id="solutions" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <Eyebrow>Three ways to work with Mint</Eyebrow>
            <h2 className="mt-4 text-[clamp(26px,2.3vw,36px)] font-bold leading-[1.05] tracking-[-0.02em] text-forest-deep">
              Practical solutions. One connected purpose.
            </h2>
            <p className="mt-5 max-w-[30ch] text-base leading-relaxed text-forest/70">
              Choose the service that fits your priority.
            </p>
          </div>

          <div className="col-span-12 grid gap-x-6 gap-y-12 sm:grid-cols-3 lg:col-span-8">
            {OFFERS.map((o, i) => (
              <div key={o.name}>
                {/* Flat colour tile, rotating through three palette fields. No
                    shadow and no hover lift: the direction gives character to
                    the shape, not to the container. */}
                <div
                  className={`${LOOP} aspect-square w-full overflow-hidden ${
                    ["bg-emerald", "bg-forest", "bg-jade"][i]
                  }`}
                >
                  <img
                    src={texture(TEXTURES[i].id, 900, 900)}
                    alt={TEXTURES[i].alt}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-45 mix-blend-multiply"
                  />
                </div>
                {/* Text outside the tile, aligned to its left edge. */}
                <p className="mt-5 text-xl font-medium text-forest-deep">
                  {o.name}
                </p>
                <p className="mt-1 text-sm text-forest/60">{o.label}</p>
                <p className="mt-4 text-base leading-relaxed text-forest/80">
                  {o.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {o.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-sm text-forest/70"
                    >
                      {/* The motif again, at text size, as the bullet. */}
                      <span
                        aria-hidden
                        className={`${LOOP} h-1.5 w-1.5 shrink-0 border border-jade`}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to={o.url}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald hover:text-forest-deep"
                >
                  {o.cta}
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── the full-width band the direction asks for between the halves ── */}
      <div aria-hidden className="h-px w-full bg-forest/10" />

      {/* ── list: two-column menu ── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow>Who we work with</Eyebrow>
            <h2 className="mt-4 text-[clamp(26px,2.2vw,34px)] font-bold leading-[1.08] tracking-[-0.02em] text-forest-deep">
              From production floors to customer-facing brands.
            </h2>
            <p className="mt-5 max-w-[34ch] text-base leading-relaxed text-forest/70">
              We tailor conversations around your organisation and its goals.
            </p>
          </div>
          <ul className="col-span-12 lg:col-span-7">
            {SECTORS.map((s, i) => (
              <li
                key={s}
                className="flex items-baseline gap-5 border-t border-forest/10 py-5 last:border-b"
              >
                <span className="font-mono text-[13px] text-forest/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-forest-deep">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── about: inset panel ── */}
      <section className="bg-mint-light py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-12 gap-10 rounded-[2.5rem] bg-forest-deep p-10 sm:p-14">
            <div className="col-span-12 lg:col-span-6">
              <Eyebrow>Technology driven circular economy</Eyebrow>
              <h2 className="mt-4 text-[clamp(26px,2.3vw,34px)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Where Physical Recovery Meets Digital Intelligence.
              </h2>
              <p className="mt-5 text-base leading-[1.8] text-sage/80">
                We combine waste management operations, consumer engagement and
                digital systems to make recycling and resource recovery more
                connected, transparent and measurable.
              </p>
              {/*
                LOAD-BEARING. Section 15 of the spec requires deployed
                capabilities to be distinguished from proposed ones. Do not
                delete this to tidy the layout.
              */}
              <p className="mt-6 text-[13px] leading-relaxed text-sage/50">
                An overview of Mint's ecosystem — not a claim that every
                advanced technology capability is operational.
              </p>
            </div>
            <div className="col-span-12 grid gap-px overflow-hidden rounded-3xl bg-forest/40 sm:grid-cols-2 lg:col-span-6">
              {[
                {
                  Icon: Factory,
                  t: "Physical operations",
                  s: "Materials, collection and recovery",
                },
                {
                  Icon: Users,
                  t: "Consumer engagement",
                  s: "Offers and participation",
                },
                {
                  Icon: Boxes,
                  t: "Business workflows",
                  s: "Service design and coordination",
                },
                {
                  Icon: PackageCheck,
                  t: "Reporting",
                  s: "Records and programme insights",
                },
              ].map(({ Icon, t, s }) => (
                <div key={t} className="bg-forest-deep p-6">
                  <Icon size={18} className="text-jade" />
                  <p className="mt-3 text-sm font-medium text-white">{t}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-sage/60">
                    {s}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── proof: honest about having none yet ── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-6">
            <Eyebrow>Built on trust, not borrowed logos</Eyebrow>
            <h2 className="mt-4 text-[clamp(26px,2.2vw,34px)] font-bold leading-[1.08] tracking-[-0.02em] text-forest-deep">
              Building Partnerships That Create Value.
            </h2>
            <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-forest/70">
              We are preparing approved partner and client materials for this
              preview. We will only display verified relationships and
              authorised brand assets.
            </p>
          </div>
          {/*
            LOAD-BEARING, like the technology caveat. The spec forbids implying
            that prospects or companies in discussion are signed clients, and a
            row of placeholder logo boxes would imply exactly that.
          */}
          <div className="col-span-12 rounded-[2rem] border border-dashed border-forest/20 p-10 lg:col-span-6">
            <p className="text-base font-medium text-forest-deep">
              Partner stories belong here
            </p>
            <p className="mt-3 text-sm leading-relaxed text-forest/60">
              Verified partner categories and approved marks will be added when
              supplied. No client or endorsement claims are implied in this
              preview.
            </p>
          </div>
        </div>
      </section>

      {/* ── cta ── */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-deep px-10 py-16 sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[3rem] border-emerald/30"
          />
          <div className="relative grid grid-cols-12 items-center gap-8">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-[clamp(26px,2.4vw,36px)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                Let's Explore What Mint Can Do for Your Business.
              </h2>
              <p className="mt-4 max-w-[48ch] text-base text-sage/75">
                Tell us what you're looking for and our team will help identify
                the right solution.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:justify-self-end">
              <Link
                to={`${BUSINESS_ROOT}/contact`}
                className={`${LOOP} inline-flex items-center gap-2 bg-jade px-8 py-4 text-sm font-medium text-forest-deep transition hover:bg-green-soft`}
              >
                Talk to Our Team
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
