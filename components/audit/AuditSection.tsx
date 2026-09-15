import type { ReactNode } from "react";

interface AuditSectionProps {
  heading?: string;
  children: ReactNode;
  className?: string;
}

export default function AuditSection({ heading, children, className = "" }: AuditSectionProps) {
  return (
    <section className={`flex flex-col gap-5 ${className}`}>
      {heading && (
        <h2 className="font-display text-[22px] font-semibold leading-snug text-ink sm:text-[26px]">
          {heading}
        </h2>
      )}
      {children}
    </section>
  );
}
