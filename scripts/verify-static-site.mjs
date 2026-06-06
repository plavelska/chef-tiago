import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");
const exists = (path) => existsSync(join(root, path));
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};

const pages = [
  "index.html",
  "about.html",
  "work.html",
  "collaborations.html",
  "gallery.html",
  "music.html",
  "contact.html",
];

const expectedNav = [
  "index.html",
  "about.html",
  "work.html",
  "collaborations.html",
  "gallery.html",
  "music.html",
  "contact.html",
];

const requiredFiles = [
  ...pages,
  "css/site.css",
  "js/site.js",
  "images/tiago-2026/tiago-kitchen-portrait.jpg",
  "images/tiago-2026/bottega-team-blue-door.jpg",
  "images/tiago-2026/bottega-table-toast.jpg",
  "images/tiago-2026/green-rice-fish.jpg",
  "images/tiago-2026/terrace-table-bread-wine.jpg",
];

for (const file of requiredFiles) {
  if (!exists(file)) {
    fail(`Missing required file: ${file}`);
  }
}

const siteCss = read("css/site.css");
const siteJs = read("js/site.js");
const pageHtml = new Map(pages.map((page) => [page, read(page)]));

const stalePublicLanguage = [
  /Private\s+Chef/i,
  /\bBooking\b/i,
  /\bServices\b/i,
  /booking\.html/i,
  /services\.html/i,
  /Formspree/i,
  /Webflow/i,
  /jquery/i,
];

const ignoredHref = /^(mailto:|tel:|https?:|\/\/)/i;
const hrefPattern = /\s(?:href|src)=["']([^"']+)["']/g;

const stripHash = (value) => value.split("#")[0];
const hashPart = (value) => value.includes("#") ? value.split("#").slice(1).join("#") : "";

const resolveLocal = (page, value) => {
  if (!value || value.startsWith("data:") || ignoredHref.test(value)) return null;
  const clean = decodeURIComponent(stripHash(value));
  if (!clean) return page;
  return join(dirname(page), clean).replaceAll("\\", "/");
};

for (const [page, html] of pageHtml.entries()) {
  if (!/<html lang="en">/.test(html)) fail(`${page} must declare lang="en".`);
  if (!/<title>[^<]+<\/title>/.test(html)) fail(`${page} must include a title.`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) fail(`${page} must include a meta description.`);
  if (!/<a class="skip-link" href="#main">Skip to content<\/a>/.test(html)) fail(`${page} must include the shared skip link.`);
  if (!/<main id="main">/.test(html)) fail(`${page} must include <main id="main">.`);
  if (!/href="css\/site\.css"/.test(html)) fail(`${page} must load css/site.css.`);
  if (!/src="js\/site\.js"/.test(html)) fail(`${page} must load js/site.js.`);
  if (!/href="mailto:tiagodoborges@gmail\.com/.test(html)) fail(`${page} must link the visible email with mailto.`);
  if (!/>tiagodoborges@gmail\.com</.test(html)) fail(`${page} must show the contact email as text.`);
  if (/<form[\s>]/i.test(html)) fail(`${page} must stay email-first and must not include a form.`);
  if (/new assets/i.test(html)) fail(`${page} must not reference raw new assets paths.`);

  for (const pattern of stalePublicLanguage) {
    if (pattern.test(html)) fail(`Stale public language or dependency found in ${page}: ${pattern}`);
  }

  const navMatch = html.match(/<nav class="site-nav"[\s\S]*?<\/nav>/);
  if (!navMatch) {
    fail(`${page} must include the shared site nav.`);
  } else {
    const navHrefs = Array.from(navMatch[0].matchAll(/href="([^"]+)"/g)).map((match) => match[1]);
    if (navHrefs.join("|") !== expectedNav.join("|")) {
      fail(`${page} nav order mismatch: ${navHrefs.join(", ")}`);
    }
    const currentCount = (navMatch[0].match(/aria-current="page"/g) || []).length;
    if (currentCount !== 1) fail(`${page} must have exactly one current nav item.`);
  }

  for (const match of html.matchAll(hrefPattern)) {
    const value = match[1];
    const localPath = resolveLocal(page, value);
    if (!localPath) continue;
    if (!exists(localPath)) fail(`${page} references missing local file: ${value}`);

    const hash = hashPart(value);
    if (hash) {
      const targetHtml = pageHtml.get(localPath) ?? (exists(localPath) ? read(localPath) : "");
      if (!new RegExp(`id=["']${hash}["']`).test(targetHtml)) {
        fail(`${page} links to missing hash target: ${value}`);
      }
    }
  }
}

const gallery = pageHtml.get("gallery.html");
const galleryImages = Array.from(gallery.matchAll(/<img src="(images\/(?:tiago-2026|gallery\/lika)\/[^"]+)"/g)).map((match) => match[1]);
if (galleryImages.length < 8) {
  fail(`gallery.html must include at least 8 curated images; found ${galleryImages.length}.`);
}

const music = pageHtml.get("music.html");
for (const href of ["collaborations.html", "contact.html"]) {
  if (!music.includes(`href="${href}"`)) fail(`music.html must route back to ${href}.`);
}

if (/webflow|jquery|formspree/i.test(`${siteCss}\n${siteJs}`)) {
  fail("New CSS/JS should not depend on Webflow, jQuery, or Formspree.");
}

if (/new assets/i.test(`${siteCss}\n${siteJs}`)) {
  fail("CSS/JS must not reference raw new assets paths.");
}

if (/\.role-line[^{]*{[^}]*display\s*:\s*none/i.test(siteCss) || /\.role-line[^{]*{[^}]*visibility\s*:\s*hidden/i.test(siteCss)) {
  fail("CSS must not hide .role-line.");
}

if (!/\.site-nav a\s*{[\s\S]*?min-height:\s*44px/.test(siteCss)) {
  fail("CSS must keep .site-nav a touch targets at least 44px.");
}

if (!/normalizePage/.test(siteJs) || /querySelector\(link\.getAttribute\("href"\)\)/.test(siteJs)) {
  fail("js/site.js must use page-level nav state and avoid querying non-hash links as selectors.");
}

if (!process.exitCode) {
  console.log("Static site verification passed.");
}
