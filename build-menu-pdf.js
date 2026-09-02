/* Build step: regenerate menu-print.html + menu.pdf from menu-data.js
   (single source of truth = menu-data.js).

   Usage:  node build-menu-pdf.js
   Needs:  Google Chrome (set CHROME env var to override the path).
*/
"use strict";
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

global.window = {};
require("./menu-data.js");
const { MENU, TAGS, ROUTE, TAX_RATE } = window.SBC;

const money = (n) => "$" + n.toFixed(2);
const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const fmt = (h) => {
  const hh = Math.floor(h + 1e-9), mm = Math.round((h - hh) * 60);
  const ap = hh >= 12 ? "p" : "a", h12 = hh % 12 || 12;
  return (mm ? h12 + ":" + String(mm).padStart(2, "0") : "" + h12) + ap;
};

const cats = MENU.map((cat) => {
  const rows = cat.items.map((it) => {
    const tags = (it.tags || []).length ? ` <span class="tags">${it.tags.map((t) => `<i>${t}</i>`).join("")}</span>` : "";
    return `<div class="row">
      <div class="row-top"><span class="nm">${esc(it.name)}</span><span class="dots"></span><span class="pr">${money(it.price)}</span></div>
      <div class="ds">${esc(it.desc)}${tags}</div>
    </div>`;
  }).join("");
  const note = cat.note ? `<p class="note">${esc(cat.note)}</p>` : "";
  return `<section class="cat"><h2>${esc(cat.name)}</h2>${note}${rows}</section>`;
}).join("");

const sched = ROUTE.map((e) => {
  const hrs = e.closed ? "Closed" : `${fmt(e.open)}–${fmt(e.close)}`;
  const stop = e.closed ? "—" : `${esc(e.place)}, ${esc(e.area)}`;
  return `<tr><td>${e.label}</td><td>${hrs}</td><td>${stop}</td></tr>`;
}).join("");

const legend = Object.keys(TAGS).map((k) => `${k} ${TAGS[k].toLowerCase()}`).join("   ·   ");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>SOUL BROTH CO. — Full Menu</title>
<link rel="stylesheet" href="assets/fonts/fonts.css">
<style>
  @page { size: Letter; margin: 0; }
  * { box-sizing: border-box; margin: 0; }
  :root {
    --ink:#16130F; --bone:#F2EADA; --ember:#FF5A1F; --broth:#E7A83C; --ash:#6f675b;
    --display:"Rye","Bookman Old Style",Georgia,serif;
    --head:"Archivo Black","Arial Black",sans-serif;
    --body:"Archivo",system-ui,sans-serif;
    --mono:"Space Mono",ui-monospace,monospace;
  }
  html,body { background:#fff; }
  body { font-family:var(--body); color:var(--ink); }
  .sheet { width:8.5in; min-height:10.4in; padding:0.6in 0.72in 0.45in; background:var(--bone); overflow:hidden; }
  .sheet + .sheet { page-break-before: always; }

  header { border-bottom:3px solid var(--ink); padding-bottom:.28in; margin-bottom:.3in; }
  .mark { font-family:var(--display); font-size:44pt; line-height:.9; }
  .sub { font-family:var(--head); text-transform:uppercase; font-size:12.5pt; letter-spacing:.02em; color:var(--ember); margin-top:.08in; }
  .kick { font-family:var(--mono); font-size:8pt; letter-spacing:.22em; text-transform:uppercase; color:var(--ash); margin-bottom:.06in; }

  .grid { column-count:2; column-gap:.5in; }
  .cat { break-inside:avoid; margin-bottom:.2in; }
  .cat h2 { font-family:var(--head); text-transform:uppercase; font-size:15pt; letter-spacing:-.01em; margin-bottom:.06in; }
  .note { font-family:var(--mono); font-size:7.5pt; color:var(--ash); margin-bottom:.08in; }
  .row { padding:.07in 0; border-bottom:.5pt dotted rgba(22,19,15,.4); break-inside:avoid; }
  .row-top { display:flex; align-items:baseline; gap:.06in; }
  .nm { font-weight:700; font-size:10pt; }
  .dots { flex:1; border-bottom:.5pt dotted rgba(22,19,15,.5); transform:translateY(-3pt); }
  .pr { font-family:var(--mono); font-weight:700; font-size:9.5pt; }
  .ds { font-size:8.2pt; line-height:1.4; color:rgba(22,19,15,.78); margin-top:.02in; max-width:3in; }
  .tags i { font-family:var(--mono); font-style:normal; font-size:6pt; font-weight:700; letter-spacing:.08em;
            border:.5pt solid rgba(22,19,15,.45); padding:0 .04in; margin-left:.04in; }

  footer { margin-top:.3in; border-top:3px solid var(--ink); padding-top:.2in; }
  .rt { font-family:var(--head); text-transform:uppercase; font-size:11pt; margin-bottom:.1in; }
  table { width:100%; border-collapse:collapse; font-size:8.4pt; }
  th { text-align:left; font-family:var(--mono); font-size:7pt; letter-spacing:.12em; text-transform:uppercase;
       color:var(--ash); border-bottom:1pt solid var(--ink); padding:.04in .06in; }
  td { padding:.05in .06in; border-bottom:.5pt dotted rgba(22,19,15,.35); vertical-align:top; }
  td:first-child { font-weight:700; }
  td:nth-child(2) { font-family:var(--mono); white-space:nowrap; }
  .fine { font-family:var(--mono); font-size:6.6pt; color:var(--ash); margin-top:.16in; line-height:1.5; }
  .legend { font-family:var(--mono); font-size:7pt; color:var(--ash); margin-top:.08in; }
</style>
</head>
<body>
  <div class="sheet">
    <header>
      <p class="kick">—— Atlanta food truck · order at soulbroth.co</p>
      <div class="mark">Soul Broth Co.</div>
      <div class="sub">Southern soul. Japanese bowl.</div>
    </header>

    <div class="grid">${cats}</div>

    <footer>
      <p class="rt">Weekly route</p>
      <table>
        <thead><tr><th>Day</th><th>Hours</th><th>Stop</th></tr></thead>
        <tbody>${sched}</tbody>
      </table>
      <p class="legend">${legend}   ·   add a soft egg to any bowl $2</p>
      <p class="fine">Design mockup — not a real business. Prices, route, and contact details are illustrative.
      Tax (${(TAX_RATE * 100).toFixed(1)}%) added at checkout. Menu changes with the season and the market.</p>
    </footer>
  </div>
</body>
</html>`;

const outHtml = path.join(__dirname, "menu-print.html");
const outPdf = path.join(__dirname, "menu.pdf");
fs.writeFileSync(outHtml, html, "utf8");
console.log("wrote", outHtml);

const chrome = process.env.CHROME ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
execFileSync(chrome, [
  "--headless",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--virtual-time-budget=5000",
  "--print-to-pdf=" + outPdf,
  outHtml,
], { stdio: "inherit" });
console.log("wrote", outPdf);
