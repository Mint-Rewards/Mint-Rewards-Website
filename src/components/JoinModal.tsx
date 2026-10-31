import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Apple, Play, X } from "lucide-react";
import { contactSocialLinks } from "../constants";
import { APP_STORE_URL, PLAY_STORE_URL } from "../utils/appStore";

/**
 * The "Join the Movement" dialog: install the app, then follow along.
 *
 * TWO STEPS, NUMBERED, because they are sequential rather than alternative
 * — the app is the product and the socials are how someone stays with it.
 *
 * THE QR CODES ARE FOR DESKTOP, which is where this gets clicked most: a
 * person reading on a laptop cannot install a phone app from that machine,
 * so the code moves them to the device that can. The store links sit
 * directly beneath each code rather than off in a corner, because on a
 * phone the QR is useless and the link is the whole point — the two are the
 * same destination offered to whichever device is reading.
 *
 * Both codes were generated from the store URLs and verified by decoding
 * the PNGs back (scripts are gone; the files are in public/qr). A QR that
 * silently encodes the wrong thing is worse than no QR, because nobody
 * checks their own poster.
 */
export default function JoinModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* Escape closes, and the page behind does not scroll while it is open. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  const stores = [
    {
      label: "iPhone & iPad",
      qr: "/qr/app-store.png",
      href: APP_STORE_URL,
      cta: "App Store",
      Icon: Apple,
    },
    {
      label: "Android",
      qr: "/qr/google-play.png",
      href: PLAY_STORE_URL,
      cta: "Google Play",
      Icon: Play,
    },
  ];

  /*
   * A portal: the trigger sits inside a section with its own transforms and
   * stacking, and a fixed overlay rendered in there would be positioned
   * against that ancestor rather than the viewport.
   */
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-modal-title"
    >
      <div
        className="absolute inset-0 bg-[#0b1f2a]/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        <h2
          id="join-modal-title"
          className="pr-10 text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          Join the movement
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Two steps: get the app, then come say hello.
        </p>

        {/* Step 1 */}
        <section className="mt-7">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1D558E] text-xs font-bold text-white">
              1
            </span>
            <h3 className="text-base font-semibold text-gray-900">
              Install the app
            </h3>
          </div>
          <p className="mt-2 pl-10 text-sm text-gray-600">
            Scan with your phone&rsquo;s camera, or tap the store below.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 pl-0 sm:grid-cols-2 sm:pl-10">
            {stores.map(({ label, qr, href, cta, Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl border border-gray-200 bg-gray-50/60 p-4"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {label}
                </span>
                <img
                  src={qr}
                  alt={`QR code linking to Mint Rewards on the ${cta}`}
                  width={480}
                  height={480}
                  className="mt-3 h-32 w-32 rounded-lg bg-white"
                  loading="lazy"
                />
                {/* Directly beneath its own code, as the one that works on
                    a phone where the code does not. */}
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Step 2 */}
        <section className="mt-8">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3EBAB9] text-xs font-bold text-white">
              2
            </span>
            <h3 className="text-base font-semibold text-gray-900">
              Become part of the Mint family
            </h3>
          </div>
          <p className="mt-2 pl-10 text-sm text-gray-600">
            Follow along for collection days, new partner offers and what the
            community is recycling.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 pl-0 sm:pl-10">
            {contactSocialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-[#3EBAB9] hover:bg-[#8CE4B5]/10 hover:text-[#1D558E]"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {name}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>,
    document.body,
  );
}
