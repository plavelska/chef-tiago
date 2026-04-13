# Development

This site is a plain static export, so the local environment can stay very small.

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

## Workflow

- Edit HTML, CSS, images, or documents directly in the repo.
- Refresh the browser to see changes.
- There is no build step.
- For quick verification from the terminal, use `curl http://127.0.0.1:8000`.

## Notes

- The site currently depends on some third-party runtime assets from Webflow CDN and Formspree.
- If we later want live reload, linting, or image processing, we can add a small Node-based toolchain, but it is not required for the current static setup.
