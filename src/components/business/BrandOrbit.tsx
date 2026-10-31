/**
 * The partner network, as an orbit around RecovLoop.
 *
 * WHERE THE NAMES CAME FROM. `activeBrands` in constants.ts is a list of
 * numbered image paths and nothing else — no names anywhere in the repo, and
 * the consumer marquee uses the file path as its alt text, which is why it
 * reads out "/brand-logos/14.png" to a screen reader. The names below were
 * read off the artwork itself, one file at a time. Keep `file` on each entry:
 * it is the only link back to which image a name belongs to, and without it
 * the next person has to identify twenty-nine logos again.
 *
 * WHOSE LOGOS THESE ARE. The numbered ones are the reward partners the
 * consumer homepage already shows publicly, so repeating them here repeats a
 * public claim rather than making a new one. They are a mix of consumer
 * brands, universities and initiatives — NOT a client list, and not
 * RecovLoop waste-management customers. The copy around this component is
 * written to stay on the right side of that; see the note above the section
 * in WasteManagement.tsx before rewording it.
 *
 * THE TWO IN THE INNER RING were sourced from the companies' own websites,
 * at the request of the business, because no approved artwork was supplied.
 * They should be replaced with supplied files when those arrive — the same
 * standard the rest of this page holds itself to.
 *
 * HOW THE MOTION WORKS. Each ring is one element that rotates. A slot is
 * placed on it by rotating to its angle, pushing out by the radius, then
 * unrotating so its contents sit upright. The ring is also turning, which
 * would carry every logo around upside down at the bottom of the circle, so
 * each chip sits inside a counter-element running the SAME animation in
 * reverse at the SAME duration. The two cancel and the logo stays upright
 * while its position travels — which is why the duration is a custom
 * property shared by both halves, and why they must never disagree.
 */

type Partner = {
  /** Which file in public/brand-logos this is. See the note above. */
  file: string;
  name: string;
  /**
   * The logo is drawn for a dark background — gold or white artwork with no
   * dark version supplied. On a white chip its wordmark simply disappears,
   * so the chip is filled dark instead of the logo being left unreadable.
   */
  dark?: boolean;
};

/**
 * Inner ring first. Counts rise outward because circumference does; an even
 * split would crowd the inside and strand the outside. Radii are percentages
 * of the orbit's diameter, so the figure scales as one object with no
 * breakpoint re-laying it out.
 *
 * The outermost sits at 45%: a chip is centred on the radius, so anything
 * past that overhangs the square and gets cut by the section edge.
 *
 * THE RADII ARE EVENLY SPACED ON PURPOSE — 15, 25, 35, 45, a gap of exactly
 * 10% between each. Chips are 9% wide (see .orbit in business.css), so that
 * gap is what keeps a chip on one ring clear of a chip on the next as they
 * pass. Move one radius without moving the rest and rings start colliding
 * wherever the gap falls below the chip width.
 *
 * WIDENING THE SPAN IS WHAT LET THE CHIPS GROW. The orbit got smaller when
 * it moved into a 70% column, which would normally shrink every logo with
 * it. Pulling the inner ring from 19% in to 15% buys a 10% gap instead of
 * 8.67%, and the chip is sized against that gap — so the marks come out
 * LARGER in the smaller figure. The inner ring and the core are the other
 * constraint: 15% minus half a chip leaves the core 10.5% of radius to sit
 * in, which is why the core is 19% across and not more.
 */
