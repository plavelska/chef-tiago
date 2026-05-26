# Chef Tiago

Static website for chef-tiago.com.

This repo is being prepared for a full redesign and relaunch of Tiago Borges' online presence. The site should no longer behave like a private-chef booking funnel. The approved direction is a bold, image-led, one-page editorial profile for Tiago as a chef, executive chef, restaurant operator/coordinator, consultant, and music-aware hospitality collaborator.

## Current Status

The repository still contains the older Webflow-style export, including `services.html`, `booking.html`, generated CSS, and generated Webflow JavaScript.

That legacy code is reference material only. The approved relaunch path is to rebuild the public site from scratch with:

- `index.html`
- `css/site.css`
- `js/site.js`
- curated, optimized public images in a folder such as `images/tiago-2026/`

Inactive Webflow legacy files should be removed in the relaunch commit.

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

## Planned Verification

During the relaunch, add minimal dev-only Playwright checks for:

- Anchor navigation.
- Visible email and `mailto:` contact link.
- Absence of stale private-chef booking language.
- Desktop and mobile rendering sanity.
- Clean browser console.
- Progressive enhancement if JavaScript fails.
