# Deploying the website

## The build prerenders every page, and needs a browser to do it

`npm run build` now runs three steps, not one:

```
make-sitemap.mjs   -> public/sitemap.xml, and FAILS if App.tsx and the
                      route table in scripts/routes.mjs disagree
vite build         -> dist/
prerender.mjs      -> dist/<route>/index.html for all 18 routes
```

**Why.** This is a client-rendered SPA behind a catch-all rewrite, so
every URL served the same shell and the per-page title, description,
canonical and schema only existed after React ran. Google executes
JavaScript; LinkedIn, WhatsApp, Slack and Facebook do not. Every link
shared out of this site showed the home page's card whatever page it
pointed at.

**What it needs.** `puppeteer`, a devDependency, which downloads its own
Chrome on `npm install`. That is deliberate: GitHub runners have Chrome
but **Vercel's build container does not**, and the deployed artifact is
the one that matters. Relying on a system browser would have prerendered
locally and shipped a shell.

**It fails the build rather than skipping.** A missing or unlaunchable
browser exits non-zero. A silent skip would produce a shell-only deploy
that looks correct in local preview, which is the exact failure this
step exists to prevent. To skip on purpose:

```sh
PRERENDER=0 npm run build
```

**Deploy with `npm run deploy`, not a bare `vercel deploy`.**

```sh
npm run deploy      # vercel build --prod && vercel deploy --prebuilt --prod
```

Vercel's build image downloads Chrome and then cannot run it — the
shared libraries are missing:

```
chrome: error while loading shared libraries: libnspr4.so
```

There is no flag for that, so the build does not happen there. It does
not need to: this project has **no Git integration**, every deploy is
already a CLI deploy from somebody's machine, so the build runs where a
browser works and only `.vercel/output` is uploaded.

That is also safer than what it replaces. A bare `vercel deploy` uploads
the working tree and relies on `.vercelignore` to hold back `.env`,
`.git` and the rest; `--prebuilt` uploads the built output and nothing
else.

**How the files get served.** Vercel checks the filesystem before
applying `rewrites`, so `/business/impact` finds
`dist/business/impact/index.html` and the catch-all in `vercel.json`
never runs for it. The rewrite stays for anything not prerendered.
**Confirm this on a preview deploy** rather than trusting it: fetch a
nested URL and check the `<title>` in the raw response, not in devtools.

```sh
curl -s https://<preview>/business/impact | grep -o '<title>[^<]*</title>'
```

Adding a route means adding it to `scripts/routes.mjs`; the sitemap
guard will fail the build until you do.


## The forms need three settings, in two places

Both public forms — the contact page and the business enquiry — post to the
consumer backend. They are wired and tested, and they will still fail in
production until all three of these are set. Each fails differently, and
only the first is obvious from the browser.

### 1. `VITE_API_BASE_URL` — on this site's Vercel project

The origin of the consumer backend, e.g. `https://api.mintrewards.app`.

Unset, the code falls back to `http://localhost:3000` for local
development, and **a production build carries that fallback**: a visitor's
browser posts to its own machine and every submission fails. Verify after
building:

```sh
npm run build
grep -o 'localhost:3000' dist/assets/index-*.js   # no output = correct
```

### 2. `BUSINESS_ENQUIRY_TO` — on the backend

Where business enquiries land. **Required at boot**, so a deploy fails
without it rather than silently discarding leads. `CONTACT_ENQUIRY_TO` is
optional and falls back to this one; set it only when the two kinds of
enquiry want separate inboxes.

### 3. `ALLOWED_ORIGINS` — on the backend

Must include this site's origin, e.g. `https://www.mintrewards.app`. It is
enforced by `proxy.ts` (Next 16 renamed `middleware.ts` to `proxy.ts`,
which is why searching for middleware finds nothing). Without it the
browser blocks the POST before it is sent, and the form reports a network
error it cannot explain.

## What a working submission looks like

An email from `EMAIL_FROM`, with `Reply-To` set to whoever filled the form,
containing every field plus the consent wording, the timestamp and the
originating IP.

**That email is the only record.** There is no table and no CRM row behind
either form — it was a deliberate choice, and it means a lost email is a
lost lead with nothing to reconcile against.
