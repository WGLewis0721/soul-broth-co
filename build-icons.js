/* Build step: rasterize the SVG source art into the PNG assets that social
   platforms and iOS home screens need (they do not render SVG).

   Usage:  node build-icons.js
   Needs:  Google Chrome (set CHROME env var to override the path).

   Outputs:
     assets/og.png              1200x630  — Open Graph / Twitter card image
     assets/apple-touch-icon.png 180x180  — iOS home-screen icon
*/
"use strict";
const path = require("path");
const { execFileSync } = require("child_process");

const chrome = process.env.CHROME ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const jobs = [
  { src: "assets/og.svg", out: "assets/og.png", w: 1200, h: 630 },
  { src: "assets/apple-touch-icon.svg", out: "assets/apple-touch-icon.png", w: 180, h: 180 },
];

jobs.forEach((j) => {
  const src = path.join(__dirname, j.src);
  const out = path.join(__dirname, j.out);
  execFileSync(chrome, [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--default-background-color=00000000",
    "--window-size=" + j.w + "," + j.h,
    "--screenshot=" + out,
    "file://" + src.replace(/\\/g, "/"),
  ], { stdio: "inherit" });
  console.log("wrote", out);
});
