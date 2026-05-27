import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};

const index = read("index.html");
const siteCss = read("css/site.css");
const siteJs = read("js/site.js");

const requiredFiles = [
  "index.html",
  "css/site.css",
  "js/site.js",
  "images/tiago-2026/market-heat-anchovies.jpg",
  "images/tiago-2026/tiago-kitchen-portrait.jpg",
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    fail(`Missing required file: ${file}`);
  }
}

const requiredAnchors = [
  "main",
  "top",
  "work",
  "point-of-view",
  "collaborations",
  "atmosphere",
  "contact",
];

for (const id of requiredAnchors) {
  if (!new RegExp(`id=["']${id}["']`).test(index)) {
    fail(`Missing anchor target: #${id}`);
  }
}

const navLinks = Array.from(index.matchAll(/href="#([^"]+)"/g)).map((match) => match[1]);
for (const href of navLinks) {
  if (!requiredAnchors.includes(href)) {
    fail(`Navigation links to an unknown anchor: #${href}`);
  }
}

const stalePublicLanguage = [
  /Private Chef/i,
  /Booking/i,
  /Services/i,
  /booking\.html/i,
  /services\.html/i,
  /Formspree/i,
  /Webflow/i,
  /jquery/i,
];

for (const pattern of stalePublicLanguage) {
  if (pattern.test(index)) {
    fail(`Stale public language or dependency found in index.html: ${pattern}`);
  }
}

if (!/<html lang="en">/.test(index)) {
  fail("index.html must declare lang=\"en\".");
}

if (!/href="mailto:tiagodoborges@gmail\.com/.test(index)) {
  fail("Visible contact email must link to mailto:tiagodoborges@gmail.com.");
}

if (!/>tiagodoborges@gmail\.com</.test(index)) {
  fail("Contact email must be visible as text.");
}

if (!/css\/site\.css/.test(index) || !/js\/site\.js/.test(index)) {
  fail("index.html must load css/site.css and js/site.js.");
}

if (/webflow|jquery|formspree/i.test(siteCss) || /webflow|jquery|formspree/i.test(siteJs)) {
  fail("New CSS/JS should not depend on Webflow, jQuery, or Formspree.");
}

if (!process.exitCode) {
  console.log("Static site verification passed.");
}
