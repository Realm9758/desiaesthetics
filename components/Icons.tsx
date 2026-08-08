/**
 * Drawn icons, one stroke weight, one corner language. There are four of them
 * because four is all the page needs — no icon library, and no emoji standing
 * in for a symbol.
 *
 * Stroke icons are 1.5 at a 24 grid so they sit level with uppercase Archivo
 * at label size. The star is solid because a hairline star at 15px turns to mush.
 */

type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M6.6 3.5h-2A1.6 1.6 0 0 0 3 5.2C3 14 10 21 18.8 21a1.6 1.6 0 0 0 1.7-1.6v-2a1.1 1.1 0 0 0-.9-1.1l-3.2-.6a1.1 1.1 0 0 0-1.1.5l-.9 1.4a13.4 13.4 0 0 1-6-6l1.4-.9a1.1 1.1 0 0 0 .5-1.1l-.6-3.2a1.1 1.1 0 0 0-1.1-.9Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M3.4 20.6l1.3-4.4A8.3 8.3 0 1 1 7.9 19.2l-4.5 1.4Z" />
      <path d="M9 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2.1.4 0 .6l-.4.5c-.1.2-.2.3-.1.5a6 6 0 0 0 2.7 2.3c.2.1.4 0 .5-.1l.5-.6c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.4v.5c0 .5-.5 1.1-1 1.3a2 2 0 0 1-1.4.1 9.6 9.6 0 0 1-5.6-5 2.6 2.6 0 0 1 .4-2.9Z" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2.6l2.7 6.1 6.6.6-5 4.4 1.5 6.5-5.8-3.5-5.8 3.5 1.5-6.5-5-4.4 6.6-.6Z" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
