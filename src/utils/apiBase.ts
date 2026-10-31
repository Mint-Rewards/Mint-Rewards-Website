/**
 * Where the backend lives, shared by both public forms.
 *
 * The website is a static build and the API a separate deployment, so every
 * submission is a cross-origin POST and the backend's ALLOWED_ORIGINS has to
 * name this site. Falls back to localhost for `npm run dev`, which that list
 * already permits — and which is why an unset value in production sends a
 * visitor's browser to its own machine rather than to us. DEPLOYMENT.md has
 * the grep that catches that fallback in a built bundle.
 *
 * THIS LIVES ALONE, AWAY FROM appStore.ts, FOR A MECHANICAL REASON. Jest
 * compiles through tsconfig.jest.json, which sets `module: commonjs`, and
 * `import.meta` is a compile error under CommonJS (TS1343) wherever it
 * appears in a file the suite loads. The smoke test renders the home page,
 * which reaches appStore.ts for `openAppStore` — so keeping the two together
 * failed the whole suite on a constant the test never used. Nothing on the
 * home page imports this file; only the two forms do.
 */
export const API_BASE = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"
).replace(/\/$/, "");
