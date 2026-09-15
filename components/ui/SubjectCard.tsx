import type { Subject } from "@/lib/types";
import { subjectAccent } from "./theme";
import { SubjectIllustration } from "./icons";

interface SubjectCardProps {
  subject: Subject;
  onSelect: () => void;
}

export default function SubjectCard({ subject, onSelect }: SubjectCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`${subject.name}: ${subject.tagline}. ${subject.estimatedMinutes} minutes, ${subject.level}.`}
      className="group flex w-full items-start gap-4 rounded-2xl border border-ink/10 bg-white p-4 text-left transition-all duration-150 ease-out active:scale-[0.98] active:bg-ink/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-ink transition-transform duration-150 group-active:scale-95"
        style={{ backgroundColor: subjectAccent.bg }}
      >
        <SubjectIllustration id={subject.id} className="h-8 w-8" />
      </span>

      <span className="flex min-w-0 flex-1 flex-col gap-1 pt-0.5">
        <span className="font-display text-[16px] font-medium text-ink">{subject.name}</span>
        <span className="text-[13px] leading-snug text-ink-soft">{subject.tagline}</span>
        <span className="mt-0.5 text-[12px] text-ink-soft">
          {subject.estimatedMinutes} min · {subject.level}
        </span>
      </span>
    </button>
  );
}
