"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * The page's one authored motion: content rises and un-clips as it arrives,
 * once, and then the page is still. There are no hover flourishes anywhere
 * else, because a page whose whole argument is restraint cannot twitch.
 *
 * Content ships visible. `.js` is added to <html> synchronously before first
 * paint (see layout.tsx), so the hidden state only ever exists in a browser
 * that is definitely going to reveal it again — and IntersectionObserver
 * failing for any reason leaves the page readable rather than blank.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(node);

    /* Failsafe. Nothing on this page is allowed to stay invisible because an
       observer misbehaved, so anything still hidden after three seconds is
       shown regardless of whether it was ever scrolled to. */
    const failsafe = window.setTimeout(() => node.classList.add("is-in"), 3000);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
