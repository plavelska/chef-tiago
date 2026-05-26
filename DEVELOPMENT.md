# Development

This site should stay a small static project. The current repository still contains the older Webflow export, but the approved relaunch direction is a clean vanilla implementation.

## Requirements

- Python 3

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

## Relaunch Workflow

The relaunch should replace the Webflow export with:

- `index.html`
- `css/site.css`
- `js/site.js`
- curated optimized images, likely under `images/tiago-2026/`

Production should remain static. Do not add a framework or build step unless a future plan explicitly changes that decision.

## Asset Rules

- Do not commit raw `new assets/` files.
- Select only approved public images.
- Resize and optimize images before committing them.
- Add useful alt text for meaningful images.
- Use explicit image dimensions where possible.
- Lazy-load non-critical images.

## Verification

Before launch, the repo should gain minimal dev-only Playwright checks. Those checks should cover:

- Anchor navigation targets.
- Visible email and working `mailto:` link.
- No stale `Private Chef`, `Booking`, `Services`, `booking.html`, or `services.html` references in the main journey.
- Desktop and mobile rendering sanity.
- Clean browser console.
- Usability when JavaScript is disabled or fails.

For visual QA, use gstack `/qa` or `/qa-only`.

## Notes

- The site currently depends on some third-party runtime assets from Webflow CDN and Formspree.
- The relaunch should remove those dependencies unless a deliberate replacement is approved.
- `PLAN.md` and `DESIGN.md` are the current sources of truth for what to build next.
