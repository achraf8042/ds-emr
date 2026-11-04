---
name: healthcare-saas-website-builder
description: Design and build a conversion-focused marketing website for a B2B healthcare software product (EHR/EMR, practice management, clinical AI, medical billing) modeled on the structure and patterns of praxisemr.com. Use this skill whenever the user asks to build, clone, redesign, or "make a site like" praxisemr.com, or asks for any EHR/EMR, medical software, clinic SaaS, or physician-facing product website, landing page, or demo-request funnel, even if they never mention Praxis. Covers reference analysis, design tokens, page blueprint, component specs, inner-page templates, copy rules, accessibility, SEO, and compliance guardrails.
---

# Healthcare SaaS Website Builder (praxisemr.com pattern)

Build a trustworthy, physician-facing marketing site whose single job is to get a clinician to **book a demo**. The reference is https://www.praxisemr.com/, a B2B EHR/EMR vendor site. Reproduce its *information architecture and persuasion pattern*, not its brand, copy, images, or logos.

## Non-negotiable rules

1. **Never copy** Praxis's text, testimonials, award badges, logos, photos, case-study names, statistics, or trademarks (for example "Praxis", "RAI", "Reflective Ambient Intelligence", "Concept Processor"). Write original copy for the user's own product.
2. **Never invent proof.** No fabricated testimonials, doctor names, awards, "#1 rated" claims, revenue or time-savings figures, certifications (ONC, HIPAA, KLAS, etc.), or citations. If the user supplies none, use clearly marked placeholders such as `[TESTIMONIAL: name, specialty, quote]` and list every placeholder in the final report.
3. **Healthcare claims need sources.** Any statistic or research claim on the page must come from the user or a source the user approves. Keep a `CLAIMS.md` listing each claim, its source, and whether it is verified.
4. **No real patient data or PHI** in screenshots, mock UIs, or sample content. Use obviously synthetic data.
5. **Do not fabricate a product.** If you are unsure what the product does, ask or propose a one-paragraph product summary and get confirmation before designing.

## Step 0: Establish the brief (ask only what is missing)

Collect, or propose and confirm:

- Product name, one-sentence value proposition, and the main differentiator (the thing a competitor cannot say).
- Audience: independent physicians, specialty groups, concierge practices, billers, new practices?
- Primary conversion: demo request (default), free trial, phone call, or contact form.
- Specialties to feature (3 to 8).
- Real assets: logo (SVG, light and dark), product screenshots, photos, testimonials, awards, certifications, phone and email.
- Constraints: stack, hosting, CMS, brand colors, regulatory wording from counsel.

If the user gives nothing but "make a site like praxisemr.com", state your assumptions in one short paragraph, then proceed with clearly marked placeholders rather than stalling.

## Step 1: Study the reference

If you have browsing or screenshot tools, open the live site on desktop (1440px) and mobile (390px) and record: colors, fonts, spacing rhythm, header behavior, button styles, image treatment, and light/dark theme handling. If you only have text access, rely on the blueprint below and choose your own visual system. Do not guess at exact hex values you cannot observe.

What the reference does, structurally:

- **Utility bar** with phone number and email above the header.
- **Header** with logo (separate light and dark SVG variants), primary nav, large mega-menus, and a persistent **Get a Demo** button.
- **Full-bleed photographic hero** of a physician in a real exam room, one long benefit-led H1, a sub-headline that carries the third-party credibility claim, and two buttons (secondary "how it works", primary "demo").
- **New-feature spotlight** with a small "New" badge, headline, short paragraph, link, and a tall portrait image.
- **Full-bleed image banner** with a single outcome headline and one CTA.
- **Product explainer** pairing a device screenshot with a short "how it works" paragraph.
- **Social proof block**: headline, awards-logo strip (monochrome logos), a physician pull-quote with specialty, case-study links, portrait.
- **Competitive-education section** arguing against an alternative approach, built as a grid of titled risk cards, each ending with a small source citation.
- **Specialty section**: heading, logo strip, then a row of physician avatars with name and specialty linking to case studies.
- **Newsroom/blog teaser** with 3 linked cards.
- **Financial benefit section**: quote beside a portrait, with animated count-up stat counters.
- **Specialty chip list** linking to specialty pages.
- **Video section** featuring a named physician story with a demo CTA.
- **Testimonial carousel** (about 6 quotes, avatar, name, specialty).
- **Closing CTA band** aimed at users of the competing approach ("Still using X? Switch and save N hours a day"), then a **footer** with link columns, contact, social icons, and a **Light / Dark / Auto** theme switch.

## Step 2: Design plan (write it down before coding)

Produce a short plan, then critique it against the brief and revise any part that reads like a generic default.

