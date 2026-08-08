import type { ElementType, ReactNode } from "react";

/**
 * The above-the-fold entrance. Pure CSS, deliberately: the hero must never
 * depend on a React bundle arriving in order to be readable.
 *
 * Without JS the `.js` gate is absent and the content is simply there. With JS
 * the animation runs on load, so there is no observer, no hydration wait, and
 * no window in which the first thing a visitor sees is an empty page.
 *
 * Below the fold, where a blank region costs nothing until it is scrolled to,
 * `Reveal` uses IntersectionObserver instead.
 */
export function Rise({
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
  return (
    <Tag
      className={className ? `rise ${className}` : "rise"}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
