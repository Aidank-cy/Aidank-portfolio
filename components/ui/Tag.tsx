import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex rounded-full border border-border bg-background px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
      {children}
    </span>
  );
}
