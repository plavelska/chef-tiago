# Chef Tiago

Static marketing site for chef-tiago.com.

This repository is currently a direct Webflow-style static export: plain HTML pages, generated CSS/JS, local fonts, local images, and a small set of supporting documents. That makes it easy to edit from Codex or Codex CLI without a build step.

## Current Shape

- Main pages: `index.html`, `services.html`, `booking.html`
- Utility pages: `404.html`, `401.html`
- Styling: `css/normalize.css`, `css/webflow.css`, `css/chef-tiago-borges.webflow.css`
- Behavior: `js/webflow.js`
- Assets: `images/`, `fonts/`, `documents/`
- Custom domain: `CNAME` -> `chef-tiago.com`

## Local Preview

From this folder, run:

```sh
./scripts/serve.sh
```

Then open `http://localhost:8000`.

More local workflow notes live in `DEVELOPMENT.md`.

## Working Approach

- Short term: edit the exported HTML/CSS directly so content and design can move quickly.
- Medium term: reduce brittle Webflow-specific markup and improve semantics, metadata, and accessibility.
- Long term: consider migrating to a more maintainable static-site setup only after the content structure stabilizes.

## Repo Notes

- Findings and structural notes live in `SITE_AUDIT.md`.
- Ongoing priorities and decisions live in `PROJECT_STATUS.md`.
- The generated `webflow.css` and `webflow.js` files are best treated carefully; they are workable, but they are not pleasant hand-authored code.
