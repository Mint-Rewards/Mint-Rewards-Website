import { useEffect, useRef, useState } from "react";

/**
 * The looping launch film, shown where a screenshot was.
 *
 * It is a PRODUCED FILM, not a screen recording — brand tiles and titles
 * over a flat ground, not the app's own UI. The copy beside it is written
 * to that, and should stay written to it: describing this as the product
 * being used would be describing something the viewer can see it is not.
 *
 * NOTHING DOWNLOADS UNTIL SOMEBODY REACHES IT. The file is 5.75MB — a
 * twenty-second 1080x1920 recording displayed about 300px wide — and this
 * section sits well down a long page, so most visitors never see it. With
 * `preload="none"` the browser fetches only the poster until an observer
 * says the element is actually on screen, and `play()` is what starts the
 * download. Autoplay on a plain <video> would have cost every visitor the
 * full file whether they scrolled that far or not.
 *
 * It also pauses when scrolled away: a loop running in a tab nobody is
 * looking at is decode work and battery for nothing.
 *
 * REDUCED MOTION IS HONOURED PROPERLY, which here means more than not
 * autoplaying. Somebody who asks for less motion still wants to see what
 * the app does, so they get the poster and real controls instead of a
 * silent still — the choice of whether it moves becomes theirs.
 *
 * Muted and playsInline because no browser autoplays otherwise; the file
 * has no audio track at all, so nothing is lost by it.
 */
export default function AppShowcase({
  src,
  poster,
  caption,
  description,
}: {
  src: string;
  poster: string;
  caption: string;
  /** What the recording shows, for anyone who cannot watch it. */
  description: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Rejected autoplay is not an error worth surfacing — the poster
          // and controls are still there, and the page is still correct.
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <figure className="app-shot">
      <video
        ref={ref}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        controls={reducedMotion}
        aria-label={description}
      >
        <source src={src} type="video/mp4" />
        {description}
      </video>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
