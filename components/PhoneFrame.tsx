import type { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
}

// Wraps the prototype in a mobile-device-shaped frame on larger
// screens, and lets it go full-bleed on an actual mobile viewport.
export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#e7e6e0] sm:p-10">
      <div className="relative flex h-screen w-full flex-col overflow-hidden bg-paper sm:h-[844px] sm:w-[390px] sm:rounded-[2.75rem] sm:border-[10px] sm:border-ink sm:shadow-[0_30px_60px_-15px_rgba(23,20,33,0.35)]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 z-10 hidden h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-ink sm:block"
        />
        <div className="flex-1 overflow-y-auto overscroll-contain">{children}</div>
      </div>
    </div>
  );
}
