/**
 * Every string the site renders lives here.
 *
 * SOURCING RULE (see PRODUCT.md → Product Principles): a fact appears on this
 * site only if it came from the clinic's Google Business Profile or from the
 * owner's own confirmation. Nothing here is estimated, rounded, or inferred
 * from what a clinic of this kind "usually" does.
 *
 * Deliberately absent, because nobody has supplied them yet — see README.md:
 *   · prices, "from" prices, and price ranges
 *   · practitioner qualifications, registration and insurer
 *   · full opening hours (only the Monday opening time is published)
 *   · consultation, aftercare, deposit and cancellation policy
 *   · the text of the single Google review
 *   · social media handles
 *
 * REGULATORY RULE (binding, UK): prescription-only medicines may not be
 * advertised to the public. The brand name of the anti-wrinkle injectable must
 * never appear in this file, in markup, in alt text, in metadata, or in
 * structured data. Generic description is the only permitted form.
 */

export const clinic = {
  name: "Dessi Stones",
  fullName: "Dessi Stones Aesthetics",
  practitioner: "Dessi",

  /** Google Business Profile. En dash, because it is a number range. */
  street: "215–217A Petts Wood Road",
  locality: "Petts Wood",
  town: "Orpington",
  region: "Greater London",
  postcode: "BR5 1LA",
  country: "GB",

  /** Google Business Profile. A personal mobile: call and WhatsApp both reach it. */
  phoneDisplay: "07438 399754",
  phoneHref: "tel:+447438399754",
  whatsappHref: "https://wa.me/447438399754",

  /**
   * Google Business Profile. The count is shown wherever the rating is shown.
   * A 5.0 with the "1" hidden would be the kind of quiet overstatement this
   * whole site is built to avoid.
   */
  rating: { value: 5.0, count: 1 },

  /**
   * No place ID has been supplied, so these are name-and-address search URLs
   * rather than a canonical place link. They resolve correctly today; swap
   * them for the real Google place URL when it is to hand (README).
   */
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Dessi+Stones+Aesthetics+215-217A+Petts+Wood+Road+Orpington+BR5+1LA",
} as const;

export const hero = {
  eyebrowless: true, // the heading carries itself; there is no kicker above it
  headline: "Nothing that\nannounces itself.",
  standfirst:
    "Aesthetic injectables in Petts Wood, by appointment with Dessi. Small amounts, placed carefully, with the aim that nobody can point at what changed.",
  callLabel: "Call the clinic",
  whatsappLabel: "WhatsApp",
} as const;

/**
 * Treatment copy explains what each treatment *is*. That is general clinical
 * knowledge and safe to state. What it never does is describe how this clinic
 * performs it, how long it takes, what it costs, or what result it will give,
 * because none of that has been confirmed.
 */
export const treatments = {
  title: "What Dessi treats",
  intro:
    "Four things, done properly, rather than a menu that runs to two pages. If what you want is not here, ask, and you will get a straight answer about whether it is something for this clinic.",
  items: [
    {
      name: "Anti-wrinkle injections",
      summary: "For lines that appear when you move.",
      body:
        "A muscle-relaxing injectable, placed in small amounts, to soften the lines that form when you frown, smile or raise your brows. It works on movement rather than on lines already sitting in the skin at rest, and it wears off over a few months, so nothing about it is permanent.",
    },
    {
      name: "Dermal filler",
      summary: "For volume and contour.",
      body:
        "A gel, usually hyaluronic acid, used to restore volume where the face has lost it or to refine a contour. Used conservatively it is a way of putting something back, rather than adding something that was never there in the first place.",
    },
    {
      name: "Polynucleotides",
      summary: "For skin quality, not shape.",
      body:
        "An injectable that works on the condition of the skin itself rather than on volume or contour. It is given as a short course, and it is the option chosen when the concern is texture, thinness or crepiness rather than a line or a hollow.",
    },
    {
      name: "Skin boosters",
      summary: "For hydration, held in the skin.",
      body:
        "Hydration placed into the skin rather than onto it. Given as a course, the intention is to improve how the skin holds water and catches light, which tends to read as looking well rather than as having had something done.",
    },
  ],
} as const;

export const approach = {
  title: "One number, and Dessi answers it",
  body: [
    "There is no booking system here and no receptionist. The number on this page is a mobile, and appointments are arranged by call or by WhatsApp message, whichever you find easier.",
    "That is deliberate rather than makeshift. It means the person you speak to before your appointment is the person you see at it, and the person you message afterwards if you have a question.",
  ],
} as const;

export const proof = {
  title: "The clinic is new",
  body:
    "It would be easy to write around that. Instead: there is one review on Google, and it is a five. If you would rather wait until there are twenty, that is a reasonable thing to do, and the clinic will still be here.",
  linkLabel: "Read it on Google",
} as const;

export const visit = {
  title: "Finding the clinic",
  body:
    "A short walk from the station, on the main parade. Appointments only, so please call or send a message before coming.",
  hoursNote: "Opening hours are kept current on the Google listing.",
  directionsLabel: "Get directions",
} as const;

export const close = {
  title: "Ask her anything first",
  body:
    "Most people want to ask a question before they commit to anything, and that is expected. Call, or send a message, and describe what is bothering you in your own words.",
} as const;

/**
 * A general safety statement, not a description of this clinic's policy.
 * Flagged in README.md for the owner to confirm or replace with her own wording.
 */
export const legal = {
  safety:
    "Injectable treatments are medical procedures. Suitability is assessed individually, and not every treatment is appropriate for every person.",
} as const;
