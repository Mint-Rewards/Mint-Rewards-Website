import { Link, useLocation } from "react-router-dom";
import { BUSINESS_ROOT, siteModeFor } from "../siteMode";

/**
 * What an unmatched URL shows.
 *
 * There was no catch-all route, so any address the router did not recognise
 * rendered the navigation over an empty page — no message, no error, nothing
 * to click. That is worse than a 404: a missing page tells you it is missing,
 * whereas a blank one reads as broken, and the usual next move is to reload it
 * and get the same nothing.
 *
 * It answers in the voice of whichever site you were on, because somebody who
 * mistyped a business URL wants the business home, not the consumer one.
 */
export default function NotFound() {
  const { pathname } = useLocation();
  const mode = siteModeFor(pathname);
  const home = mode === "business" ? BUSINESS_ROOT : "/";

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium text-black/50">404</p>
        <h1 className="mt-3 text-3xl font-bold text-black sm:text-4xl">
          We could not find that page
        </h1>
        <p className="mt-4 text-black/60">
          The address{" "}
          {/* Shown so a mistyped or stale link is obvious at a glance, rather
              than leaving somebody guessing which part was wrong. */}
          <span className="font-mono text-sm text-black/80">{pathname}</span>{" "}
          does not exist. It may have moved, or the link that brought you here
          may be out of date.
        </p>
        <Link
          to={home}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          {mode === "business"
            ? "Back to Mint Rewards for Business"
            : "Back to Mint Rewards"}
        </Link>
      </div>
    </main>
  );
}
