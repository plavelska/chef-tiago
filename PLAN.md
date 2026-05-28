<!-- /autoplan restore point: /Users/lolalu/.gstack/projects/plavelska-chef-tiago/main-autoplan-restore-20260527-181254.md -->
# Plan: Tiago Borges Website Redesign

Generated: 2026-05-08
Status: Draft
Repo: `plavelska/chef-tiago`

## Purpose

This plan is the working source for redesigning Tiago Borges' website in small, reviewable increments.

The site should no longer present Tiago primarily as a private chef or use booking as the main goal. It should become a bold, image-led professional profile for a trained chef, executive chef, restaurant coordinator, hospitality operator, and restaurant business consultant.

The new site should keep Tiago's character: direct, warm, playful, food-obsessed, music-aware, and not corporate. It should feel more mature than the current site without sanding off the personality.

## Current Direction Override

Status: locked for the next working prototype on 2026-05-27.

This section supersedes older review notes that treated the launch claims sheet, `Gallery` route, image permissions, and standalone music page as unresolved.

For implementation, this section is authoritative. Older one-page, `#atmosphere`-only, no-standalone-music, and unresolved-claims notes are historical context unless repeated here.

- Build the next prototype as a small multi-page editorial site: `Home`, `About`, `Work`, `Collaborations`, `Gallery`, `Music`, and `Contact`.
- `Gallery` is the route name. Do not keep the older `Gallery / Notes` or `Gallery / Journal` ambiguity.
- `Music` gets its own page and should be visibly present. It must read as food, room rhythm, gatherings, atmosphere, and hospitality sensitivity, not as a generic DJ portfolio.
- Do not focus current-work positioning on the Azores. Faial/Azores remains origin and background context only.
- Mira and Bottega il Buco are cleared for public use.
- Consulting is active and should be treated as a real work lane.
- The public email remains visible as `tiagodoborges@gmail.com`.
- Image usage is cleared. Select, optimize, and convert public derivatives from `new assets/`; do not commit the raw source folder.
- Approved visual reference: `/Users/lolalu/.gstack/projects/plavelska-chef-tiago/designs/multi-page-editorial-sitemap-20260527-173551/round-2/variant-B-remix.png`.
- Rejected visual reference: `/Users/lolalu/.gstack/projects/plavelska-chef-tiago/designs/multi-page-editorial-sitemap-20260527-173551/round-2/variant-B-remix-cleaner.png`, because it reduced too much personality.
- Implementation should borrow the approved remix's poster energy, handmade marks, blue portrait field, yellow work panel, coral CTA, blue contact card, gallery/image rhythm, and visible music route while keeping text readable and the page usable.

### Current Prototype Job

The prototype's primary job is proof-first referral conversion: make a serious restaurant owner, operator, collaborator, or producer understand within 30 seconds that Tiago is credible for restaurant/opening support, active consulting, and selected food-led experiences.

Priority hierarchy:

1. Restaurant/opening support and consulting.
2. Extraordinary food-led events and collaborations.
3. Public profile, press context, Gallery, and Music as proof of taste and room sense.

Page roles:

- `Home`: fastest proof of who Tiago is, what he builds, and why to contact him.
- `About`: origin and professional arc without making Azores the current-work focus.
- `Work`: proof board for Mira, Bottega il Buco, consulting, restaurant openings, menu/concept work, and kitchen coordination.
- `Collaborations`: filtered invitation for selected projects, led by restaurant/opening support and extraordinary food-led events.
- `Gallery`: image proof from optimized `new assets/` derivatives, not a dumping ground.
- `Music`: hospitality rhythm page. It should show how music shapes rooms, gatherings, and food experiences without implying a generic DJ brand.
- `Contact`: visible email and a short project-fit prompt.

Copy governance:

- Use the user-cleared Mira and Bottega permission, but avoid over-specific venue titles unless the exact wording is confirmed in the working copy.
- Prefer durable positioning: `chef / operator / consultant` and `builds kitchens, menus, teams, and rooms`.
- Current roles prove the positioning; they should not become the whole positioning.

Content-first update on 2026-05-28:

- The supplied poster mood board is now the guide for content tone and hierarchy before further visual work.
- Use its vocabulary in public copy: `chef + executive chef`, `restaurant operator`, `culinary consultant`, `food culture, people and good energy`, `from the islands to the table`, `restaurant openings`, `menus and concepts`, `kitchen coordination`, `extraordinary events`, and `music, moments, memories`.
- Remove internal/prototype-facing language from public pages.
- Keep the copy punchy, concrete, and invitation-led; each page should feel like a confident poster, not a planning document.

### Implementation Source Of Truth

Files to build for the working prototype:

```text
index.html
about.html
work.html
collaborations.html
gallery.html
music.html
contact.html
css/site.css
js/site.js
images/tiago-2026/*
```

Navigation order:

```text
Home -> About -> Work -> Collaborations -> Gallery -> Music -> Contact
```

Priority treatment:

- `Work` and `Collaborations` must be visually stronger than `Gallery` and `Music`.
- `Music` can sit in the nav, but it must not be the primary CTA, first proof point, or profession label.
- Home first screen order on desktop and mobile: `Tiago Borges`, role line, proof strip, primary CTA, portrait/image.
- The role line must remain visible on mobile.

Proof module contract:

Each `Work` proof item should include:

- venue or context
- role or contribution
- what Tiago did
- why it matters
- image, link, or caption evidence when available
- confidence level: `confirmed`, `public reference`, or `draft wording`

Minimum page modules:

| Page | First-screen job | Required modules |
|------|------------------|------------------|
| Home | Prove credibility and invite the right inquiry in 30 seconds | hero, role line, proof strip, work CTA, image, contact cue |
| About | Explain the person and path without shifting current-work focus to Azores | origin note, professional arc, portrait/image, return CTA |
| Work | Carry the serious operator/consulting proof | proof cards for Mira/Bottega/consulting/openings, work lanes, CTA |
| Collaborations | Filter selected opportunities | two primary lanes, secondary lanes, fit/not-fit copy, project prompt |
| Gallery | Prove taste through images | 8-12 optimized images, short captions, categories or rhythm sections |
| Music | Prove room sense and hospitality rhythm | room-rhythm POV, food/gathering use cases, one atmosphere/media-style artifact, CTA back to collaborations/contact |
| Contact | Convert without a form | visible email, `mailto:`, prompts for what/where/support needed, fallback copy for mail-app failure |

Static state rules:

| State | User should see |
|-------|-----------------|
| Image missing or slow | Reserved color/image panel, useful alt/caption context, no layout collapse |
| JavaScript unavailable | All nav links and email links still work |
| Mail app does not open | Email remains visible and selectable with a short fallback note |
| Gallery has fewer than 8 good images | Keep route draft-only or fold into Home until enough proof exists |
| Music content is thin | Keep page concise and route back to Work/Collaborations instead of padding |
| Mobile nav crowded | Use a wrapping or horizontally scrollable pill nav before adding a heavy menu system |

Responsive rules:

- Do not hide the role line at mobile/tablet widths.
- Keep touch targets at least 44px.
- Oversized display type must scale with `clamp()` and avoid horizontal overflow.
- Poster grids collapse into intentional stacked chapters: heading, proof, image, CTA.
- Gallery uses mixed but controlled image ratios; captions stay readable below images on mobile.
- Contact email must remain readable and selectable on small screens.

Accessibility rules:

- Keep `lang`, skip link, landmarks, and visible focus states.
- Body text contrast target is WCAG AA: 4.5:1 or better.
- Large decorative display text can be expressive, but essential copy must stay readable.
- Heading order must remain logical on every page.
- Meaningful images get specific alt text; decorative marks are hidden from assistive tech.
- Respect reduced-motion preferences.

### Proof And Claims Source Table

