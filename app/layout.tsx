import type { Metadata, Viewport } from "next";
import { Archivo, Libre_Caslon_Display, Libre_Caslon_Text } from "next/font/google";
import { clinic } from "@/content/site";
import "./globals.css";

/**
 * Caslon is the English text face, and this is an English village clinic — the
 * pairing is provenance rather than decoration. The Display cut carries the
 * hairline contrast the page needs at 6rem; the Text cut is a separate design
 * with the weight put back in, so running copy stays readable at 1.1rem instead
 * of thinning out the way a display Didone does when it is pressed into service
 * as body text.
 *
 * Archivo does the small work only: letterspaced labels, buttons, the footer.
 * It never sets a sentence.
 */
const caslonDisplay = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display-src",
});

const caslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-text-src",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ui-src",
});

const DIRECTION_CONTRACT = `<!--
THESIS: The aesthetics-clinic convention, played straight and at full craft. It refuses
two things: the conceptual world the roll assigned and the user declined, and the
blush-and-rose-gold salon rendition of the same convention.

OWN-WORLD: Pale limestone #F2F0EA over a warm stone tint, one flint-slate #3C5261 as the
only colour, and a near-black stone band anchoring the close. Libre Caslon Display at
display scale against small letterspaced Archivo labels. Hairline rules and ruled
indexes, never cards. No photography anywhere, by decision.

STORY: She works in amounts too small to point at. The clinic is new and says so. Call.

FIRST VIEWPORT: Limestone ground. "Nothing that announces itself." set at 6rem in Caslon
across two lines, one short standfirst beneath, then a solid ink action beside the phone
number. A hairline, then four ruled facts across the foot.

FORM: The category standard, the standing exit, chosen by the user over assigned
direction 5 of 7, an Ordnance Survey sheet of Petts Wood. Seed key 2b843b91.
Craft bar set by the user: Augustinus Bader, Dr. Barbara Sturm, Aesop.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

/**
 * No domain has been signed off, and a guessed one is worse than none: it would
 * ship a canonical URL pointing at somebody else's site. So canonical, og:url
 * and the JSON-LD url only appear once a real address exists.
 * NEXT_PUBLIC_SITE_URL wins; failing that the deployment's own production URL
 * is used, which is not a guess. See the pre-launch list in README.md.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

const DESCRIPTION =
  "Aesthetic injectables in Petts Wood, Orpington, by appointment with Dessi. Anti-wrinkle injections, dermal filler, polynucleotides and skin boosters, placed in small amounts. Call or WhatsApp 07438 399754.";

export const metadata: Metadata = {
  ...(SITE_URL
    ? { metadataBase: new URL(SITE_URL), alternates: { canonical: "/" } }
    : {}),
  title: {
    default: "Dessi Stones Aesthetics · Petts Wood, Orpington",
    template: "%s · Dessi Stones Aesthetics",
  },
  description: DESCRIPTION,
  keywords: [
    "aesthetics clinic Petts Wood",
    "aesthetics clinic Orpington",
    "anti-wrinkle injections Orpington",
    "dermal filler Petts Wood",
    "polynucleotides Bromley",
    "skin boosters Orpington",
    "Dessi Stones Aesthetics",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    ...(SITE_URL ? { url: SITE_URL } : {}),
    siteName: "Dessi Stones Aesthetics",
    title: "Dessi Stones Aesthetics · Petts Wood, Orpington",
    description:
      "Nothing that announces itself. Aesthetic injectables in Petts Wood, by appointment with Dessi.",
  },
  twitter: {
    card: "summary",
    title: "Dessi Stones Aesthetics · Petts Wood, Orpington",
    description:
      "Nothing that announces itself. Aesthetic injectables in Petts Wood, by appointment with Dessi.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f2f0ea",
  colorScheme: "light",
};

/**
 * Structured data. Every value is sourced from the Google Business Profile.
 *
 * `openingHoursSpecification` is deliberately absent: the listing publishes only
 * a Monday opening time and no closing time, and a guessed schedule in structured
 * data is the kind of error that sends someone to a locked door.
 */
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: clinic.fullName,
  description: DESCRIPTION,
  ...(SITE_URL ? { url: SITE_URL } : {}),
  telephone: "+447438399754",
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.street,
    addressLocality: clinic.locality,
    addressRegion: clinic.region,
    postalCode: clinic.postcode,
    addressCountry: clinic.country,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Orpington" },
    { "@type": "AdministrativeArea", name: "Bromley" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: clinic.rating.value,
    reviewCount: clinic.rating.count,
    bestRating: 5,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${caslonDisplay.variable} ${caslonText.variable} ${archivo.variable}`}
    >
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        {/*
          Marks the document as scripted before the first paint, which is what
          lets the reveal styles hide anything at all. Without this the page
          would either flash its hidden state or, if the observer never ran,
          stay blank — so the hidden state is gated on JS being present, not
          assumed.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        {children}
      </body>
    </html>
  );
}
