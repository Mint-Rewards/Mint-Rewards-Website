/**
 * Where "get the app" should send somebody, given the device they are on.
 *
 * ONE PLACE, because the two store URLs were already written out in four
 * files and the detection in two of them. A link that exists in six places
 * is a link that is wrong in at least one of them after the next change.
 *
 * iOS goes to the App Store, whose link opens the store app directly.
 * EVERYTHING ELSE GOES TO GOOGLE PLAY, and that is deliberate rather than a
 * fallback: on Android it opens the Play app, and on a desktop the same URL
 * is a perfectly good web page with a QR code and an install-to-device
 * button. Sending a desktop visitor to the App Store instead would show
 * them a page they cannot act on.
 */
export const APP_STORE_URL =
  "https://apps.apple.com/us/app/mint-rewards/id6723895911";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.mintrewards.appp";

export type DeviceStore = "ios" | "android" | "desktop";

/**
 * `maxTouchPoints` is what separates an iPad from a Mac.
 *
 * iPadOS 13 and later report themselves as "Macintosh" in the user agent,
 * so a user-agent test alone sends every iPad to Google Play. A Mac reports
 * no touch points; an iPad reports several.
 */
export function detectDevice(
  ua: string = typeof navigator === "undefined" ? "" : navigator.userAgent,
  touchPoints: number = typeof navigator === "undefined"
    ? 0
    : navigator.maxTouchPoints,
): DeviceStore {
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Macintosh/i.test(ua) && touchPoints > 1) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
}

export function storeUrlForDevice(
  device: DeviceStore = detectDevice(),
): string {
  return device === "ios" ? APP_STORE_URL : PLAY_STORE_URL;
}

/**
 * A new tab, with `noopener`: these are third-party pages and the opened
 * document must not get a handle on ours.
 */
export function openAppStore(): void {
  window.open(storeUrlForDevice(), "_blank", "noopener,noreferrer");
}


/**
 * Where the backend lives, shared by both public forms.
 *
 * The website is a static build and the API a separate deployment, so every
 * submission is a cross-origin POST and the backend's ALLOWED_ORIGINS has
 * to name this site. Falls back to localhost for `npm run dev`, which that
 * list already permits — and which is why an unset value in production
 * sends a visitor's browser to its own machine rather than to us.
 */
export const API_BASE = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"
).replace(/\/$/, "");