const RINGS: {
  radius: number;
  duration: number;
  reverse: boolean;
  partners: Partner[];
}[] = [
  {
    radius: 15,
    duration: 86,
    reverse: false,
    partners: [
      { file: "ismail-resin.png", name: "Ismail Resin" },
      { file: "trifit.png", name: "TriFit", dark: true },
    ],
  },
  {
    radius: 25,
    duration: 104,
    reverse: true,
    partners: [
      { file: "1.png", name: "Unilever" },
      { file: "8.png", name: "foodpanda" },
      { file: "3.png", name: "Bykea" },
      { file: "18.png", name: "Dawlance" },
      { file: "5.png", name: "Tapmad" },
      { file: "7.png", name: "Popular" },
      { file: "2.png", name: "Bachaa Party" },
      { file: "14.png", name: "Tehzeeb" },
      { file: "4.png", name: "Yayycheese" },
    ],
  },
  {
    radius: 35,
    duration: 126,
    reverse: false,
    partners: [
      { file: "15.png", name: "BookMySpot" },
      { file: "17.png", name: "Coffee Wagera" },
      { file: "19.png", name: "Mashion Bazaar" },
      { file: "13.png", name: "La Rosaa" },
      { file: "11.png", name: "Amor by Sahir Lodhi" },
      { file: "10.png", name: "Aninas" },
      { file: "12.png", name: "The Doodle Club" },
      { file: "16.png", name: "Primal" },
      { file: "6.png", name: "GOmicro" },
      { file: "20.png", name: "The Innovators Karachi" },
    ],
  },
  {
    radius: 45,
    duration: 148,
    reverse: true,
    partners: [
      { file: "25.png", name: "LUMS" },
      { file: "27.png", name: "IBA Karachi" },
      { file: "21.png", name: "FAST NUCES" },
      { file: "22.png", name: "NED University" },
      { file: "28.png", name: "COMSATS University" },
      { file: "24.png", name: "Institute of Business Management" },
      { file: "29.png", name: "National Defence University" },
      { file: "30.png", name: "University of Peshawar" },
      { file: "26.png", name: "Clean Green Pakistan" },
      { file: "23.png", name: "CSR Forum Pakistan" },
    ],
  },
];

export const PARTNER_COUNT = RINGS.reduce(
  (total, ring) => total + ring.partners.length,
  0,
);

import { useEffect, useRef } from "react";

/**
 * Auto-advance for the phone carousel.
 *
 * Below 900px the orbit becomes a horizontal scroll-snap strip (see
 * business.css). A strip that only moves when you swipe it reads as a static
 * row of three logos — most people never discover the other twenty-eight.
 * This nudges it along so the strip announces itself as scrollable.
 *
 * It drives the native scroll position rather than a transform, so every
 * behaviour the CSS already gets for free — momentum, keyboard, assistive
 * technology, the snap points — keeps working. Three things switch it off:
 *
 *   - `prefers-reduced-motion`, because this is decorative movement;
 *   - the viewport being above the carousel breakpoint, where the strip is
 *     a ring again and scrollLeft means nothing;
 *   - the person touching it. Auto-scroll that fights a finger is worse
 *     than none, so any interaction stops it and it only resumes after
 *     they have been idle for a few seconds.
 *
 * It also stops while scrolled out of view, so an off-screen section is not
 * running a rAF loop for nobody.
 *
 * It ping-pongs at the ends instead of wrapping to zero: a seamless wrap
 * needs the list duplicated, and a hard jump back to the start is the one
 * thing that reads as broken rather than as motion.
 */
