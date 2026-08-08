---
name: Dessi Stones Aesthetics
description: A limestone, ink and single-flint typographic clinic page — ruled, imageless, and set in Caslon.
colors:
  stone-ground: "#F2F0EA"
  stone-tint: "#E9E6DD"
  stone-line: "#D5D0C3"
  stone-line-soft: "#E2DED3"
  ink: "#22221E"
  ink-soft: "#55534A"
  ink-faint: "#7D7A6F"
  flint: "#3C5261"
  flint-deep: "#2C3E4B"
  night: "#1B1B18"
  night-fg: "#EAE7DE"
  night-soft: "#A8A399"
  night-line: "#3A3A34"
typography:
  display:
    fontFamily: "Libre Caslon Display, Big Caslon, Georgia, serif"
    fontSize: "clamp(2.9rem, 12.2vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.018em"
  headline:
    fontFamily: "Libre Caslon Display, Big Caslon, Georgia, serif"
    fontSize: "clamp(1.95rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Libre Caslon Display, Big Caslon, Georgia, serif"
    fontSize: "clamp(1.3rem, 1.5vw + 0.9rem, 1.65rem)"
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Libre Caslon Text, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.15rem, 0.7vw + 1rem, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.48
  body:
    fontFamily: "Libre Caslon Text, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.0625rem, 0.25vw + 1rem, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.62
  small:
    fontFamily: "Libre Caslon Text, Georgia, Times New Roman, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.15em"
  actionLabel:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.055em"
  wordmark:
    fontFamily: "Libre Caslon Display, Big Caslon, Georgia, serif"
    fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)"
    fontWeight: 400
    letterSpacing: "0.02em"
  heroPhone:
    fontFamily: "Libre Caslon Display, Big Caslon, Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 2.1rem)"
    fontWeight: 400
    letterSpacing: "0.01em"
  addressStatement:
    fontFamily: "Libre Caslon Display, Big Caslon, Georgia, serif"
    fontSize: "clamp(1.85rem, 4vw, 3.1rem)"
    fontWeight: 400
    lineHeight: 1.16
  ratingFigure:
    fontFamily: "Libre Caslon Display, Big Caslon, Georgia, serif"
    fontSize: "clamp(1.7rem, 2.8vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  closingPhone:
    fontFamily: "Libre Caslon Display, Big Caslon, Georgia, serif"
    fontSize: "clamp(2.6rem, 8vw, 5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  finePrint:
    fontFamily: "Libre Caslon Text, Georgia, Times New Roman, serif"
    fontSize: "0.8125rem"
    fontWeight: 400
rounded:
  none: "0"
  hairline: "1px"
spacing:
  hair: "0.4rem"
  xs: "0.75rem"
  sm: "1.25rem"
  md: "2rem"
  lg: "3.5rem"
  xl: "clamp(4.5rem, 9vw, 8rem)"
  pad-x: "clamp(1.35rem, 5vw, 4.5rem)"
  shell: "1180px"
components:
  action-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stone-ground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1.05rem 1.75rem"
  action-primary-hover:
    backgroundColor: "{colors.flint}"
    textColor: "{colors.stone-ground}"
  action-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1.05rem 1.75rem"
  action-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stone-ground}"
  action-ghost-night:
    backgroundColor: "transparent"
    textColor: "{colors.night-fg}"
    rounded: "{rounded.none}"
    padding: "1.05rem 1.75rem"
  action-ghost-night-hover:
    backgroundColor: "{colors.night-fg}"
    textColor: "{colors.night}"
  link-inline:
    textColor: "{colors.flint}"
  link-inline-hover:
    textColor: "{colors.flint-deep}"
  index-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    padding: "clamp(2rem, 3.6vw, 3rem) 0"
  band-tint:
    backgroundColor: "{colors.stone-tint}"
    textColor: "{colors.ink}"
  band-night:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-fg}"
---

# Design System: Dessi Stones Aesthetics

## Overview

**Creative North Star: "The Village Letterpress"**

This is the aesthetics-clinic convention played straight and at full craft — no irony, no smuggled quirk, and none of the blush-and-rose-gold salon rendition the category defaults to. The page reads like a well-set printed sheet from a small English practice: limestone paper, one ink, hairline rules, and a single cool blue used at the strength of a printer's second colour. Restraint is not a mood here, it is the argument the copy is making, so the visual system is not allowed to twitch.