The public site can use cleared Mira/Bottega/image permission, but implementation should still avoid brittle title inflation. Internal confidence labels are for editing only; do not print `confirmed`, `public reference`, or `draft wording` labels on the public site.

| Claim or proof | Public treatment | Status | Implementation rule |
|----------------|------------------|--------|---------------------|
| Tiago is a chef/operator/consultant | Primary positioning | Confirmed by user direction | Use across header, hero, Work, and Contact |
| Mira | Named proof item | Cleared by user | Use as current/work proof; avoid exact public title unless the working copy is exact |
| Bottega il Buco | Named proof item | Cleared by user | Use as experience/proof; avoid implying ownership or a precise title not written in copy |
| Consulting is active | Primary work lane | Confirmed by user | Present as restaurant/opening support and consulting, not as vague availability |
| Public email | Visible contact | Confirmed by user | Keep `tiagodoborges@gmail.com` visible and linked with `mailto:` |
| `17 years` style stat | Optional atmosphere/proof | Needs exactness check | Remove or soften unless exact years remain defensible at launch |
| `friends and clients` strip | Risky generic proof | Needs exactness check | Replace with verified proof/context labels or omit |
| Music | Dedicated supporting page | Confirmed by user | Frame as room rhythm, food-led gatherings, and hospitality sense; not DJ positioning |

### Shared Shell Contract

The prototype stays hand-authored flat HTML. That is acceptable only if every page follows one shared shell:

- Same header/nav order on every page: `Home`, `About`, `Work`, `Collaborations`, `Gallery`, `Music`, `Contact`.
- Same visible role line on every page and at every breakpoint.
- Same visible email contact cue in the footer or page CTA.
- Current page state is set with `aria-current="page"` on page links, not anchor observers.
- In-page hash links are allowed only where the target exists on that page.
- `site.js` must ignore non-hash links when doing any section observation.
- No contact form in this prototype. Contact remains email-first with fallback copy.

### Verification Contract

`npm test` must fail until the multi-page prototype exists and must validate more than `index.html`.

Required static checks:

- All planned pages exist: `index.html`, `about.html`, `work.html`, `collaborations.html`, `gallery.html`, `music.html`, `contact.html`.
- Every page declares `lang`, loads `css/site.css` and `js/site.js`, has a skip link, a `<main id="main">`, metadata, and the visible email.
- Shared nav links are consistent across pages and point to real local pages.
- Local `href` and `src` values resolve, excluding `mailto:`, external URLs, phone links, and valid same-page hashes.
- No public page references raw `new assets/` paths.
- No old public framing leaks: `Private Chef`, `Booking`, `Services`, `booking.html`, `services.html`, `Formspree`, `Webflow`, or `jquery`.
- CSS must not hide `.role-line` at mobile/tablet sizes and nav touch targets must stay at least `44px`.
- Gallery uses optimized public derivatives under `images/tiago-2026/`.
- Music page exists and routes back to `Work`, `Collaborations`, or `Contact`.

## Historical Plan Context

The sections below preserve the research and prior review history that led here. They are non-authoritative where they conflict with `Current Direction Override`, `Implementation Source Of Truth`, `Proof And Claims Source Table`, `Shared Shell Contract`, or `Verification Contract`.

### Current Situation

### What Changed

- Tiago is no longer positioned as a private chef.
- He returned to Bottega il Buco last summer.
- From this year, he is Executive Chef of the newly opened Mira Restaurant / Mira Lounge in Ibiza.
- He still wants an online presence, but not a booking funnel.
- He is open to selected projects: extraordinary events, innovative concepts, restaurant projects, consulting, and culinary escapades.
- He is a music lover and occasionally plays music at parties. This should be present, but not oversized.

### Existing Site Problem

The current site still says `Private Chef 24/7`, has a `Booking` page, and frames the user journey around service booking. That is now wrong.

The existing site does have assets worth keeping:

- Bold warm palette.
- Strong food photography.
- Characterful typography.
- Playful motion and graphic accents.
- Personal, non-corporate tone.

The issue is not lack of personality. The issue is that the identity, structure, and calls to action no longer match Tiago's actual professional life.

## Public References

Use these as public background, but verify all current-role wording directly with Tiago before final launch copy.

- Authentic Travel PR article on Bottega il Buco:
  https://www.authentictravelpr.com/new-yorks-il-buco-group-open-bottega-il-buco-in-ibiza/
- Mira Lounge Ibiza:
  https://www.miraloungeibiza.com/

Relevant public background from the Bottega article:

- Tiago is Portuguese, from Faial in the Azores.
- He studied at Escola de Formacao Turistica e Hoteleira in the Azores.
- He trained with chefs including Mark Nielson and Josh DeChellis.
- He worked through the opening of Josh DeChellis' Juniper Hill in New Jersey.
- He was part of the opening team at Bottega il Buco in Ibiza.
- His cooking is described around local ingredients, imported il Buco staples, fish crudos, pastas, market-driven entrees, and desserts.

Relevant public background from Mira:

- Mira is presented publicly as a cocktail bar and lounge in San Miguel, Ibiza.
- It features artisanal cocktails, wines, small plates, evening programming, and a hedonistic atmosphere.
- It is attached to Gathering art gallery.

## Positioning

Recommended core positioning:

> Tiago Borges is a professionally trained chef, executive chef, restaurant coordinator, and hospitality consultant based in Ibiza.

Shorter public-facing version:

> Chef. Executive Chef. Restaurant operator. Consultant. Music lover.

More characterful version:

> Tiago Borges builds food, teams, rooms, and nights people remember.

The site should signal:

- serious culinary background
- restaurant leadership
- taste and coordination
- openness to unusual projects
- confidence without stiffness

## Target Visitors

The site should serve these visitors:

- Restaurant owners or operators looking for culinary direction, opening support, or operational advice.
- Event producers looking for a chef who understands food, room energy, and atmosphere.
- Hospitality collaborators with a concept, pop-up, dinner series, or unusual culinary idea.
- Press, partners, and people who need a concise professional profile.
- Friends-of-friends, island people, and creative operators who have heard Tiago's name and want to understand what he does now.

## Site Goals

Primary goal:

- Make the right people contact Tiago for selected projects.

Secondary goals:

- Reposition Tiago away from private chef bookings.
- Show credibility through real restaurant work.
- Preserve the site's bold personality.
- Make the site feel current again.
- Create a structure that can evolve as Mira and future restaurant projects become public.

Non-goals:

- Do not build a generic private-chef booking site.
- Do not over-explain every dish or service.
- Do not make the site feel like a restaurant group corporate profile.
- Do not turn the music angle into a separate DJ brand unless Tiago wants that later.

## Recommended Site Structure

### Navigation

Recommended top-level navigation:

- `Home`
- `About`
- `Current Work`
- `Collaborations`
- `Gallery`
- `Contact`

Tighter version if we want fewer nav items:

- `Home`
- `Work`
- `Collaborations`
- `Contact`

The tighter version is probably better for the first redesign. The full version can happen once content is confirmed.

### Page 1: Home

Purpose:

- Establish the new identity immediately.
- Make the site feel current, visual, and alive.
- Lead people toward contact for selected projects.

Recommended sections:

1. Hero

   `Tiago Borges`

   Supporting line:

   `Chef, executive chef, restaurant coordinator, and consultant based in Ibiza.`

   Alternate line:

   `Building kitchens, menus, teams, and nights with a point of view.`

2. Current focus

   Mention Mira and Bottega in a concise, current way.

   Draft copy direction:

   `Tiago is currently Executive Chef at Mira in San Miguel, Ibiza, and continues to bring his experience from Bottega il Buco into a wider world of food, hospitality, and atmosphere.`

   Needs Tiago confirmation before final use.

3. Point of view

   Short manifesto, no fluff.

   Themes:

   - simple food, strong taste
   - local ingredients
   - serious kitchens without ego
   - hospitality as coordination, not just cooking
   - music and room energy as part of the experience

