import { Reveal } from "@/components/Reveal";
import { Rise } from "@/components/Rise";
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import {
  approach,
  clinic,
  close,
  hero,
  legal,
  proof,
  treatments,
  visit,
} from "@/content/site";

/**
 * One page, because there is one clinic, four treatments and one phone number,
 * and splitting that across routes would be furniture rather than architecture.
 *
 * Reading order is the argument: what she does → what it is → how she works →
 * how new the clinic is → where it is → call her. The admission that the clinic
 * is new sits *before* the address on purpose. It is the objection every visitor
 * is already holding, and answering it early is what earns the last scroll.
 */
export default function Page() {
  return (
    <>
      <header className="masthead">
        <div className="shell masthead__inner">
          <span className="wordmark">Dessi Stones Aesthetics</span>
          <span className="masthead__place">
            {clinic.locality}, {clinic.town}
          </span>
        </div>
      </header>

      <main id="main">
        {/* ---------------------------------------------------------------
            Hero. Type carries everything: there is no photograph on this
            page, so the headline is set at the scale a photograph would be.
           --------------------------------------------------------------- */}
        <section className="hero">
          <div className="shell">
            <Rise as="h1" className="hero__headline">
              {hero.headline}
            </Rise>

            <div className="hero__body">
              <Rise delay={120}>
                <p className="lead hero__standfirst">{hero.standfirst}</p>

                <div className="actions">
                  <a className="action action--primary" href={clinic.phoneHref}>
                    <PhoneIcon />
                    {hero.callLabel}
                  </a>
                  <a
                    className="action action--ghost"
                    href={clinic.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon />
                    {hero.whatsappLabel}
                  </a>
                </div>
                <a className="hero__phone tabular" href={clinic.phoneHref}>
                  {clinic.phoneDisplay}
                </a>
              </Rise>

              <Rise delay={260}>
                <dl className="facts">
                  <div>
                    <dt className="label fact__label">Location</dt>
                    <dd className="fact__value">
                      {clinic.locality}, {clinic.town}
                    </dd>
                  </div>
                  <div>
                    <dt className="label fact__label">Appointments</dt>
                    <dd className="fact__value">By call or WhatsApp</dd>
                  </div>
                  <div>
                    <dt className="label fact__label">Treatments</dt>
                    <dd className="fact__value">Injectables and skin boosters</dd>
                  </div>
                  <div>
                    <dt className="label fact__label">Rated</dt>
                    <dd className="fact__value">
                      {/* The count travels with the figure everywhere it appears.
                          A 5.0 with the "1" hidden is exactly the quiet
                          overstatement this site is built to avoid. */}
                      <a href={clinic.mapsHref} target="_blank" rel="noopener noreferrer">
                        {clinic.rating.value.toFixed(1)} from {clinic.rating.count} review
                      </a>
                    </dd>
                  </div>
                </dl>
              </Rise>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Treatments. A ruled index: name and one italic line on the left,
            the plain explanation on the right. This is the substance of the
            page, and it is the only place a nervous visitor gets told what
            these things actually are.
           --------------------------------------------------------------- */}
        <section className="section" id="treatments">
          <div className="shell">
            <Reveal className="section__head">
              <div className="split">
                <h2>{treatments.title}</h2>
                <p className="lead measure section__intro">{treatments.intro}</p>
              </div>
            </Reveal>

            <div className="index">
              {treatments.items.map((item, i) => (
                <Reveal key={item.name} className="index__row" delay={i * 70}>
                  <div>
                    <h3 className="index__name">{item.name}</h3>
                    <p className="index__summary">{item.summary}</p>
                  </div>
                  <p className="index__body">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            How she works. The absence of a booking system is the clinic's
            actual differentiator, so it is stated as a choice, not excused.
           --------------------------------------------------------------- */}
        <section className="section section--tint" id="approach">
          <div className="shell">
            <div className="split">
              <h2>{approach.title}</h2>
              <div className="prose measure">
                {approach.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Proof. One review is one review. Saying so plainly is worth more
            to this audience than a rating badge with the count hidden.
           --------------------------------------------------------------- */}
        <section className="section" id="reviews">
          <div className="shell">
            <div className="split">
              <div>
                <span className="rating__value tabular">
                  {clinic.rating.value.toFixed(1)}
                </span>
                <p className="rating__count">from one review on Google</p>
              </div>

              <div className="prose measure">
                <h2>{proof.title}</h2>
                <p>{proof.body}</p>
                <p>
                  <a
                    className="link"
                    href={clinic.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {proof.linkLabel}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Where. Address, and an honest note that the hours live on Google
            because only the Monday opening time has ever been published.
           --------------------------------------------------------------- */}
        <section className="section" id="visit" aria-label={visit.title}>
          <div className="shell">
            <h2 className="address-statement">
              {clinic.street},
              <span>
                {clinic.locality}, {clinic.town} {clinic.postcode}
              </span>
            </h2>
            <div className="visit__meta">
              <p>{visit.body}</p>
              <p>{visit.hoursNote}</p>
            </div>
            <p className="visit__link">
              <a
                className="link"
                href={clinic.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {visit.directionsLabel}
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* -----------------------------------------------------------------
          The close. The page's one dark band, so the last thing on screen
          is the phone number at the largest size it appears anywhere.
         ----------------------------------------------------------------- */}
      <div className="night">
        <section className="close">
          <div className="shell">
            <h2 className="measure-tight">{close.title}</h2>
            <p className="lead measure">{close.body}</p>
            <a className="close__number tabular" href={clinic.phoneHref}>
              {clinic.phoneDisplay}
            </a>
            <div className="actions">
              <a
                className="action action--ghost"
                href={clinic.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Message on WhatsApp
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="shell">
            <div className="footer__grid">
              <div>
                <span className="footer__head">The clinic</span>
                <address>
                  Dessi Stones Aesthetics
                  <br />
                  {clinic.street}
                  <br />
                  {clinic.locality}, {clinic.town}
                  <br />
                  {clinic.postcode}
                </address>
              </div>
              <div>
                <span className="footer__head">Contact</span>
                <a className="link tabular" href={clinic.phoneHref}>
                  {clinic.phoneDisplay}
                </a>
                <br />
                <a
                  className="link"
                  href={clinic.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
              <div>
                <span className="footer__head">Find us</span>
                <a
                  className="link"
                  href={clinic.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions and hours
                </a>
              </div>
            </div>

            <p className="footer__safety">{legal.safety}</p>
            <p className="footer__legal">
              &copy; {new Date().getFullYear()} Dessi Stones Aesthetics
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