function useCarouselAutoScroll(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const carousel = window.matchMedia("(max-width: 900px)");

    let frame = 0;
    let direction = 1;
    let position = 0;
    let idleUntil = 0;
    let visible = true;
    let last = 0;

    const PX_PER_SECOND = 24;
    const RESUME_AFTER_MS = 2500;

    const step = (now: number) => {
      frame = requestAnimationFrame(step);
      const elapsed = last ? now - last : 0;
      last = now;

      if (!visible || now < idleUntil) return;

      const max = el.scrollWidth - el.clientWidth;
      if (max <= 1) return;

      /* Snapping fights a continuous scroll of a fraction of a pixel per
         frame, so it is off while we are driving and restored the moment
         the person takes over. */
      el.style.scrollSnapType = "none";

      /*
       * `position` is kept as a float and is the source of truth, NOT
       * `el.scrollLeft`. At 24px/s a frame advances about 0.38px, and
       * reading the position back from the element rounds that away — so
       * `scrollLeft = scrollLeft + 0.38` lands on the same integer every
       * frame and the strip never moves at all. Accumulating here and
       * writing the total is what makes sub-pixel speeds possible.
       */
      position += (direction * PX_PER_SECOND * elapsed) / 1000;
      if (position >= max) {
        position = max;
        direction = -1;
      } else if (position <= 0) {
        position = 0;
        direction = 1;
      }
      el.scrollLeft = position;
    };

    const pause = () => {
      idleUntil = performance.now() + RESUME_AFTER_MS;
      el.style.scrollSnapType = "";
    };

    /* Wherever they leave it is where we carry on from. Without this the
       strip jumps back to our own stale position when auto-scroll resumes. */
    const syncPosition = () => {
      if (performance.now() < idleUntil) position = el.scrollLeft;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 },
    );

    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      observer.disconnect();
      for (const event of ["pointerdown", "touchstart", "wheel", "keydown"]) {
        el.removeEventListener(event, pause);
      }
      el.removeEventListener("scroll", syncPosition);
      el.style.scrollSnapType = "";
    };

    const start = () => {
      stop();
      if (reduced.matches || !carousel.matches) return;
      observer.observe(el);
      for (const event of ["pointerdown", "touchstart", "wheel", "keydown"]) {
        el.addEventListener(event, pause, { passive: true });
      }
      el.addEventListener("scroll", syncPosition, { passive: true });
      position = el.scrollLeft;
      last = 0;
      frame = requestAnimationFrame(step);
    };

    start();
    reduced.addEventListener("change", start);
    carousel.addEventListener("change", start);
    return () => {
      stop();
      reduced.removeEventListener("change", start);
      carousel.removeEventListener("change", start);
    };
  }, [ref]);
}

export default function BrandOrbit() {
  const stripRef = useRef<HTMLDivElement>(null);
  useCarouselAutoScroll(stripRef);

  return (
    <div className="orbit" ref={stripRef}>
      {RINGS.map((ring, ringIndex) => (
        <div
          key={ring.radius}
          className={`orbit-ring${ring.reverse ? " reverse" : ""}`}
          style={{ ["--dur" as string]: `${ring.duration}s` }}
        >
          <span
            className="orbit-path"
            style={{ ["--r" as string]: `${ring.radius}%` }}
          />
          {ring.partners.map((partner, i) => (
            <span
              key={partner.file}
              className="orbit-slot"
              style={{
                /* Offset per ring so the rings never line up into spokes. */
                ["--angle" as string]: `${
                  (360 / ring.partners.length) * i + ringIndex * 13
                }deg`,
                ["--r" as string]: `${ring.radius}%`,
              }}
            >
              <span className="orbit-counter">
                {/*
                  The name is BOTH the image's alt text and the visible
                  tooltip. One source, so a logo can never show one name and
                  announce another.
                */}
                <span
                  className={`orbit-chip${partner.dark ? " dark" : ""}`}
                  tabIndex={0}
                >
                  <img
                    src={`/brand-logos/orbit/${partner.file}`}
                    alt={partner.name}
                    /* A NORMALISED COPY, not the file the consumer
                       marquee uses. Those ship wildly different baked-in
                       padding — the ink inside an identical circle ranged
                       from 26px to 49px, which is why some logos looked
                       bigger than others when every chip is the same size.
                       These are trimmed to their mark and rescaled so the
                       footprint is consistent (1.23x spread, from 1.9x),
                       and at 168px they weigh 628KB against 5.1MB. The
                       originals are untouched; the consumer homepage still
                       uses them. See scripts/normalise-brand-logos.mjs. */
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="orbit-tip" aria-hidden="true">
                  {partner.name}
                </span>
              </span>
            </span>
          ))}
        </div>
      ))}

      <div className="orbit-core">
        <picture>
          <source srcSet="/images/recovloop-logo.webp" type="image/webp" />
          <img
            src="/images/recovloop-logo.png"
            alt="RecovLoop"
            width={560}
            height={147}
          />
        </picture>
      </div>
    </div>
  );
}