4. Selected collaborations

   Three to five project types:

   - restaurant consulting
   - menu and concept development
   - kitchen coordination
   - extraordinary events
   - culinary escapades

5. Image-led proof

   Use strong photography, not generic feature cards.

   Possible modules:

   - food close-ups
   - kitchen action
   - portrait
   - restaurant atmosphere
   - table / service moments

6. Final contact CTA

   Draft copy:

   `Extraordinary event, strange concept, restaurant idea, or culinary escapade? Tiago is all ears.`

### Page 2: About

Purpose:

- Explain the professional story behind the personality.

Content:

- Faial / Azores origin.
- Culinary school and training.
- Work with Josh DeChellis and connection to il Buco.
- Bottega il Buco opening team.
- Ibiza restaurant leadership.
- Current Executive Chef role at Mira.
- Music lover note.

Tone:

- Confident, human, direct.
- Keep a little wit, but make the biography credible.

Possible section title:

- `From Faial to Ibiza`
- `Chef, operator, listener`
- `No drama, strong taste`

### Page 3: Current Work

Purpose:

- Show what Tiago is doing now.
- Replace the outdated private chef frame with active professional context.

Sections:

- `Mira`
- `Bottega il Buco`
- `Future restaurant projects`

Each entry should have:

- role
- place
- what Tiago does there
- public link, if relevant
- image or atmosphere cue

Important:

- Current work needs direct confirmation from Tiago.
- Avoid implying ownership or official role details that are not approved.

### Page 4: Collaborations

Purpose:

- Convert the right opportunities without becoming a booking site.

This replaces `Services`.

Suggested title:

- `Collaborations`
- `Selected Projects`
- `Work With Tiago`

Suggested intro:

`Tiago is not taking standard private-chef bookings. He is open to selected projects with taste, momentum, and a little electricity.`

Collaboration types:

- Restaurant consulting
- Openings and pre-opening support
- Concept and menu development
- Kitchen coordination and team workflow
- Extraordinary private or public events
- Pop-ups and culinary escapades
- Food and music-led experiences

CTA:

`Tell Tiago what you are building.`

### Page 5: Gallery / Journal

Purpose:

- Let images do the emotional work.
- Keep the site fresh as new images arrive.

Possible formats:

- `Gallery`
- `Notes`
- `Field Notes`
- `Moments`

Content types:

- dishes
- tables
- portraits
- kitchens
- restaurants
- Ibiza atmosphere
- occasional music / party moments

Recommendation:

- Start as a simple gallery.
- Later, evolve into a light journal if Tiago has updates worth posting.

### Page 6: Contact

Purpose:

- Invite selected opportunities.
- Remove the old booking-inquiry feeling.

Recommended contact options:

- name
- email
- project type
- message

Project type options:

- restaurant consulting
- concept / opening
- event
- pop-up
- press
- other

Recommended copy:

`Tiago is open to selected projects: extraordinary events, innovative concepts, restaurant work, and culinary escapades. If that sounds like what you are building, get in touch.`

## Design Direction

The redesign should be bold, image-led, and editorial.

Keep:

- large food photography
- expressive serif display type
- warm color
- playful confidence
- strong contrast
- personal tone

Reduce:

- repeated decorative dots
- generic service blocks
- booking funnel language
- accidental roughness in copy
- Webflow-export clutter where practical

Visual principles:

- Photography first.
- Big type, fewer words.
- A few strong graphic gestures instead of many small decorations.
- More restaurant-world maturity.
- More room, texture, and atmosphere.
- Less "private chef flyer", more "chef with a world."

Possible aesthetic label:

`Mediterranean editorial with kitchen heat.`

## Design-Shotgun Feedback

Source:

- `/design-shotgun` comparison board generated 2026-05-26.
- Artifacts live outside the repo at `~/.gstack/projects/plavelska-chef-tiago/designs/homepage-shotgun-final-20260526-143845/`.
- No variant was submitted as a final approval; the feedback should guide the next design pass rather than lock an `approved.json`.

Ratings:

| Variant | Concept | Rating | Keep | Avoid |
|---------|---------|--------|------|-------|
| A | Ibiza Night Editorial | 2/5 | Side menu, modern rhythm, music as a theme | Too much black, fire/red-light drama, ordinary typography |
| B | Market Heat | 3/5 | Color blocking, bold color clashes, bright layout, bright food imagery | Standardized/old-fashioned feel, boring typography, too Italian, uncreative CTA elements |
| C | Music And Table | 2/5 | Best overall tone, small illustrations, better typography direction | Traffic-light colors, typography still not bold enough, dramatic imagery is wrong for Tiago |

Autoplan design constraints from this round:

- Use B as the structural baseline for brightness, food energy, and color blocking.
- Pull C's softer tone and illustrative detail into the next direction.
- Borrow A's side-menu/music cue only if it stays light and modern.
- Avoid heavy black, fire imagery, red club lighting, generic restaurant template layouts, Italian-tricolor palettes, and conventional magazine typography.
- Push typography bolder, stranger, and more distinctive while keeping chef/operator credibility.

## Content Voice

Voice should feel:

- direct
- warm
- slightly mischievous
- experienced
- allergic to bland hospitality language

Avoid:

- luxury boilerplate
- private-chef availability language
- too much "bespoke experience" wording
- corporate consultancy language

Keep:

- "all ears"
- "culinary escapades"
- music references
- the sense that Tiago is easygoing but serious in the kitchen

## Image Strategy

Images are a main pillar of the redesign.

Current known asset sources:

- existing `images/` folder
- untracked `new assets/` folder
- `new assets/Old images/`
- `new assets/STEVIE FOOD SHOTS WEB/`

Needed image categories:

- hero image
- Tiago portrait
- food detail
- table / room atmosphere
- kitchen or working moment
- Mira / Bottega context, only if approved
- music / night atmosphere, optional and subtle

Image selection rules:

- Avoid stock-like images.
- Prefer images with specific food, hands, room, or personality.
- Do not over-darken images so much that the food disappears.
- Use fewer, stronger images.
- Keep some imperfect human texture.

## Technical Strategy

Current repo is a flat static Webflow export.

Working decision:

- Keep the site static for now.
- Edit directly in HTML/CSS in small increments.
- Do not migrate frameworks until the new content structure is stable.

Implementation notes:

- Repurpose `services.html` as `collaborations.html` or rebuild it as `work.html`.
- Repurpose `booking.html` as `contact.html`.
- Update nav labels and URLs.
- Preserve useful CSS patterns, but gradually remove unused Webflow-specific clutter.
- Improve metadata, accessibility, and contact links during the redesign.

## Alternatives Considered

### Approach A: Minimal Content Pivot

Summary:

- Keep the current page structure and visual system.
- Replace private-chef copy with current-role copy.
- Rename booking to contact.

Effort: S
Risk: Low

Pros:

- Fastest path.
- Fewest file changes.
- Good if Tiago needs the site back online quickly.

Cons:

- Still feels like the old site wearing new text.
- Does not fully reflect the role change.
- Leaves structural and design debt in place.

### Approach B: Image-Led Chef Profile

Summary:

- Rebuild the structure around Tiago as a chef/operator/consultant.
- Keep static HTML.
- Create a stronger homepage plus focused `About`, `Work`, `Collaborations`, and `Contact` paths.

Effort: M
Risk: Medium

Pros:

- Best match for Tiago's current situation.
- Keeps character while improving credibility.
- Gives us a clear path for incremental releases.

Cons:

- Requires content confirmation.
- Requires real image selection.
- Some Webflow markup will need careful editing.

### Approach C: Full Editorial Portfolio

Summary:

- Treat the site as a chef magazine / portfolio with strong photography, journal entries, project pages, and a custom visual system.