The page carries **no photography, by explicit user decision** — no faces, no result images, no stock skin. That is a durable constraint on this world, not a gap waiting to be filled: **every future surface must be designed to be complete without images.** With imagery removed, only three materials remain — type, rule weight, and space — and each therefore has to do structural work. Type is set at the scale a photograph would have occupied (the headline reaches 6rem). Rules replace every container the category would have drawn as a card. Space is generous because the craft bar the user set is Aesop, where space is the material.

Density is low and deliberate: one page, six bands, one dark band at the close carrying the phone number at its largest size anywhere. The system is flat by construction — there is not a single shadow in the build — and depth is produced entirely by ground tone and rule weight.

**Key Characteristics:**
- Limestone ground, warm ink, one flint blue-grey as the only colour on the page
- Caslon at display scale against small letterspaced Archivo labels
- Hairline rules and ruled indexes; never a card, never a pill, never a badge
- No photography and no icon library; three authored SVGs at 1.5 stroke on a 24 grid
- Flat: zero shadows, zero gradients, zero blur
- Exactly two motion moments, both optional and both reduced-motion safe

## Colors

A warm limestone paper with a warm-tinted ink, one cool flint blue as the sole colour, and a near-black stone band that closes the page.

### Primary
- **Flint Blue-Grey** (`{colors.flint}`): The only colour on the page, and it appears in exactly two roles — the four italic treatment summaries in the ruled index, and inline link colour. It is also the hover state of the solid action and of the hero phone number, the focus-ring colour, and the tint on `::selection`, the caret and `accent-color`. It is never a decorative accent, a background fill, or a flourish.
- **Deep Flint** (`{colors.flint-deep}`): The hover-darkened state of an inline link only.

### Neutral
- **Limestone Ground** (`{colors.stone-ground}`): The page background and the browser theme colour. Warm enough not to read clinical, cool enough not to read as a beauty salon.
- **Stone Tint** (`{colors.stone-tint}`): The alternating band ground — used once, on the approach section, to change the temperature of the scroll without adding a container.
- **Stone Line** (`{colors.stone-line}`): The structural hairline. Divides sections, opens and closes a ruled list, and colours the scrollbar thumb.
- **Soft Stone Line** (`{colors.stone-line-soft}`): The interior hairline. Divides rows *inside* a single index or fact list.
- **Ink** (`{colors.ink}`): All headings, display figures, and the solid action fill.
- **Soft Ink** (`{colors.ink-soft}`): All secondary running copy — leads, index bodies, prose, meta. Warm-tinted, never a neutral grey. 6.8:1 on the ground.
- **Faint Ink** (`{colors.ink-faint}`): Decorative only. In this build it appears solely as the scrollbar-thumb hover. It must never set running text.
- **Night** (`{colors.night}`): The single dark band anchoring the close and the footer.
- **Night Foreground** (`{colors.night-fg}`): Headings, the large phone number, and the focus ring inside the dark band.
- **Soft Night** (`{colors.night-soft}`): Secondary copy on the dark band. 6.9:1 on night.
- **Night Line** (`{colors.night-line}`): The hairline inside the dark band, above the footer and above the safety statement.

### Named Rules

**The One Colour Rule.** Flint is the page's only colour and it appears as language, never as decoration: four italic index summaries and inline links. It may take a hover, a focus ring and a selection highlight. It may not become a fill, a badge, a bar, a chip, or a heading colour.

**The Two Rule Weights Rule.** Rules are the only structural material on a page with no images, so the two weights carry hierarchy and must not be interchanged. `{colors.stone-line}` divides sections and both opens and closes a list; `{colors.stone-line-soft}` divides rows within one list. A third rule weight is not available.

**The Browser Surfaces Rule.** The parts nobody draws still belong to the design. `::selection`, `caret-color`, `accent-color`, the custom scrollbar, and focus-visible rings are all themed from this palette, and the ring inverts to `{colors.night-fg}` inside the dark band. A new surface inherits these; it does not restyle them.

## Typography

**Display Font:** Libre Caslon Display (with Big Caslon, Georgia, serif)
**Body Font:** Libre Caslon Text (with Georgia, Times New Roman, serif)
**Label Font:** Archivo (with system-ui, -apple-system, sans-serif)

