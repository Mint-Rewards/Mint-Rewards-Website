# Deploying the website

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
