# Dessi Stones Aesthetics

Marketing site for Dessi Stones Aesthetics, a skin and injectables clinic at
215–217A Petts Wood Road, Petts Wood, Orpington BR5 1LA.

Next.js 15 + React 19, plain CSS, no UI libraries and no runtime dependencies
beyond React. Every string the site renders lives in [`content/site.ts`](content/site.ts).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # standard Next build (Vercel and friends)
npm run export     # STATIC_EXPORT=1 → a folder of static files in out/
```

---

## Before this goes live

These are the things nobody has confirmed yet. The site is deliberately silent
about all of them rather than carrying a plausible guess, so none of them block
launch — but each one is a real improvement once you have the answer.

### Must be confirmed

| # | Item | Why it matters |
|---|------|----------------|
| 1 | **Opening hours** | The Google listing publishes only "opens 10am Monday" and no closing time. The site says hours are kept current on Google and links there. Give me the full week and I will put it on the page and into the structured data. |
| 2 | **Qualifications and registration** | Nothing about training, registration, insurer or prescriber status appears anywhere, because none of it was supplied. For an injectables clinic this is the single strongest trust signal available, and it is currently missing. |
| 3 | **Prices** | No price, "from" price or range appears. Most visitors want a number before they call. |
| 4 | **Treatment list** | Confirmed as injectables and skin boosters: anti-wrinkle injections, dermal filler, polynucleotides, skin boosters. If anything is wrong or missing, correct `treatments` in `content/site.ts`. |
| 5 | **"Dessi answers the phone"** | The site states that the person who answers the number is the person who treats you. That follows from a personal mobile being the only contact, but it is an inference — confirm it, or I will soften the wording. |
| 6 | **"A short walk from the station"** | Petts Wood station is roughly 500m from this stretch of Petts Wood Road. Confirm it reads fairly. |
| 7 | **Safety footnote** | The footer carries a generic line: "Injectable treatments are medical procedures. Suitability is assessed individually…". It is a standard statement, not your policy. Replace it with your own wording if you prefer. |
| 8 | **Domain** | No domain is set, so no canonical URL, `og:url` or JSON-LD `url` is emitted — a guessed one would point search engines at somebody else's site. Set `NEXT_PUBLIC_SITE_URL` and all three appear. |
| 9 | **Google place link** | Directions and review links use a name-and-address search URL, which resolves correctly but is not canonical. Send the real Google place URL and I will swap it in `clinic.mapsHref`. |

### Deliberately absent

- **No photography.** By decision, not omission — there was none to use, and stock
  skin photography is the fastest way to look like every other clinic in Orpington.
  The page is built to be finished without it. If you later have real photos of the
  room or of Dessi, they will slot in without redesigning anything.
- **No testimonials.** There is one Google review and its text was not available.
  Nothing has been written, paraphrased or invented in its place.
- **No social links.** No Instagram or Facebook presence was findable. Send handles
  and they go in the footer and into the JSON-LD `sameAs`.

---

## The one rule that is not negotiable

**The brand name of the anti-wrinkle injectable must never appear on this site.**

UK law prohibits advertising prescription-only medicines to the public. That
covers body copy, headings, alt text, meta description, structured data, image
filenames, and quoted reviews — a review that names the brand cannot be published
verbatim. Generic description ("anti-wrinkle injections") is the only permitted
form, and that is what `content/site.ts` uses throughout.

Dermal filler and skin boosters are devices rather than prescription medicines
and may be described generically without the same restriction.

---

## Design

The visual direction is recorded as an HTML comment at the top of the rendered
body (see `DIRECTION_CONTRACT` in [`app/layout.tsx`](app/layout.tsx)) and it
survives the production build, so it can be audited against the shipped page.

In short: the aesthetics-clinic convention executed at full craft, held to the
level of Augustinus Bader, Dr. Barbara Sturm and Aesop. Pale limestone ground,
one flint-slate accent, a single dark stone band anchoring the close. Libre
Caslon Display at display scale against small letterspaced Archivo labels.
Hairline rules and ruled indexes, never cards.

Design tokens and component rules are documented in `DESIGN.md`.

### Accessibility

WCAG 2.2 AA contrast throughout, keyboard operable, visible focus rings drawn
from the palette, `prefers-reduced-motion` respected, and full-width thumb-height
actions on phones. Verified free of horizontal overflow at 360, 390, 834 and
1440px.

The hero animates with CSS only, so it never depends on a JavaScript bundle
arriving in order to be readable; scroll reveals below the fold use
IntersectionObserver with a three-second failsafe.
