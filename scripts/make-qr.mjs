/**
 * Regenerates the store QR codes in public/qr, and verifies them.
 *
 * The PNGs are committed, so this is not part of the build — it exists so
 * the codes can be remade when a store URL changes, and so the committed
 * files are not binaries nobody knows how to reproduce.
 *
 * IT DECODES WHAT IT WROTE, with a different library than it encoded with.
 * A QR that silently encodes the wrong URL looks exactly like one that
 * works, and nobody scans their own poster before shipping it.
 *
 *   node scripts/make-qr.mjs
 */
import { readFileSync, mkdirSync } from "node:fs";
import QRCode from "qrcode";
import { PNG } from "pngjs";
import jsQR from "jsqr";

const OUT = "public/qr";
const CODES = [
  {
    file: `${OUT}/app-store.png`,
    url: "https://apps.apple.com/us/app/mint-rewards/id6723895911",
  },
  {
    file: `${OUT}/google-play.png`,
    url: "https://play.google.com/store/apps/details?id=com.mintrewards.appp",
  },
];

mkdirSync(OUT, { recursive: true });

let failed = false;
for (const { file, url } of CODES) {
  await QRCode.toFile(file, url, {
    type: "png",
    width: 480,
    margin: 1,
    errorCorrectionLevel: "M",
    color: { dark: "#0f2f26ff", light: "#ffffffff" },
  });

  const png = PNG.sync.read(readFileSync(file));
  const decoded = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);
  const ok = decoded?.data === url;
  if (!ok) failed = true;
  console.log(`${ok ? "ok  " : "FAIL"} ${file} -> ${decoded?.data ?? "could not decode"}`);
}

if (failed) {
  console.error("\nA code did not decode back to its URL. Not shipping these.");
  process.exit(1);
}