Effort: L
Risk: Medium to High

Pros:

- Best long-term brand expression.
- Can feel distinctive and memorable.
- Strong platform for future restaurant projects.

Cons:

- Needs more content and images.
- Takes longer.
- Easy to over-design before the message is settled.

## Recommended Approach

Choose Approach B: Image-Led Chef Profile.

Reason:

- It matches the real role change.
- It preserves the existing personality.
- It can ship incrementally.
- It avoids premature framework migration.

## Increment Plan

### Increment 1: Plan and Content Alignment

Goal:

- Get agreement on the new site structure and the facts Tiago wants public.

Tasks:

- Add this `PLAN.md`.
- Confirm role wording with Tiago.
- Confirm whether Bottega and Mira can be named prominently.
- Confirm whether "Executive Chef" is the exact public title for Mira.
- Confirm whether music should be subtle or explicit.
- Select first image set from existing and new assets.

Done when:

- `PLAN.md` is approved enough to guide copy and structure.

### Increment 2: Content Draft

Goal:

- Produce copy before touching layout heavily.

Tasks:

- Draft new homepage copy.
- Draft About copy.
- Draft Collaborations copy.
- Draft Contact copy.
- Create a short "facts to verify" list for Tiago.

Done when:

- Copy exists in Markdown and can be reviewed without reading HTML.

### Increment 3: Sitemap and HTML Restructure

Goal:

- Move the static site away from booking/private-chef structure.

Tasks:

- Update navigation.
- Replace `Booking` with `Contact`.
- Replace `Services` with `Collaborations` or `Work`.
- Remove or rewrite private-chef-specific copy.
- Fix metadata and `lang` attributes.
- Fix dead `href="#"` links.

Done when:

- The site no longer presents Tiago as primarily bookable as a private chef.

### Increment 4: Visual System Pass

Goal:

- Preserve character but make the design more mature and coherent.

Tasks:

- Define type scale.
- Define color hierarchy.
- Choose image crops and hero treatment.
- Reduce decorative noise.
- Improve mobile spacing.
- Improve CTA styling.

Done when:

- The site feels bold, image-led, and current.

### Increment 5: Image Integration

Goal:

- Make photography carry the site.

Tasks:

- Curate image shortlist.
- Rename/organize selected assets.
- Optimize image sizes.
- Add descriptive alt text.
- Use responsive image variants where useful.

Done when:

- The site has a strong first visual read on desktop and mobile.

### Increment 6: QA and Launch Prep

Goal:

- Make it ready to put online.

Tasks:

- Test all pages locally.
- Check mobile layouts.
- Check contact form or mail links.
- Verify external links.
- Check metadata.
- Run a final design review.

Done when:

- Site is ready to publish.

## Open Questions For Tiago

- What is the exact title Tiago wants to use for Mira?
- Should the site say `Mira Restaurant`, `Mira Lounge`, or another official name?
- How should Bottega be described now: returned to, continuing with, formerly part of, consulting for, or something else?
- Is he actively available for restaurant consulting?
- Is he open to private events at all, or only extraordinary / selected ones?
- Should the CV PDF stay on the site?
- Which email or phone number should be public?
- Should music appear as a small personal note or as part of the work offering?
- Are there any projects that should not be mentioned publicly yet?
- Which images are approved for public use?

## Success Criteria

The redesign is successful if:

- A visitor understands in 10 seconds that Tiago is no longer a private chef booking product.
- The site makes Tiago look current, experienced, and selective.
- The site invites the right inbound opportunities without sounding desperate for work.
- The images feel central, not decorative.
- The tone still feels like Tiago.
- The site remains easy to edit from Codex.

## Immediate Assignment

Before the first implementation pass, get Tiago to answer the role and availability questions above.

The first concrete build task after that:

1. Draft the new homepage copy in Markdown.
2. Select 8 to 12 candidate images.
3. Rename `booking.html` conceptually to `contact`.
4. Rename `services.html` conceptually to `collaborations`.
5. Rebuild the homepage message around current work and selected projects.

## Working Notes

- Do not commit or upload machine-local `.agents/skills/gstack*` symlinks.
- Do not touch untracked image assets until there is an agreed image-selection pass.
- Keep all future planning updates in this file unless a more specific design doc is created.
- If a new `DESIGN.md` is created later, this file remains the product/content plan and `DESIGN.md` becomes the visual system source.

## Engineering Review Decisions

Status: Approved direction from `/plan-eng-review`
Date: 2026-05-26

The redesign should be implemented as a full vanilla static relaunch, not as a Webflow cleanup.

### Accepted Architecture

- Rebuild the public site from scratch with vanilla HTML, CSS, and JavaScript.
- Use a one-page editorial structure with anchor navigation.
- Keep production simple: `index.html`, `css/site.css`, and `js/site.js`.
- Use the current Webflow export only as temporary reference material while rebuilding.
- Delete inactive Webflow legacy files in the relaunch commit instead of preserving backward compatibility.

### Route Model

Use one public page:

```text
/
├── #top
├── #work
├── #point-of-view
├── #collaborations
├── #atmosphere
└── #contact
```

The site is currently offline, so old URL compatibility is not required for first relaunch.

### Asset Pipeline

- Keep raw `new assets/` files out of git.
- Curate a small public image set into a repo folder such as `images/tiago-2026/`.
- Commit only web-ready derivatives.
- Give meaningful images useful alt text.
- Set image width and height attributes to reduce layout shift.
- Lazy-load non-critical images.

### Performance Budget

The site should stay bold and image-led, but image handling must be deliberate.

Implementation rules:

- Hero image should be optimized before commit.
- Non-critical images should use `loading="lazy"`.
- Decorative images should not carry essential copy.
- Public image derivatives should be resized for their actual layout role.
- Large source archives should never be committed accidentally.

### Verification Plan

The runtime site remains static, but the repo should gain dev-only verification.

Add a minimal Playwright setup during implementation to check:

- Anchor navigation targets exist.
- Contact email is visible as text.
- Contact link uses `mailto:`.
- No old booking/private-chef language remains in the main journey.
- Desktop and mobile layouts render without obvious breakage.
- Browser console is clean.
- The page remains usable if JavaScript fails.

Continue using gstack `/qa` or `/qa-only` for browser-level visual and interaction review.

Primary QA artifact:

`~/.gstack/projects/plavelska-chef-tiago/lolalu-main-eng-review-test-plan-20260526-135235.md`

### What Already Exists

- `scripts/serve.sh` already provides a local static preview server.
- Existing fonts can support the new identity without adding external font dependencies.
- Existing committed images can serve as fallback material if the new image curation is delayed.
- Existing Webflow pages and CSS are useful as reference, but should not shape the new implementation.
- `PLAN.md` is the content and product plan.
- `DESIGN.md` is the visual system source of truth.

### Not In Scope

- No Webflow compatibility layer.
- No old `booking.html` or `services.html` aliases for first relaunch.
- No booking form in the first launch.
- No standalone music/DJ section in the first launch.
- No JavaScript single-page app routing.
- No Vite, npm build step, or static generator for production.
- No external image CDN for the first launch.
- No raw `new assets/` commit.

### Test Diagram

```text
CODE PATHS                                  USER FLOWS
[+] index.html                              [+] First impression
  ├── Hero identity is current                ├── Tiago is not framed as private chef
  ├── Anchor nav targets exist                ├── Visitor understands selected projects
  ├── Email CTA is visible                    └── Contact works without a form
  ├── Atmosphere section supports the food story
  └── Old booking language removed

[+] css/site.css                            [+] Responsive visual system
  ├── Mobile layout does not collapse         ├── Desktop poster rhythm holds
  ├── Dark section contrast passes            ├── Mobile type remains readable
  └── Focus states visible                    └── Images support rather than bury copy

[+] js/site.js                              [+] Progressive enhancement
  ├── No console errors                       ├── Site works if JS fails
  ├── Reduced motion respected                └── Motion never blocks content
  └── Anchor behavior remains usable
```

