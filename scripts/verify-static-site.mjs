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
  if (!/<a class="header-contact" href="#contact"[^>]*>.*?Get in touch.*?<\/a>/.test(html)) fail(`${page} must include the footer-jump header contact button.`);
  if (!/<footer class="site-footer" id="contact">/.test(html)) fail(`${page} must expose contact details only in the footer anchor.`);
  if (!/<address class="footer-contact" aria-label="Contact details">/.test(html)) fail(`${page} must include structured footer contact details.`);
  if (!/href="mailto:tiagodoborges@gmail\.com/.test(html)) fail(`${page} must link the visible email with mailto.`);
  if (!/>tiagodoborges@gmail\.com</.test(html)) fail(`${page} must show the contact email as text.`);
  if (!/href="tel:\+34611271684"/.test(html) || !/>\+34 611 27 16 84</.test(html)) fail(`${page} must show the contact phone in the footer.`);
  if (!/<a class="footer-social" href="https:\/\/www\.instagram\.com\/tiagoisnotadj[^"]+" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">Instagram<\/a>/.test(html)) {
    fail(`${page} must include an accessible Instagram text link in the footer.`);
  }
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
    const expectedCurrentCount = page === "contact.html" ? 0 : 1;
    if (currentCount !== expectedCurrentCount) {
      fail(`${page} must have ${expectedCurrentCount} current nav item${expectedCurrentCount === 1 ? "" : "s"}.`);
    }
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
for (const href of ["collaborations.html", "#contact"]) {
  if (!music.includes(`href="${href}"`)) fail(`music.html must route back to ${href}.`);
}

const home = pageHtml.get("index.html");
if (!/<div class="hero-visual">[\s\S]*?<figure class="hero-portrait">[\s\S]*?<div class="hero-vinyl-knife"/.test(home)) {
  fail("index.html must keep the portrait and vinyl composition in the shared hero visual flow.");
}

for (const legacyRule of ["--home-hero-card-gap", "--home-hero-portrait-reserve", "--home-hero-max-height"]) {
  if (siteCss.includes(legacyRule)) fail(`CSS must not restore the legacy hero spacing rule: ${legacyRule}.`);
}

if (!/\.home-hero\s*{[\s\S]*?row-gap:\s*var\(--home-hero-panel-gap\)/.test(siteCss)) {
  fail("CSS must derive the hero-to-panel spacing from --home-hero-panel-gap.");
}

const togetherHeadingBlocks = Array.from(siteCss.matchAll(/\.together-card h2\s*{([^}]*)}/g));
if (!togetherHeadingBlocks.length || !/font-size:\s*var\(--type-section-xl\)/.test(togetherHeadingBlocks[0][1])) {
  fail("CSS must derive the together-card headline from --type-section-xl.");
}
if (togetherHeadingBlocks.slice(1).some((match) => /font-size:/.test(match[1]))) {
  fail("Responsive CSS must not override the together-card headline size.");
}

if (!/\.home-hero h1\s*{[^}]*font-size:\s*var\(--type-home-hero\)/.test(siteCss)) {
  fail("CSS must derive the homepage hero headline from --type-home-hero.");
}

if (/webflow|jquery|formspree/i.test(`${siteCss}\n${siteJs}`)) {
  fail("New CSS/JS should not depend on Webflow, jQuery, or Formspree.");
}

if (/new assets/i.test(`${siteCss}\n${siteJs}`)) {
  fail("CSS/JS must not reference raw new assets paths.");
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
