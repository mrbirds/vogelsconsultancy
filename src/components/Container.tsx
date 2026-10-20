import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[var(--content-width)] px-[var(--page-gutter)] ${className}`}>
      {children}
    </div>
  );
}