### Failure Modes

- Stale role language: test for old booking and private-chef framing.
- Broken contact path: test visible email and `mailto:` behavior.
- Slow image load: optimize curated derivatives and lazy-load lower-priority images.
- Mobile collapse: test small viewport layout before launch.
- JavaScript dependency creep: ensure the site remains readable with JS disabled.
- Accessibility regression: verify contrast, focus states, alt text, and reduced-motion handling.
- Music positioning drift: verify music appears as atmosphere or selected collaboration texture, not as a second profession.

### Parallelization

Sequential implementation is recommended for the first relaunch because the primary files overlap.

Possible split after the initial structure lands:

```text
Lane A: content and HTML structure -> index.html
Lane B: image curation and optimization -> images/tiago-2026/
Lane C: Playwright verification -> package/dev test files

Order: build Lane A first, run Lane B in parallel once image choices are known, add Lane C before launch.
```

### Completion Summary

- Step 0: Scope Challenge: scope accepted as full vanilla relaunch.
- Architecture Review: one major decision resolved, one-page editorial route model.
- Code Quality Review: one major decision resolved, plain static file structure.
- Test Review: one gap resolved, dev-only Playwright checks plus gstack QA.
- Performance Review: one gap resolved, practical image budget and optimization rules.
- Legacy Cleanup: one gap resolved, delete Webflow legacy in relaunch commit.
- TODOs.md updates: none proposed beyond the existing open Tiago questions in this plan.
- Failure modes: no critical silent gaps remain if verification plan is implemented.
- Parallelization: mostly sequential, with image curation and verification separable after structure lands.
- Lake Score: complete path chosen for architecture, assets, tests, performance, and cleanup.

## Developer Experience Review Decisions

Status: Approved direction from `/plan-devex-review`
Date: 2026-05-26

The relevant developer experience is the maintainer workflow for Lika working with Codex or Codex CLI.

### Persona

```text
TARGET DEVELOPER PERSONA
=========================
Who:       Lika plus Codex collaborator
Context:   Creative owner steering content, design, implementation, git, and review with AI assistance
Tolerance: Low tolerance for stale docs or unclear next steps; high tolerance for deliberate design discussion
Expects:   A clear source of truth, easy preview command, asset rules, and a safe verification path
```

### DX Mode

Use DX POLISH for this repo.

The repo does not need a public developer-platform onboarding flow. It needs a low-friction maintainer loop:

```text
open repo
  -> read README / PLAN / DESIGN
  -> run ./scripts/serve.sh
  -> edit vanilla static files
  -> preview locally
  -> run Playwright checks once added
  -> run gstack QA
  -> commit and push
```

### DevEx Fixes Applied

- `README.md` now distinguishes the current legacy export from the approved vanilla relaunch.
- `DEVELOPMENT.md` now documents the relaunch workflow, asset rules, and planned verification.
- `PLAN.md` now records this DevEx decision so future Codex sessions do not need chat history.

### DevEx Scorecard

| Dimension | Current Score | Target | Notes |
|-----------|---------------|--------|-------|
| Getting started | 8/10 | 9/10 | Preview command exists; README now points to the right plan |
| Source of truth | 8/10 | 9/10 | PLAN and DESIGN are explicit; implementation still pending |
| Asset workflow | 7/10 | 9/10 | Rules are clear; curation tooling/process not built yet |
| Verification | 6/10 | 9/10 | gstack QA available; Playwright checks still need implementation |
| Continuity for Codex | 8/10 | 9/10 | AGENTS, PLAN, DESIGN, README now align |

TTHW for a future maintainer is now expected to be under 2 minutes:

```text
git clone
cd chef-tiago
./scripts/serve.sh
open http://127.0.0.1:8000
```

## Autoplan Review Refresh

Status: Approved
Date: 2026-05-26
Trigger: user submitted `/design-shotgun` feedback and asked `/autoplan` to proceed.
Approval: user approved all final-gate recommendations on 2026-05-26.

### Intake

Plan summary:

The plan remains an image-led one-page relaunch for Tiago Borges as chef, executive chef, restaurant operator/coordinator, consultant, and selected hospitality collaborator. The design-shotgun feedback does not change Approach B, but it does change the visual center: brighter food energy, stronger color blocking, softer atmosphere, stranger typography, and less dark nightlife drama.

Scope detection:

| Scope | Detected | Evidence |
|-------|----------|----------|
| UI | Yes | One-page editorial homepage, anchor navigation, visual system, typography, imagery |
| DX | Yes | Maintainer workflow, local preview, asset rules, dev-only verification |
| Base branch | `main` | `origin/HEAD` points to `origin/main` |
| Codex outside voice | Unavailable | Approval reviewer blocked external Codex CLI review of repo docs |
| Independent subagent voice | Available | CEO strategy review completed |

Restore point:

`~/.gstack/projects/plavelska-chef-tiago/main-autoplan-restore-20260526-160625.md`

### Phase 1: CEO Review

Premise challenge:

| Premise | Assessment | Decision |
|---------|------------|----------|
| The urgent problem is positioning, not lack of personality | Valid. Existing site already has visual personality, but frames Tiago as `Private Chef 24/7` and routes visitors to booking. | Keep |
| A one-page editorial relaunch is the right v1 | Valid. It removes stale booking structure fastest without creating a content-maintenance burden. | Keep |
| Current-role facts can be drafted before Tiago confirms them | Risky. Public wording for Mira, Bottega, consulting availability, public email, and image permissions must be verified before launch copy. | Accepted: add launch claims sheet |
| Music should be present | Valid, but it must be atmosphere, not a standalone profession. | Fold into `#atmosphere` and collaborations |
| Selected projects is the right CTA | Valid, but broad. It needs a sharper v1 hierarchy or the homepage may speak weakly to every visitor. | Accepted: prioritize restaurant/opening support plus extraordinary food-led events |

What already exists:

| Need | Existing asset | Use |
|------|----------------|-----|
| Local preview | `scripts/serve.sh` | Keep as primary preview command |
| Visual direction | `DESIGN.md` | Updated with design-shotgun feedback |
| Product/content plan | `PLAN.md` | Remains source of truth |
| Maintainer workflow | `README.md`, `DEVELOPMENT.md`, `AGENTS.md` | Keep aligned with static relaunch |
| Old content and styles | `index.html`, `services.html`, `booking.html`, `css/`, `js/` | Reference only; do not let Webflow structure dictate v1 |
| Image sources | committed `images/`, untracked `new assets/` | Curate derivatives only, leave raw sources untracked |

Dream state delta:

```text
CURRENT
  Private-chef booking export
  Services / Booking journey
  Webflow-era structure
  Stale role language

THIS PLAN
  One-page chef/operator profile
  Work / Point of View / Collaborations / Atmosphere / Contact
  Static vanilla relaunch
  Bright food-led visual direction

12-MONTH IDEAL
  Living editorial identity
  Verified current projects
  Strong image archive
  Optional About/Gallery/Journal pages
  Clear selected-project inbound pipeline
```

Implementation alternatives:

| Approach | Effort | Risk | Decision |
|----------|--------|------|----------|
| Minimal content pivot | S | Low launch risk, high brand-staleness risk | Rejected for v1; too close to old booking structure |
| Image-led one-page profile | M | Needs copy/image verification | Approved baseline |
| Full editorial portfolio | L | Maintenance and content burden | Deferred to post-launch |

CEO outside voice:

The independent review agreed that Approach B should proceed. The final gate accepted both high-severity recommendations:

| Finding | Severity | Type | Fix |
|---------|----------|------|-----|
| Public claims are unverified | High | User challenge | Create launch claims sheet before final copy |
| Selected projects is broad | High | User challenge | Pick top two v1 inbound outcomes or explicitly keep broader positioning |
| Dark Ibiza night thesis underperformed | Medium | Auto-decision | Shift to bright market heat plus soft room/music energy |
| Standalone music section risks DJ positioning | Medium | Taste decision | Fold music into atmosphere and collaborations |

CEO consensus:

| Dimension | Primary review | Subagent | Consensus |
|-----------|----------------|----------|-----------|
| Premises valid | Mostly yes, with claims risk | Mostly yes, with claims risk | Confirmed |
| Right problem | Reposition away from booking | Same | Confirmed |
| Scope calibration | One-page v1 | One-page v1 | Confirmed |
| Alternatives explored | Enough for v1 | Enough for v1 | Confirmed |
| Market/position risk | Broad CTA, unverified claims | Same | Confirmed |
| 6-month trajectory | Good if shipped quickly after verification | Same | Confirmed |

CEO output:

- NOT in scope: standalone DJ/music brand, multi-page editorial portfolio, contact form, framework migration, image CDN.
- Error/rescue registry: see table below.
- Failure modes registry: see cross-phase registry below.
- Completion: Phase 1 clears Approach B, with two final-gate decisions.

### Phase 2: Design Review

Design completeness score: 8/10 after incorporating design-shotgun feedback.

Design-shotgun interpretation:

| Signal | Implication |
|--------|-------------|
| B rated highest | Use bright layout, food energy, color blocking, and color clash as baseline |
| C had the best tone | Pull in softer room/music tone and small illustrative details |
| A had useful side-menu/music cues | Borrow the side-rail idea only if it stays light and modern |
| Heavy black/fire/red drama disliked | Remove dark club drama from primary direction |
| Typography disliked across variants | Push bolder, stranger, more distinctive type |

Design litmus scorecard:

| Dimension | Score | Finding | Decision |
|-----------|-------|---------|----------|
| First 5-second hierarchy | 8/10 | Identity is clear if hero copy stays direct | Keep hero role line explicit |
| Visual originality | 7/10 | Typography is the biggest unresolved taste risk | Push type more unusual |
| Imagery strategy | 8/10 | Image roles are named, but rights/approval are unresolved | Add launch claims sheet |
| Color system | 7/10 | Warm palette works, but Italian/traffic-light risk is real | Add explicit color guardrails |
| Mobile readability | 7/10 | Plan names mobile checks but not exact section behavior | Verify in Playwright and gstack QA |
| Accessibility | 8/10 | Contrast, focus, alt text, reduced motion are specified | Keep as launch gate |
| AI slop resistance | 8/10 | Generic cards are rejected; route still needs decisive layout execution | Poster rhythm over card grids |

Design decisions:

- `#music` becomes `#atmosphere` for v1, so music can support the room/food story without becoming a second profession.
- `DESIGN.md` now supersedes the older dark-first mood with bright market heat plus soft atmosphere.
- Avoid heavy black-first composition, fire, red club lighting, Italian tricolor, traffic-light colors, ordinary magazine typography, and lifestyle-script cliches.
- Keep color blocking, tactile food imagery, small illustration, and a possible side-rail gesture.

### Phase 3: Engineering Review

Architecture decision:

Keep the production site boring and static: `index.html`, `css/site.css`, `js/site.js`, curated image derivatives. No framework, build step, client-side router, or Webflow compatibility layer for v1.

Dependency graph:

```text
Browser
  |
  v
index.html
  |-- css/site.css
  |-- js/site.js
  |-- images/tiago-2026/*
  |-- fonts/*
  |
  v
mailto: public email
```

Code quality review:

| Area | Finding | Decision |
|------|---------|----------|
| Legacy Webflow export | Current files are brittle and booking-shaped | Rebuild v1 cleanly, use export as reference only |
| Asset handling | Raw `new assets/` folder is unsafe to commit | Curate optimized derivatives only |
| URL model | Old `services.html` and `booking.html` aliases can preserve stale mental model | Clean URL break remains approved |
| JS | The site should not need JS for core content | JS only progressive enhancement |

Test diagram:

```text
CONTENT FLOWS                              TESTS
[+] Hero identity                           [+] text assertion, visual QA
  ├── role line verified                      ├── no stale private-chef framing
  └── selected-project CTA                    └── 10-second comprehension check

[+] Navigation                              [+] anchor checks
  ├── #work                                   ├── target exists
  ├── #point-of-view                          ├── keyboard focus remains visible
  ├── #collaborations                         └── mobile tap targets are usable
  ├── #atmosphere
  └── #contact

[+] Contact                                 [+] mailto and visible email
  ├── visible public email                    ├── href starts with mailto:
  └── no booking form                         └── copy filters selected projects

[+] Images                                  [+] asset checks
  ├── hero optimized                          ├── alt text exists where meaningful
  ├── noncritical lazy-loaded                 ├── width/height set where practical
  └── raw source files excluded               └── no new assets/ committed
```

Performance review:

- Hero image optimization is a launch gate.
- Non-critical images should be lazy-loaded.
- Large source archives must remain out of git.
- Use explicit image dimensions to reduce layout shift.
- No third-party runtime dependencies should remain unless deliberately approved.

Engineering test artifact:

`~/.gstack/projects/plavelska-chef-tiago/lolalu-main-autoplan-test-plan-20260526-1615.md`

### Phase 3.5: DX Review

Product type:

This is not a developer platform. DX means maintainer experience for Lika plus Codex/Codex CLI.

Developer journey:

| Stage | Expected path | Risk | Fix |
|-------|---------------|------|-----|
| Discover | Read `README.md` | Old export can confuse scope | README names legacy vs relaunch |
| Understand | Read `PLAN.md` and `DESIGN.md` | Conflicting visual direction | Updated `DESIGN.md` and this review |
| Preview | Run `./scripts/serve.sh` | Python missing | Requirement documented |
| Edit | Work in vanilla files | Webflow clutter distracts | Rebuild clean files |
| Curate assets | Select derivatives only | Raw assets accidentally committed | Asset rules and git checks |
| Verify | Run Playwright and gstack QA | Checks not yet implemented | Add dev-only tests |
| Ship | Commit static files | Stale booking language leaks | Regression checks |
| Maintain | Future edits in docs | Decisions lost in chat | PLAN/DESIGN/TODOS updated |

Developer empathy narrative:

A future Codex session should not need to rediscover the relaunch rationale. It should open the repo, see that the Webflow export is legacy reference, read the updated visual direction, run the preview command, and know exactly which files to build and which assets not to touch.

DX scorecard:

| Dimension | Score | Target | Decision |
|-----------|-------|--------|----------|
| Getting started | 8/10 | 9/10 | Keep `./scripts/serve.sh` path |
| Source of truth | 8/10 | 9/10 | PLAN, DESIGN, TODOS now align better |
| Asset workflow | 7/10 | 9/10 | Needs curation pass and derivative naming |
| Verification | 6/10 | 9/10 | Add Playwright checks before launch |
| Error recovery | 7/10 | 9/10 | Restore point and test artifact exist |
| Codex continuity | 8/10 | 9/10 | Autoplan decisions recorded |
| Production simplicity | 9/10 | 9/10 | No framework or build step |
| Launch confidence | 7/10 | 9/10 | Depends on claims sheet and QA |

TTHW remains under 2 minutes:

```text
cd /Users/lolalu/development/chef-tiago
./scripts/serve.sh
open http://127.0.0.1:8000
```

### Error And Rescue Registry