**Tokens**
- Color: 4 to 6 named hex values (ink, surface, brand, accent, muted, danger/success if needed) plus dark-mode counterparts. Healthcare buyers expect calm and credible: avoid neon, avoid stock "medical cross" clichés, avoid default SaaS purple gradients.
- Type: one or two families, clearly distinct if two. Choose deliberately rather than defaulting to Inter/Roboto/system. Set a scale (for example 1.2 ratio), body 17 to 18px, line length under 75 characters, headings with tight but readable leading.
- Space: an 8px base grid; section padding 96 to 128px desktop, 56 to 72px mobile.
- Radius and elevation: pick one radius system with a hierarchy (buttons vs cards vs media). Do not put the same soft shadow on every card.
- Motion: durations 150 to 250ms for interaction; a single deliberate page-load or scroll moment at most. Respect `prefers-reduced-motion`.

**Layout concept**: one-sentence description plus an ASCII wireframe of the hero and one dense section.

**Principles**: spend boldness in one place (usually the hero image + headline). Everything else stays quiet and disciplined.

**Self-review**: avoid these generic tells unless the brief demands them: cream background with terracotta accent; near-black with acid-green accent; identical rounded cards with identical shadows; all-caps tracked eyebrow above every heading; numbered 01/02/03 markers on non-sequential content; one accented word in every headline; `→` appended to every link.

## Step 3: Page blueprint (home)

Build sections in this order. Each section does one job.

| # | Section | Job | Required content |
|---|---------|-----|------------------|
| 1 | Utility bar | Reassure, offer a human channel | Phone, email |
| 2 | Header | Navigate, convert | Logo, nav, mega-menus, **Get a Demo** button, theme-aware logo |
| 3 | Hero | State the promise | Photo background with a legible overlay, H1 (outcome plus differentiator), H2 (credibility), secondary and primary CTA |
| 4 | Feature spotlight | Introduce the flagship capability | "New" badge, headline, paragraph, link, portrait or UI image |
| 5 | Outcome banner | Emotional beat | Full-bleed image, one headline, one CTA |
| 6 | How it works | Make the product concrete | Device mockup with synthetic data, short explainer, link |
| 7 | Social proof | Build trust | Award or certification strip, physician quote, case-study link |
| 8 | Differentiation / risk grid | Reframe the alternative | 6 to 12 cards: title, 2 to 3 sentences, source line |
| 9 | Specialties | Let visitors self-identify | Heading, avatars with name and specialty, link to each specialty page |
| 10 | Newsroom | Show activity and authority | 3 linked article cards |
| 11 | ROI / financial | Quantify value | Quote, animated counters (only with user-verified numbers) |
| 12 | Specialty chips | Fast navigation | Pill links |
| 13 | Video story | Humanize | Poster image, play button, named story, demo CTA |
| 14 | Testimonials | Repeat proof | Carousel, 4 to 8 quotes |
| 15 | Closing CTA | Convert | Switch-from-alternative headline, quantified benefit, **Get a Demo** |
| 16 | Footer | Wayfinding and legal | Link columns, contact, social, theme switch, copyright, privacy and HIPAA notice links |

Repeat the **Get a Demo** CTA at least 5 times down the page, always the same label and the same destination.

## Step 4: Component specs

**Header and mega-menu**
- Sticky, transparent over the hero, solid after scroll. The demo button never collapses into the hamburger on mobile.
- Mega-menus open on hover/focus (desktop) and accordion on mobile. They group links into titled columns (for example Solutions, Company, Resources) with an optional promo column. Full keyboard support: Enter/Space opens, Esc closes, arrow keys move, focus is trapped and returned correctly.
- Use real `<nav>`, `<button aria-expanded aria-controls>`, and no hover-only access.

**Hero**
- Real photography or a high-quality product visual; never a gradient blob. Use `<picture>` with WebP/AVIF, responsive `srcset` (for example 640/960/1440), `fetchpriority="high"`, explicit width and height.
- Overlay contrast must meet WCAG AA for text over the image (check the worst part of the image, not the average).
- H1 max about 14 words; one clear benefit, not a feature list.

**Buttons**: one primary (solid, brand), one secondary (outline or ghost). Minimum 44px tap target. Labels are verbs that say what happens: "Get a demo", "See how it works".

**Cards (risk grid, news, specialty)**: vary hierarchy. Risk cards carry a title, short body, and a quieter source line. Cards are links only if the whole card has one destination.

**Logo strip**: monochrome, equal optical height, `alt` text naming the organization, link to a proof page only if the proof exists. Provide dark-mode logo variants.

**Stat counters**: animate once when scrolled into view; render the final number in the HTML so no-JS and reduced-motion users see it. Never ship placeholders like `0`.

**Carousel**: autoplay off by default or pausable, visible controls, swipe on touch, `aria-roledescription="carousel"`, announces slide changes politely.

**Video block**: poster image first, load the player on click (privacy and performance), captions required.

**Theme switch (Light / Dark / Auto)**: implement with CSS custom properties on `:root`, `[data-theme="light|dark"]`, and `@media (prefers-color-scheme: dark)` for Auto. Persist the choice in `localStorage` inside try/catch, apply it before first paint to avoid a flash, and swap logo variants.

