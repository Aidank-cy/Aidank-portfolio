import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-accent text-accent-foreground hover:translate-y-[-1px] hover:shadow-[0_18px_45px_rgba(85,124,250,0.28)]",
  secondary:
    "border border-border bg-panel text-foreground hover:border-accent hover:text-accent",
  ghost: "text-muted-foreground hover:text-foreground",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.02em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