| Failure | Trigger | User sees | Rescue |
|---------|---------|-----------|--------|
| Wrong public role claim | Mira/Bottega wording guessed | Trust damage or awkward correction | Launch claims sheet before final copy |
| Stale booking language leaks | Old Webflow files or copy reused | Site still feels like private-chef booking | Playwright text checks and gstack QA |
| Music over-positioned | Standalone `#music` reads like DJ service | Chef/operator credibility diluted | Use `#atmosphere` and keep music contextual |
| Raw assets committed | `new assets/` copied wholesale | Repo bloat and rights risk | Curate derivatives under `images/tiago-2026/` |
| Visual direction goes too dark | First mockup aesthetic reused too literally | Food disappears, Tiago feels too dramatic | Follow updated `DESIGN.md` feedback constraints |
| Contact too vague | Email-only CTA has no fit filter | Wrong inquiries or weak conversion | Add selected-project fit list near contact |

### Cross-Phase Themes

| Theme | Phases | Decision |
|-------|--------|----------|
| Claims before polish | CEO, Eng, DX | Verify facts before final copy and launch |
| Bright food energy over dark drama | CEO, Design | Update design source of truth |
| Music as texture, not profession | CEO, Design | Rename `#music` to `#atmosphere` |
| Static simplicity is a strength | Eng, DX | Keep production framework-free |
| Verification must catch old positioning | Eng, DX | Add stale-language regression checks |

### Decision Audit Trail

| # | Phase | Decision | Classification | Principle | Rationale | Rejected |
|---|-------|----------|----------------|-----------|-----------|----------|
| 1 | CEO | Keep Approach B as v1 | Auto-decision | Completeness + bias toward action | Solves the real positioning problem without building a content-heavy portfolio | Minimal pivot, full portfolio |
| 2 | CEO | Add launch claims sheet as pre-copy gate | User challenge | Explicit over clever | Public role claims and image permissions are trust risks | Guessing from public references |
| 3 | CEO | Surface top-two inbound outcomes as final gate choice | User challenge | Focus as subtraction | Broad selected-project copy may dilute proof and CTA | Speaking equally to every visitor |
| 4 | Design | Shift from dark Ibiza night to bright market heat plus soft atmosphere | Auto-decision | Evidence from feedback | Heavy black/fire/red drama underperformed | Dark-first homepage |
| 5 | Design | Rename `#music` to `#atmosphere` for v1 | Taste decision | Chef credibility first | Music should support the room, not become a second profession | Standalone music/DJ section |
| 6 | Eng | Keep vanilla static architecture | Auto-decision | Boring by default | The site needs clarity and speed, not a framework | Vite, SPA, static generator |
| 7 | Eng | Clean URL break for old booking/services pages | Auto-decision | Explicit over clever | The site is offline and old routes preserve stale framing | Compatibility aliases |
| 8 | Eng | Add dev-only verification before launch | Auto-decision | Completeness | Static sites still regress through stale copy, broken anchors, and image mistakes | Manual-only QA |
| 9 | DX | Create `TODOS.md` for deferred scope | Auto-decision | No vague deferrals | Post-launch items should be visible to future sessions | Leaving deferred work in prose only |

### Final Gate Outcome

All final-gate recommendations were approved on 2026-05-26.

Accepted decisions:

- Add a launch claims sheet before final copy: exact Mira title/name, Bottega relationship, consulting availability, public email, and image permissions.
- Prioritize restaurant/opening support plus extraordinary food-led events as the top two v1 inbound outcomes, while still allowing selected other inquiries.
- Use `#atmosphere` instead of a standalone `#music` section.

### User Challenges For Final Gate

Challenge 1: Launch claims sheet before final copy

You said the plan should proceed toward implementation. The review recommends inserting a short verification checkpoint before final copy: exact Mira title/name, Bottega relationship, consulting availability, public email, and image permissions. If this is wrong, the cost is a small delay. If omitted, the cost is a polished site with a false public claim.

Outcome: approved.

Challenge 2: Pick top two inbound outcomes for v1

The current CTA covers restaurant owners, event producers, hospitality collaborators, press, friends-of-friends, and creative operators. The review recommends prioritizing restaurant/opening support plus extraordinary food-led events for v1, while still allowing other selected inquiries. If this is wrong, the cost is narrowing the site too much. If omitted, the cost is a homepage that feels expressive but less decisive.

Outcome: approved. V1 should prioritize restaurant/opening support plus extraordinary food-led events.

### Taste Choice For Final Gate

Choice 1: `#atmosphere` instead of standalone `#music`

Recommendation: use `#atmosphere`. It preserves the music signal your feedback liked, but avoids making music read as a second public profession. Keeping `#music` is viable if Tiago wants that identity more visible now.

Outcome: approved. Use `#atmosphere` for v1.

### Implementation Tasks

- [ ] **AP-001 (P1, human: 15 min with Tiago / CC: 5 min) - claims** - Create and confirm launch claims sheet before final copy.
- [ ] **AP-002 (P1, human: 10 min decision / CC: 5 min plan update) - homepage-positioning** - Prioritize the top two v1 inbound outcomes or explicitly keep broad selected-project positioning.
- [ ] **AP-003 (P2, human: taste review / CC: 1-2 hours implementation pass) - visual-system** - Implement bright market heat plus soft atmosphere direction from design-shotgun feedback.
- [ ] **AP-004 (P2, human: review results / CC: 45-60 min) - qa** - Add dev-only checks for anchors, visible email, stale booking language, JS-off usability, and mobile sanity.

Task artifact:

`~/.gstack/projects/plavelska-chef-tiago/tasks-autoplan-20260526-1618.jsonl`

## Design Review Ceremony Refresh

Status: Practical `/plan-design-review` ceremony completed
Date: 2026-05-27
Trigger: user asked to substantiate, organize, refine, clean up, and implement the current design structure.

The formal `/plan-design-review` ceremony expects an interactive `AskUserQuestion` tool. This host does not expose that tool in the current Default session, so this review used the approved design-shotgun feedback, Variant C direction, the current implementation diff, and live gstack browser QA as the working design board.

### Source Inputs

- Approved visual direction: playful, colorful, modern brutalist Variant C from the reference-brutal design-shotgun round.
- User correction: restore the handmade visual elements from the supplied paper-note reference image.
- Live local page: `http://127.0.0.1:8000/`.
- Current implementation files: `index.html`, `css/site.css`, `js/site.js`, `DESIGN.md`, `PLAN.md`, and `TODOS.md`.

### What Already Exists

- Strong one-page route model: `#top`, `#work`, `#point-of-view`, `#collaborations`, `#atmosphere`, `#contact`.
- Distinctive poster hero with stamp, pill navigation, scrawl, portrait arch, work panel, selected-project CTA, and contact card.
- Handmade note language now present: paper scraps, blue doodles, yellow brush highlight, paper-plane contact block, ingredient strip, green handwritten culture note, arrow, and smiley mark.
- Static verification already catches stale booking/private-chef language, missing anchor targets, visible email, and legacy Webflow/jQuery/Formspree leakage.

### Review Passes

| Pass | Before | After cleanup target | Finding | Decision |
|------|--------|----------------------|---------|----------|
| Information architecture | 8/10 | 9/10 | The section order is right, but the paper-note band needed a named job in the story. | Treat it as the tactile proof bridge between hero identity and manifesto. |
| Interaction state coverage | 7/10 | 8.5/10 | Focus states exist, but hover/touch affordance was thin for cards and notes. | Add restrained hover/focus motion that respects reduced motion. |
| User journey and emotional arc | 8/10 | 9/10 | The arc is clear: impact, proof, point of view, work, imagery, collaborations, room rhythm, contact. | Document the arc so future edits do not flatten it into cards. |
| AI slop risk | 8/10 | 9/10 | The handmade pieces could become decoration if repeated without rules. | Paper-note elements must carry content, not ornamental filler. |
| Design system alignment | 7/10 | 9/10 | Components were implemented before they were named. | Name the component vocabulary in `DESIGN.md`. |
| Responsive and accessibility | 7.5/10 | 8.5/10 | Mobile has no horizontal overflow and console is clean; contact email needed better readability. | Tune the contact email scale and keep mobile clipping checks in QA. |
| Unresolved decisions | 7/10 | 8/10 | Public role/image claims still need final approval. | Keep the launch claims sheet as a pre-launch gate. |