**Character:** Caslon is the English text face and this is an English village clinic, so the pairing is provenance rather than decoration. The Display cut carries hairline contrast at 6rem; the Text cut is a separate design with the weight put back in, so running copy stays readable at 1.15rem instead of thinning out the way a display Didone does when pressed into service as body text. Archivo, uppercase and letterspaced at 12px, is the only sans on the page and it does the small work only.

### Hierarchy
- **Display** (400, `clamp(2.9rem, 12.2vw, 6rem)`, 1.04, -0.018em): The hero headline, set across two lines via `white-space: pre-line`. The 12.2vw figure is measured, not guessed — it clears the gutters at 360px on the longest line the headline ever sets.
- **Headline** (400, `clamp(1.95rem, 4vw, 3rem)`, 1.04): Every section h2. Also the address statement, scaled up to `clamp(1.85rem, 4vw, 3.1rem)` at a 18ch measure, because the street *is* the heading of that section.
- **Title** (400, `clamp(1.3rem, 1.5vw + 0.9rem, 1.65rem)`, 1.14): Treatment names in the ruled index.
- **Lead** (400, `clamp(1.15rem, 0.7vw + 1rem, 1.4rem)`, 1.48, soft ink): Standfirst and section intros.
- **Body** (400, `clamp(1.0625rem, 0.25vw + 1rem, 1.15rem)`, 1.62): All running copy. Measure is capped at 66ch (`.measure`) or 54ch (`.measure-tight`); the hero standfirst is held tighter at 44ch.
- **Small** (400, 0.9375rem, 1.6): Footer body only.
- **Label** (Archivo, 500, 0.75rem, 0.15em, uppercase): Fact labels, footer column heads, the masthead place line. Actions use the same face at 0.875rem / 0.055em.

### Component sizes

Seven sizes sit off the shared ramp. Each belongs to exactly one component and is **documented, not tokenised** — they are this page's composition, not reusable steps, and promoting them to tokens would invite reuse the composition was never designed for. Listed so they are reviewable rather than stray literals:

- **Action label** (Archivo 500, `0.875rem`, 0.055em, uppercase): Button text. Between Label (0.75rem) and Small (0.9375rem); 14px is where an uppercase letterspaced button stops shouting.
- **Wordmark** (Display, `clamp(1.1rem, 1.4vw, 1.3rem)`): The masthead only. Deliberately quiet — the headline is the page's voice, not the logo.
- **Hero phone** (Display, `clamp(1.5rem, 3vw, 2.1rem)`): The number under the hero actions, big enough to read as an action itself without competing with the headline.
- **Address statement** (Display, `clamp(1.85rem, 4vw, 3.1rem)`, 18ch measure): The visit section, where the street *is* the heading. Sits between Title and Headline so the section reads as a different register in the same grammar.
- **Rating figure** (Display, `clamp(1.7rem, 2.8vw, 2.25rem)`): Single instance. Deliberately one step *below* the h2 it shares a row with, so the heading leads and the figure supports it.
- **Closing phone** (Display, `clamp(2.6rem, 8vw, 5rem)`): Single instance, the largest the number appears anywhere, and the last thing on the page.
- **Fine print** (Text, `0.8125rem`): The footer copyright line only, one step under Small.

**If you add a component, take a ramp step first.** A new off-ramp size needs the same justification as these: one component, one reason, written down here.

### Named Rules

**The Archivo Never Sets a Sentence Rule.** Archivo sets letterspaced uppercase labels, button text and footer column heads. It never sets a sentence, a paragraph, or a heading. The footer address and the safety statement are set in the text face for exactly this reason.

**The Two Caslons Rule.** Display cut for display sizes, Text cut for everything read as prose — including the italic index summaries. Never press the Display cut into body copy.

**The Figure Carries Its Denominator Rule.** A rating figure never appears without its count in the same breath, one type step apart ("5.0" / "from one review on Google"). A large number with the count hidden is the badge this page exists to refuse.

**The No Eyebrow Rule.** No kicker, eyebrow or label sits above any heading anywhere on this page. The heading carries its own weight; a label above it is furniture. Where a section might have wanted one — the visit section — the address is promoted to the heading instead.

## Layout

A single centred shell, `1180px` max width, with a fluid gutter of `clamp(1.35rem, 5vw, 4.5rem)`. There is no multi-column page grid; each band composes its own two-column split inside the shell.

Two asymmetric splits recur and are the page's spatial signature:
- **5fr / 7fr** — heading left, prose right. Used by `.split` (section heads, approach, proof) and by the treatment index row (name + italic summary left, plain explanation right).
- **7fr / 4fr** — the hero body, where the standfirst and actions take the wide column and the four ruled facts hold the right side so it is not left as void.

