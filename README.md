# Chef Tiago

Static website for chef-tiago.com.

This repo contains the local review build for the redesigned Tiago Borges website. The site no longer behaves like a private-chef booking funnel. The active prototype direction is a bold, image-led, multi-page editorial profile for Tiago as a chef, restaurant operator/coordinator, active consultant, and music-aware hospitality collaborator.

## Current Status

The current public surface is a clean multi-page static prototype built from plain HTML pages:

- `index.html`
- `about.html`
- `work.html`
- `collaborations.html`
- `gallery.html`
- `music.html`
- `contact.html`
- `css/site.css`
- `js/site.js`
- curated, optimized public images under `images/tiago-2026/`

The old `services.html`, `booking.html`, generated Webflow CSS, and generated Webflow JavaScript have been removed from the public surface.

## Source Of Truth

- `PLAN.md`: product, content, architecture, and review decisions.
- `DESIGN.md`: visual direction, layout rules, imagery rules, and anti-slop checks.
- `DEVELOPMENT.md`: local preview and implementation workflow.
- `AGENTS.md`: Codex/gstack instructions for this repo.

## Local Preview

From this folder, run:

```sh
./scripts/serve.sh
```

Then open:

```text
http://127.0.0.1:8000
```

More local workflow notes live in `DEVELOPMENT.md`.

## Working Rules

- Keep production static and boring: no framework, no build step, no client-side routing.
- Use expressive design, but keep the implementation explicit and easy to edit.
- Do not commit raw `new assets/` files.
- Commit only curated, optimized image derivatives.
- Keep Tiago's chef/operator/consultant credibility primary.
- Give music a dedicated page only as food, room rhythm, gatherings, and atmosphere. Do not let it read as a generic DJ portfolio.
- Use gstack `/qa` or `/qa-only` for browser QA after meaningful visual changes.

## Verification

Use the local verification script for:

- The full planned page set.
- Shared navigation and local asset references.
- Visible email and `mailto:` contact link.
- Absence of stale private-chef booking language.
- Absence of raw `new assets/` references and old Webflow runtime dependencies.

Run:

```sh
npm test
```

Use gstack `/qa` or `/qa-only` for browser-level visual review after meaningful changes.