**Forms (demo request)**: fields kept to name, work email, phone (optional), practice size, specialty, EHR currently used. Inline validation, clear error text, success state with next-step expectations ("We reply within one business day"). Add a consent line and a link to the privacy policy. Never ask for patient information.

## Step 5: Inner-page templates

Create these templates so the site feels complete, even if only a few are populated:

1. **Specialty page** (`/best-ehr-for-{specialty}`): hero with specialty-specific outcome, 3 to 5 workflow pains and how the product solves them, a specialty physician quote, relevant integrations, demo CTA.
2. **Feature / How it works**: stepwise explainer with UI mockups, short video, comparison against the alternative, FAQ.
3. **Technology page** for the flagship AI or automation capability: problem, approach, safeguards (privacy, human review, auditability), what it does not do, demo CTA.
4. **Case study**: physician portrait, practice profile (specialty, size, previous system), challenge, result with verified numbers, long-form quote.
5. **Awards and certifications**: only verified items, each with year, issuer, link to the issuer's page.
6. **Demo page**: form beside a short "what to expect" list; no navigation distractions.
7. **Learning center / blog index**: filterable by topic, card grid, newsletter capture.
8. **Support, system requirements, interfaces, partners**: plain, scannable reference pages with tables.
9. **Legal**: privacy policy, terms, HIPAA notice, accessibility statement.

## Step 6: Copywriting rules

- Speak to the physician: outcomes in their language (time back, accuracy, autonomy, revenue), not architecture.
- Lead with the differentiator in the H1; prove it in the next scroll.
- Sentence case, active voice, concrete verbs. CTA text states the action.
- For the differentiation section, argue against an *approach* (for example "template-based charting"), not a named competitor, and cite every factual claim. Keep tone factual, not alarmist.
- Quotes: real, attributed, with specialty, and with written permission. Pull-quotes under 40 words.
- Avoid superlatives you cannot back up ("best", "#1", "only") unless the user supplies verifiable evidence; if used, show the source on the page.
- Alt text describes content and purpose, not "image of".

## Step 7: Technical defaults

Unless the user specifies otherwise:

- **Stack**: semantic HTML5, modern CSS (custom properties, grid, container queries where helpful), and small vanilla JS modules. Use a framework (Next.js/Astro) only if the user asks or the site needs a CMS and routing.
- **Structure**:
  ```
  /index.html
  /pages/…                specialty, features, demo, legal
  /assets/css/{tokens,base,components,pages}.css
  /assets/js/{nav,theme,carousel,counters,forms}.js
  /assets/img/{logo,backgrounds,avatars,partners}/…   (webp + svg)
  /content/*.json         testimonials, specialties, awards, articles
  /CLAIMS.md  /README.md
  ```
- **Content in data files**, rendered into templates, so non-developers can edit testimonials, specialties, and awards without touching markup.
- **Images**: WebP or AVIF with fallbacks, lazy-load below the fold, explicit dimensions, no layout shift.
- **Performance targets**: LCP under 2.5s on mobile 4G, CLS under 0.1, INP under 200ms, total JS under 100KB gzipped for the home page.
- **SEO**: unique `<title>` and meta description per page, one H1 per page, canonical URLs, Open Graph and Twitter card tags (1200x628 image), `Organization` and `SoftwareApplication` JSON-LD, `sitemap.xml`, `robots.txt`, descriptive internal link text, clean URLs.
- **Analytics and cookies**: no tracking scripts without a consent mechanism; no session replay on forms.

## Step 8: Accessibility and quality floor

- WCAG 2.2 AA: contrast, focus visibility (never remove outlines without a replacement), keyboard operability for menus, carousels, and video, skip-to-content link, landmark regions, form labels and error association, `lang` attribute.
- Fully responsive from 320px to 1920px; test 390, 768, 1024, 1440.
- `prefers-reduced-motion` and `prefers-color-scheme` honored.
- Touch targets at least 44px; no hover-only content.
- Print stylesheet for case studies and legal pages.

## Step 9: Verify before delivering

If you can run a browser or screenshot tool, do all of these and fix what you find:

1. Screenshot home at 1440 and 390 in light and dark; check the hero overlay contrast and that no section overflows horizontally.
2. Tab through the entire page: every interactive element is reachable, visible, and in a logical order; mega-menu and carousel work by keyboard.
3. Run an accessibility audit (axe or Lighthouse) and a performance audit; address critical findings.
4. Check the console for errors and every link for 404s.
5. Submit the demo form with valid and invalid data.
6. Search the output for leftover placeholders, `lorem ipsum`, copied reference text, or unverified claims.

## Deliverables

1. The working site folder (or repository) as structured above.
2. `README.md`: how to run, edit content, add a specialty page, and deploy.
3. `CLAIMS.md`: every statistic, award, certification, and testimonial with its source and verification status.
4. A short final report that lists: assumptions made, placeholders the user must replace (with file paths), assets still needed, and any compliance items for legal or privacy review (HIPAA marketing language, consent for testimonials, cookie consent).

Keep the report under 200 words and lead with what the user needs to do next.