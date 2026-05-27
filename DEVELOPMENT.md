# Development

This site should stay a small static project. The current local review build is a clean vanilla implementation.

## Requirements

- Python 3
- Node.js, for the lightweight verification script

## Preview Locally

Run:

```sh
./scripts/serve.sh
```

By default the site is served at:

```text
http://127.0.0.1:8000
```

You can choose a different port:

```sh
./scripts/serve.sh 8080
```

## Current Workflow

- Start the preview server.
- Edit files directly in the repo.
- Refresh the browser to see changes.
- For quick terminal verification, use `curl http://127.0.0.1:8000`.

## Relaunch Structure

The relaunch build uses:

- `index.html`
- `about.html`
- `work.html`
- `collaborations.html`
- `gallery.html`
- `music.html`
- `contact.html`
- `css/site.css`
- `js/site.js`
- curated optimized images under `images/tiago-2026/`

Production should remain static. Do not add a framework or build step unless a future plan explicitly changes that decision.

## Asset Rules

- Do not commit raw `new assets/` files.
- Select only approved public images.
- Resize and optimize images before committing them.
- Add useful alt text for meaningful images.
- Use explicit image dimensions where possible.
- Lazy-load non-critical images.

## Verification

Run:

```sh
npm test
```

The current script checks:

- The full planned page set.
- Shared navigation and local page/image references.
- Visible email and working `mailto:` link.
- No raw `new assets/` references.
- No stale `Private Chef`, `Booking`, `Services`, `booking.html`, or `services.html` references in the public journey.
- No old Webflow runtime dependencies.

For visual QA, use gstack `/qa` or `/qa-only`.

## Notes

- The public site no longer depends on Webflow runtime assets or Formspree.
- `PLAN.md` and `DESIGN.md` are the current sources of truth for what to refine next.
