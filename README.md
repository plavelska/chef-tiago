# Chef Tiago

Static website for chef-tiago.com.

This repo contains the first local review build for the redesigned Tiago Borges website. The site no longer behaves like a private-chef booking funnel. The appro
on is a bold, image-led, one-page editorial profile for Tiago as a chef, executive chef, restaurant operator/coordinator, consultant, and music-aware hospitality collaborator.

## Current Status

The public site has been rebuilt as a clean static first version:

- `index.html`
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
- Keep Tiago's chef/operator credibility primary.
- Keep the music angle as atmosphere and selected collaboration, not a separate DJ brand.
- Use gstack `/qa` or `/qa-only` for browser QA after meaningful visual changes.

## Verification

Use the local verification script for:

- Anchor navigation.
- Visible email and `mailto:` contact link.
- Absence of stale private-chef booking language.
- Absence of old Webflow runtime dependencies.

Run:

```sh
npm test
```

Use gstack `/qa` or `/qa-only` for browser-level visual review after meaningful changes.
