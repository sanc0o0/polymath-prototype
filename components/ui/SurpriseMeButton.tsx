import { SparkIcon } from "./icons";

interface SurpriseMeButtonProps {
  onClick: () => void;
}

// Deliberately not styled as a sixth category: no filled chip, a dashed
// outline instead of a solid border, centered rather than left-aligned.
// This is meant to read as "a different kind of action," not "one more
// option in the list."
export default function SurpriseMeButton({ onClick }: SurpriseMeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Surprise me — skip ahead to a recommended lesson"
      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-ink/25 py-3.5 text-[14px] font-medium text-ink transition-all duration-150 active:scale-[0.98] active:bg-ink/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <SparkIcon className="h-4 w-4 text-signal" />
      Surprise me
    </button>
  );
}
