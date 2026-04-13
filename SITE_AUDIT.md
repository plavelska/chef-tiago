# Site Audit

Assessment date: 2026-04-13

## Snapshot

- The site is a flat static export with no package manager, build system, or framework.
- It appears to have been published from Webflow on 2023-04-06.
- The repository is small enough to work on directly, but the generated markup and runtime add some maintainability friction.
- Total repository size is about 18 MB.
- The largest content bucket is `images/` at about 6 MB, followed by `fonts/` and `documents/`.

## What Is Good

- The site already has a clear visual personality: warm palette, editorial type, rounded UI, food photography, and some playful motion.
- Local assets are bundled in the repo, which makes the project portable and easy to iterate on from Codex/Codex CLI.
- The page surface is simple: three main public pages and two utility pages.
- The custom domain is already represented in `CNAME`, so a GitHub Pages style deployment remains straightforward.

## Notable Findings

### 1. Strong design direction, but weak content and metadata hygiene

- `index.html` uses a branded home page title, but there is no meta description and no richer social metadata.
- `services.html` still has the generic title `Elements`.
- `booking.html` still has a very plain title `Booking`.
- None of the HTML pages currently declare a `lang` attribute on the root `<html>` element.

Why it matters:
- This hurts search previews, sharing cards, and general polish.
- It also makes the site feel more like an export than a maintained brand property.

### 2. The site is Webflow-generated and partly brittle

- `js/webflow.js` is a large generated runtime bundle.
- `css/webflow.css` and `css/chef-tiago-borges.webflow.css` are generated stylesheets with many utility and interaction hooks.
- The HTML contains Webflow IDs, `data-w-*` attributes, and inline transform styles.

Why it matters:
- We can absolutely work on this directly, but structural refactors should be deliberate.
- Quick content and styling updates are easy; deep cleanup is better done in slices.

### 3. Contact and navigation details need cleanup

- The phone link in the footer uses `href="#"` instead of `tel:` on the main pages.
- The 404 page also links its "homepage" CTA to `#` instead of `index.html`.

Why it matters:
- This creates avoidable dead interactions on mobile and desktop.
- These are small fixes with immediate user-facing value.

### 4. The booking form works in principle, but the markup is messy

- `booking.html` posts to Formspree, which is a workable lightweight solution.
- The `<form>` tag contains duplicate `method` attributes.
- The form ID and names look export-generated (`wf-form-`, `data-name="date"`).
- Some field naming is inconsistent, for example `MAil`.

Why it matters:
- The form is usable, but it is brittle and harder to reason about than necessary.
- If we redesign the booking flow, this is a good place to simplify and re-label everything.

### 5. Some FAQ/accordion markup is semantically weak

- `services.html` uses `href="#"` accordion triggers.
- `services.html` repeats `id="prepay"` on multiple elements.

Why it matters:
- Duplicate IDs can create anchor and scripting issues.
- Anchor-based faux buttons are less accessible than real buttons or semantic disclosure patterns.

### 6. Copy quality is uneven

- There are several grammar, spelling, and phrasing issues across the marketing copy.
- The home page includes intentionally casual copy, which gives personality, but some sections still read more accidental than deliberate.
- Some labels are inconsistent, for example `BooK`.

Why it matters:
- Content editing is likely the highest-leverage first pass before any major structural rebuild.
- A sharper voice can preserve personality while sounding more premium and intentional.

### 7. External dependencies remain

- jQuery is loaded from a Webflow CDN.
- The form depends on Formspree.
- Some Webflow utility assets are referenced remotely.

Why it matters:
- The site is not fully self-contained at runtime.
- This is acceptable for now, but worth tracking if we later want stronger control or fewer third-party dependencies.

## Recommendation

Recommended path for the next phase:

1. Keep the site static for now and iterate in place.
2. Prioritize copy cleanup, metadata, contact links, and layout/content improvements before considering a tech migration.
3. Replace brittle interactions gradually rather than rewriting everything at once.
4. Once the content architecture is stable, decide whether to stay flat HTML or move to a small static-site framework.

## Suggested First Improvement Pass

- Rewrite the headline, service descriptions, and booking copy.
- Improve titles, meta descriptions, OG/Twitter metadata, and root `lang` attributes.
- Fix dead links and contact links.
- Clean up the booking form markup and labels.
- Review image usage and consider lighter modern formats later if performance becomes a priority.
