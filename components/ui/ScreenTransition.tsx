import type { ReactNode } from "react";

// A single, restrained entry animation applied per-screen. Deliberately
// not per-element — one moment, not scattered effects. Respects
// prefers-reduced-motion via the .animate-fade-in rule in globals.css.
export default function ScreenTransition({ children }: { children: ReactNode }) {
  return <div className="animate-fade-in flex min-h-full flex-col">{children}</div>;
}
