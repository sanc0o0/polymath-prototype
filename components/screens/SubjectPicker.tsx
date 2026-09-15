import { getSubjectsForCategory } from "@/lib/content";
import type { CategoryId } from "@/lib/types";
import SubjectCard from "@/components/ui/SubjectCard";
import ScreenTransition from "@/components/ui/ScreenTransition";
import { ArrowLeftIcon } from "@/components/ui/icons";

interface SubjectPickerProps {
  categoryId: CategoryId;
  onSelectSubject: (subjectId: string) => void;
  onBack: () => void;
}

// SCREEN 2 — only Science is populated with real subjects (per the
// approved scope). Other categories show an honest "not built yet"
// state rather than fake content.
export default function SubjectPicker({
  categoryId,
  onSelectSubject,
  onBack,
}: SubjectPickerProps) {
  const subjects = getSubjectsForCategory(categoryId);

  return (
    <ScreenTransition>
      <div className="flex flex-1 flex-col gap-6 p-6 pt-6">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to categories"
          className="-ml-1 flex items-center gap-1 self-start rounded-md px-1 py-1 text-[14px] text-ink-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back
        </button>

        {subjects.length > 0 ? (
          <>
            <div className="flex flex-col gap-2">
              <h1 className="font-display text-[24px] font-semibold leading-tight text-ink">
                Pick something interesting
              </h1>
              <p className="text-[15px] leading-snug text-ink-soft">
                Start small. You can always explore more later.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {subjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  onSelect={() => onSelectSubject(subject.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <EmptyCategoryState onBack={onBack} />
        )}
      </div>
    </ScreenTransition>
  );
}

function EmptyCategoryState({ onBack }: { onBack: () => void }) {
  return (
    <div className="mt-2 flex flex-col gap-4 rounded-2xl border border-dashed border-ink/20 p-5">
      <div className="flex flex-col gap-1.5">
        <p className="text-[15px] leading-snug text-ink">
          This part of the prototype isn&apos;t built yet.
        </p>
        <p className="text-[13px] leading-snug text-ink-soft">
          The full flow only goes deep on Science → Astronomy for now.
        </p>
      </div>
      <button
        type="button"
        onClick={onBack}
        className="self-start rounded-xl bg-ink px-4 py-2.5 text-[14px] font-medium text-white transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      >
        Back to categories
      </button>
    </div>
  );
}