### Final Page Architecture

1. `Hero poster`: who Tiago is now, where he is based, what he builds, and how to contact him.
2. `Handmade visual notes`: tactile proof of personality, ingredients, global influence, island movement, and warm contact.
3. `Point of view`: short manifesto that makes the visual personality feel intentional.
4. `Work board`: concrete inbound lanes, led by restaurant/opening work and extraordinary food-led events.
5. `Image break`: food and atmosphere carry proof without over-explaining.
6. `Collaborations`: selected project types without reopening the old booking/service funnel.
7. `Atmosphere`: music appears as room energy, not as a second profession.
8. `Contact`: email-first CTA that filters for people building something real.

### Component Vocabulary

- `poster hero`: grid-led first impression with oversized type and role clarity.
- `stamp`: circular mark for handmade chef identity.
- `pill nav`: visible wayfinding, not a generic header.
- `tag stack`: compact proof of place and themes.
- `portrait arch`: primary image signature.
- `work panel`: yellow structured credibility block.
- `paper note`: tactile content card with paper texture and doodle language.
- `ingredient strip`: compact two-part proof module.
- `smile note`: small memory/emotion beat.
- `work board`: brutalist lane grid for what Tiago builds.
- `contact card`: email-first action point.

### Not In Scope

- Standalone DJ/music identity: music remains atmosphere until Tiago asks for a separate public lane.
- Multi-page editorial portfolio: defer until final role copy, image rights, and project facts are verified.
- Contact form: email-first is the v1 filter.
- Raw `new assets/` commit: public derivatives only.
- New framework/build step: the site stays vanilla static for this relaunch.

### Approved Mockups

| Screen/Section | Mockup Path | Direction | Notes |
|----------------|-------------|-----------|-------|
| Homepage | `/Users/lolalu/.gstack/projects/plavelska-chef-tiago/designs/homepage-shotgun-reference-brutal-20260526-175041/variant-C.png` | playful/colorful modern brutalist | Use as the tonal baseline, amended by the user's handmade paper-note reference. |

### Implementation Tasks

- [x] **DR-001 (P1, human: review / CC: 15 min) - design-structure** - Record the final page architecture, component vocabulary, and handmade-note rules in the plan/design docs.
- [x] **DR-002 (P2, human: review / CC: 20 min) - visual-system** - Integrate handmade visual elements as content-bearing paper notes, not loose decoration.
- [x] **DR-003 (P2, human: review / CC: 10 min) - interaction-polish** - Add restrained hover/focus motion and tune the oversized contact email so it stays bold but readable.
- [x] **DR-004 (P2, human: none / CC: 10 min) - verification** - Add static regression checks for the handmade visual-note language.
- [ ] **DR-005 (P1, human: 15 min with Tiago / CC: 5 min) - launch-claims** - Confirm exact public role, Mira/Bottega wording, public email, consulting availability, and image permissions before final public launch.

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO dual review | `/autoplan` Phase 1 | Strategy, scope, proof-first conversion | 1 | CLEAR WITH GUARDRAILS | Primary job is proof-first referral conversion; prioritize restaurant/opening support and active consulting, with extraordinary food-led events second |
| Design dual review | `/autoplan` Phase 2 | Multi-page visual/content structure | 1 | CLEAR WITH GUARDRAILS | Use approved `variant-B-remix.png`; keep its personality, reduce unreadable paper/vintage excess, and subordinate Gallery/Music to Work/Collaborations |
| Eng dual review | `/autoplan` Phase 3 | Static architecture and tests | 1 | REQUIRES IMPLEMENTATION GATES | Build seven flat pages, rewrite page nav handling, preserve mobile role line, upgrade verifier, and ignore raw `new assets/` |
| DX review | `/autoplan` Phase 3.5 | Developer-facing product audit | 0 | SKIPPED | Static marketing site is not developer-facing; maintainer workflow remains covered by README/DEVELOPMENT |

### Autoplan Consensus

- `Home`, `About`, `Work`, `Collaborations`, `Gallery`, `Music`, and `Contact` are locked for the next prototype.
- `Music` remains a visible dedicated page because the user explicitly confirmed it; both review voices agree it must be constrained to room rhythm and hospitality, not DJ positioning.
- The old one-page `#atmosphere` guidance is historical and must not drive implementation.
- The proof layer is the trust boundary. Do not ship vague `friends and clients`, exact role titles, or decorative stats unless the copy is defensible.
- `npm test` currently passing is not launch confidence; the verifier must become multi-page-aware during implementation.

### Decision Audit Trail

| # | Phase | Decision | Classification | Principle | Rationale | Rejected |
|---|-------|----------|----------------|-----------|-----------|----------|
| 1 | CEO | Make proof-first referral conversion the prototype job | Auto-decision | Explicit over clever | It turns the site from brand exploration into a clear buyer/collaborator decision path | Equal-weight portfolio |
| 2 | CEO | Prioritize restaurant/opening support and consulting | Auto-decision | Focus as subtraction | It gives the strongest commercial lane first while still allowing selected events | Speaking to every possible inquiry equally |
| 3 | CEO | Keep Music page but constrain its job | User challenge retained | User-confirmed premise | Both model voices warned about DJ-positioning risk, but the user explicitly wants a visible music page | Removing standalone Music |
| 4 | Design | Use `variant-B-remix.png` as the visual source | Taste decision | Evidence from feedback | It best preserves the selected poster/gallery/music personality | Cleaner rejected remix |
| 5 | Design | Keep paper notes content-bearing and limited | Auto-decision | Clarity | User asked to reduce paper/vintage excess, then selected the more personality-heavy route | Decorative scrapbook notes |
| 6 | Eng | Stay flat static, no framework/build step | Auto-decision | Boring by default | Seven pages are manageable by hand and preserve deployment simplicity | SPA/static generator |
| 7 | Eng | Add shared shell and multi-page verifier gates | Auto-decision | Boil lakes | Hand-authored pages need automated drift checks | Manual-only QA |
| 8 | Eng | Ignore raw `new assets/` and commit derivatives only | Auto-decision | Risk control | The source folder is large and should not become a repo payload | Bulk-copying source photography |

### Implementation Tasks

Task artifact:

`~/.gstack/projects/plavelska-chef-tiago/tasks-autoplan-20260527-164346.jsonl`

- [x] **AP-101 (P1, CC: 2-3h) - static-pages** - Build the seven-page prototype with shared header/nav/footer, page-level active states, and no contact form.
- [x] **AP-102 (P1, CC: 45-60m) - verification** - Replace the one-page verifier with multi-page checks for pages, nav, local assets, stale language, raw asset references, visible email, and shell consistency.
- [x] **AP-103 (P1, CC: 45-60m) - proof-copy** - Convert Work content into proof cards using the claims table; remove or soften unverified exact titles, `17 years`, and `friends and clients`.
- [x] **AP-104 (P2, CC: 60-90m) - imagery** - Select 8-12 cleared images from `new assets/`, convert optimized derivatives into `images/tiago-2026/`, and use them across Home/Gallery/Work/Music.
- [x] **AP-105 (P2, CC: 45-60m) - responsive-design** - Keep role line visible, maintain 44px touch targets, and collapse poster grids into readable mobile chapters.
- [x] **AP-106 (P2, CC: 30-45m) - browser-qa** - Run gstack/browser QA after implementation for desktop/mobile, no-JS fallback, mailto fallback copy, Gallery image rhythm, and Music positioning.

### Final Gate Status

Approved and implemented on 2026-05-27. The next gate is visual/taste review before shipping.