Vertical rhythm is one scale for the whole page: `0.4rem / 0.75rem / 1.25rem / 2rem / 3.5rem` plus a section step of `clamp(4.5rem, 9vw, 8rem)`. Section padding is generous because the craft bar is Aesop, where space is the material. Sections are separated by a `{colors.stone-line}` hairline on the top edge, never by a gap alone.

**Responsive.** Two breakpoints, both max-width. At **860px** every split collapses to a single column (index rows, hero body, prose splits, visit meta, footer grid) and column gaps drop to the small step. At **560px** the masthead stacks to a left-aligned column and actions become full-width, thumb-height blocks (`padding-block: 1.15rem`), because this page is read one-handed on a phone more often than anywhere else.

Verified in the shipped build: zero horizontal overflow at 360, 390, 834 and 1440px, and zero contrast failures across 58 text elements.

### Named Rules

**The Band, Not the Box Rule.** Structure is expressed as full-bleed horizontal bands (ground, tint, night) separated by hairlines. Never as a boxed container floating on a background.

**The Composition Was Never Comped Rule.** No comp was produced; composition was approved only at finish review. Nothing in this layout — the 5fr/7fr split, the two-line headline, the address-as-heading, the section order — rests on a client-approved design. A later change to the composition must be argued on its own merits and re-reviewed; it must not lean on an approval that does not exist.

## Elevation & Depth

This system has **no shadows at all** — not one `box-shadow` exists in the build, and no gradients, blurs or backdrop filters either. Nothing is lifted, and nothing appears to float.

Depth is produced by exactly two devices. **Tonal banding:** the limestone ground, the stone tint used once mid-page, and the near-black night band at the close. **Rule weight:** the two hairlines, whose relative strength tells the reader whether a boundary is between sections or between rows. Everything sits flat on the paper.

### Named Rules

**The Flat Paper Rule.** Nothing on this page casts a shadow, and nothing ever will. If a new element needs to separate from its surroundings, it changes ground tone or gains a hairline. It does not gain elevation.

## Shapes

There is no radius language: every corner in the build is square (`0`), including the scrollbar thumb. The single exception is a 1px softening on the focus-visible outline, which is imperceptible at ring weight and exists only to keep the corner from reading as a burr.

Actions are rectangles with a 1px border, and that is deliberate: the category's default is a pill, the craft bar's is a rectangle, and the rectangle is the one that holds a serif page together. Icons follow one geometry — 1.5 stroke on a 24 grid, round caps and joins, sized at `1em` so they sit level with uppercase Archivo at label size.

### Named Rules

**The Square Action Rule.** Actions are rectangles. No pills, no capsules, no rounded cards. If a control needs to feel softer, it gets more padding, not more radius.

## Components

### Buttons (Actions)
Square, considered, and slow to change state.
- **Shape:** Sharp rectangle (`0` radius), 1px border, `1.05rem 1.75rem` padding, uppercase Archivo at 0.875rem / 0.055em.
- **Primary:** Solid ink on limestone text (`{components.action-primary}`). Used once per band at most — the hero call action.
- **Ghost:** Transparent with an ink border and ink text; inverts to solid ink on hover. Inside the dark band, the border and text become `{colors.night-fg}` and the hover inverts to night-on-light.
- **Hover / Focus:** Colour-only transitions over `0.4s cubic-bezier(0.16, 1, 0.3, 1)` — background, colour and border only. Nothing lifts, scales or shadows. Focus is the global 2px flint ring at 3px offset.
- **Icon:** Optional leading authored SVG at `1em`, `0.6rem` gap. Never an emoji, never an icon font.
- **Mobile (≤560px):** Full-width, centred, `1.15rem` block padding.

### Links
- **Inline link:** Flint, underlined at 1px with a `0.22em` offset and the underline held at 40% opacity via `color-mix`; on hover the colour deepens and the underline reaches full strength. On the dark band the link takes `{colors.night-fg}` with a 45% underline.
- **Fact link:** Inherits ink colour with a `{colors.stone-line}` bottom border that turns flint on hover — a quieter link for a data row.
- **Phone number:** Display face, `tabular-nums` on, ink turning flint on hover. The closing number is the same treatment scaled up on the dark band, hovering to `opacity: 0.62`.

