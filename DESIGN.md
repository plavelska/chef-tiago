# Design Direction: Tiago Borges

Status: Draft source of truth
Last updated: 2026-05-26

## Visual Thesis

The site should feel like Ibiza night, food, music, and kitchen heat, held together by chef credibility.

It should be bold, image-led, warm, atmospheric, and slightly mischievous. It should not become a beige luxury restaurant template, a generic private-chef brochure, or a DJ portfolio.

## Identity Hierarchy

The first screen should be Tiago-first and editorial:

1. `Tiago Borges`
2. Role line: chef, executive chef, restaurant operator/coordinator, consultant
3. Strong image
4. Selected-project CTA

The visitor should understand quickly that Tiago is no longer positioned as a standard private chef booking product.

## Mood

Approved direction:

- Ibiza night / food / music
- More atmospheric than polite hospitality design
- Dark sections are allowed
- Nightlife cues and music-energy transitions are allowed
- Food, room, and music can sit in the same visual world

Guardrail:

- Chef and operator credibility stays first.
- Music is part of atmosphere and selected collaborations, not the primary profession.

## Layout Rules

Use poster rhythm over card grids.

Prefer:

- Large poster-like sections
- Asymmetric image and text placement
- Strong section-to-section contrast
- Selective marquee or graphic gestures
- Big visual moments with fewer words

Avoid:

- Generic three-card hospitality grids
- Centered SaaS-style hero layouts
- Stock restaurant template composition
- Over-polished luxury minimalism
- Repeating the same section mood too often

Implementation test:

If a section starts looking like a generic hospitality portfolio, push it back toward poster composition.

## Color

Use the existing warm palette as the base, but let the redesign introduce stronger night contrast.

Likely roles:

- Black / near-black: night, depth, footer, atmosphere
- Warm yellow: energy, food, sunlight, emphasis
- Green: grounding, restaurant/operator credibility
- Red: heat, small accents, motion, graphic punctuation
- White / cream: readable text and breathing room

Accessibility rule:

Dark sections must stay high-contrast. Body text, nav, CTA, and email must remain readable on mobile and bright outdoor screens.

Moodier low-contrast treatment is allowed only for image-led transitions with little or no essential text.

## Typography

Use the existing expressive serif and Work Sans assets as the starting point.

Rules:

- Serif display type should carry personality and editorial impact.
- Sans text should carry clarity, role lines, metadata, and contact details.
- Big type is preferred over many small labels.
- Keep line lengths short in atmospheric sections.
- Do not let playful type reduce readability.

## Imagery

Images are structural, not decorative.

Needed image roles:

- Hero image
- Tiago portrait
- Food detail
- Restaurant or room atmosphere
- Kitchen / work moment
- Optional music or night atmosphere

Rules:

- Use fewer, stronger images.
- Prefer specific food, hands, room, or personality over generic beauty.
- Do not over-darken food until it disappears.
- Keep imperfect human texture where it helps.
- Do not commit the untracked `new assets/` folder until a deliberate curation and optimization pass selects public images.

## Motion

Motion should feel like rhythm, not decoration.

Allowed:

- Subtle marquee or sliding text
- Section reveal or image motion if already supported cleanly
- Small graphic gestures that reinforce music, heat, or momentum

Avoid:

- Excessive decorative dots
- Motion that distracts from reading
- Heavy interaction rewrites before the static structure is stable

Respect reduced-motion preferences where practical during implementation.

## Navigation

Approved clean structure:

- Home
- Work
- Collaborations
- Contact

The user selected a clean URL break rather than preserving `services.html` and `booking.html` aliases.

QA must check for stale internal references to old filenames.

## Contact

First version is email-first.

Rules:

- Show Tiago's public email as visible text.
- Use a `mailto:` link.
- Keep the invitation short and personal.
- Surrounding copy must filter the right inquiries because there is no guided form.

Example CTA direction:

`Tell Tiago what you are building.`

## Collaborations

Approved collaboration lanes:

- Restaurant openings
- Concept and menu development
- Kitchen coordination
- Extraordinary events
- Pop-ups
- Culinary escapades
- Food + music moments

Food + music is allowed as a real collaboration lane, but must be framed as selected hospitality atmosphere, not as a separate DJ brand.

## Accessibility

Baseline rules:

- Add `lang` to HTML.
- Keep text contrast high, especially on dark sections.
- Ensure keyboard-visible links and buttons.
- Keep email visible as text, not only inside `mailto:`.
- Write useful alt text for meaningful images.
- Avoid essential text baked only into images.
- Preserve readable mobile spacing.

## Anti-Slop Checklist

Before shipping, check:

- Does the first screen clearly say who Tiago is now?
- Does any section still smell like private-chef booking?
- Did we use cards because they were easy, or because they were right?
- Does the page still feel like Tiago?
- Is the night/music direction visible without overpowering chef credibility?
- Is the email CTA obvious and readable?
- Are old `services.html`, `booking.html`, `Services`, `Booking`, and `Private Chef` references gone from the main journey?
