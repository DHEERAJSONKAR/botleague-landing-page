import type { ReactNode } from "react";

interface CornerFrameProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
  color?: "red" | "blue";
}

const CORNER_BASE = "absolute w-3.5 h-3.5 transition-all duration-300";

/**
 * Signature visual motif: viewfinder-style corner brackets, echoing the
 * broadcast / scoreboard language of a robotics arena. Wraps cards across
 * Competitions, Categories, Disciplines, and the Ecosystem sections so the
 * "arena HUD" feeling is consistent site-wide.
 */
export default function CornerFrame({
  children,
  className = "",
  active = false,
  color = "red",
}: CornerFrameProps) {
  const borderColor = color === "red" ? "border-red-arena" : "border-blue-accent";
  const opacity = active ? "opacity-100" : "opacity-40 group-hover:opacity-100";

  return (
    <div className={`relative ${className}`}>
      <span
        className={`${CORNER_BASE} ${opacity} top-0 left-0 border-t-2 border-l-2 ${borderColor}`}
        aria-hidden="true"
      />
      <span
        className={`${CORNER_BASE} ${opacity} top-0 right-0 border-t-2 border-r-2 ${borderColor}`}
        aria-hidden="true"
      />
      <span
        className={`${CORNER_BASE} ${opacity} bottom-0 left-0 border-b-2 border-l-2 ${borderColor}`}
        aria-hidden="true"
      />
      <span
        className={`${CORNER_BASE} ${opacity} bottom-0 right-0 border-b-2 border-r-2 ${borderColor}`}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