### Ruled Index (signature component)
The page's defining pattern, and the replacement for a card grid. A `{colors.stone-line}` top rule, then rows in a 5fr/7fr grid with `clamp(2rem, 3.6vw, 3rem)` block padding, each divided by a `{colors.stone-line-soft}` rule; the last row's rule returns to `{colors.stone-line}` to close the list. Left column: title-scale name plus a single italic Text-cut line in flint. Right column: soft-ink body. Set in the manner of a good menu — never a grid of cards.

### Ruled Fact List
The compact sibling of the index: a `{colors.stone-line}` top rule and rows of `0.85rem` block padding, each an Archivo label over a display-face value at 1.15rem, closed by a full-weight rule. Four items in the hero.

### Masthead
A single baseline-aligned row: display-face wordmark at `clamp(1.1rem, 1.4vw, 1.3rem)` on the left, an Archivo place label on the right. No navigation, no logo mark, no sticky behaviour. Stacks to a left-aligned column below 560px.

### Footer
Inside the night band, above a `{colors.night-line}` rule. Three equal columns of Archivo heads over Text-cut content, then a rule, then the safety statement at a 62ch measure, then legal at 0.8125rem in a softened night tone. Single column below 860px.

### Motion
Exactly two moments, and then the page is still.
- **`rise`** — a CSS-only keyframe (1s, opacity + `1.1rem` translate + a `clip-path` un-mask) on the three hero groups at 0 / 120 / 260ms. It runs on load with no observer and no hydration dependency, so the hero is readable before React arrives.
- **`reveal`** — the same gesture as a transition, triggered by IntersectionObserver (`rootMargin: 0px 0px -12% 0px`, `threshold: 0.08`) on the treatments section head and the four index rows at 70ms stagger, with a **3s failsafe** that reveals anything still hidden regardless of scroll.

Both are gated on a `.js` class set synchronously before first paint, so a browser without JS never sees a hidden page. Both are fully disabled under `prefers-reduced-motion: reduce`. Nothing else on the page animates: no parallax, no counters, no hover flourishes beyond colour.

### Named Rules

**The Content Ships Visible Rule.** Animation may only ever remove itself. Hidden-by-default states are gated on JS being present and carry a time-based failsafe; a broken observer, a slow bundle or a disabled script must leave the page fully readable, never blank.

**The One Gesture Rule.** There is one authored motion — rise and un-clip — and it is used twice. A new surface reuses it or moves not at all. A page whose whole argument is restraint cannot twitch.

## Do's and Don'ts

### Do:
- **Do** design every new surface to be complete without images. The no-photography decision is a standing constraint on this world, not a temporary gap.
- **Do** carry structure on the two rule weights: `{colors.stone-line}` between sections and to close a list, `{colors.stone-line-soft}` between rows inside one list.
- **Do** keep flint as language — italic index summaries and inline links, plus hover, focus and selection states. Nothing else.
- **Do** set running copy in Libre Caslon Text at a 44–66ch measure, and secondary copy in `{colors.ink-soft}` (never a neutral grey).
- **Do** use the square action, ink-solid for the one primary call and ghost for the secondary, with colour-only transitions on `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Do** publish a rating figure only alongside its count, one type step apart.
- **Do** theme the browser's own surfaces — selection, caret, accent, scrollbar, focus ring — from this palette, inverting the ring to `{colors.night-fg}` inside the dark band.
- **Do** re-review any composition change at finish review. No comp was produced; composition was approved only at finish review.

### Don't:
- **Don't** add photography, illustration, or generated imagery of any kind.
- **Don't** introduce a card, a tile, a panel, or any boxed container. Ruled lists and ruled bands only.
- **Don't** put a kicker, eyebrow or label above a heading. If a section seems to need one, the heading is underweight — fix the heading.
- **Don't** add a shadow, gradient, blur or backdrop filter. The page is flat paper.
- **Don't** round a corner. Actions are rectangles; pills belong to the category this build refuses.
- **Don't** set a sentence in Archivo, or body copy in Libre Caslon Display.
- **Don't** add a star row, a rating badge, or any icon library — three authored SVGs at 1.5 stroke on a 24 grid are the whole icon set, and there is deliberately no star.
- **Don't** use `{colors.ink-faint}` for running text; it is a decorative tone only.
- **Don't** add a second colour, a second accent, or a third rule weight.
- **Don't** add a new animation. Reuse the one gesture, or stay still.
