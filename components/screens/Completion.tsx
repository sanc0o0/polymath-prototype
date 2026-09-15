import { categories, getLessonById, getSubjectById } from "@/lib/content";
import Button from "@/components/ui/Button";
import LessonIllustration from "@/components/ui/LessonIllustration";
import ScreenTransition from "@/components/ui/ScreenTransition";
import { categoryAccent } from "@/components/ui/theme";

interface CompletionProps {
  lessonId: string;
  onContinueSubject: () => void;
  onDiscoverSomethingElse: () => void;
}

// SCREEN 6 — closes the loop. Deliberately no XP/points/streaks: just
// a plain recap of what was learned and two honest next actions.
export default function Completion({
  lessonId,
  onContinueSubject,
  onDiscoverSomethingElse,
}: CompletionProps) {
  const lesson = getLessonById(lessonId);
  const subject = lesson ? getSubjectById(lesson.subjectId) : undefined;
  const category = subject ? categories.find((c) => c.id === subject.categoryId) : undefined;
  const accentBg = category ? categoryAccent[category.id].bg : "#DCEFE6";

  return (
    <ScreenTransition>
      <div className="flex flex-1 flex-col gap-6 p-6 pt-10">
        <div className="flex flex-col gap-3">
          <span className="self-start rounded-full bg-ink/[0.06] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-ink-soft">
            Learning complete
          </span>
          <h1 className="font-display text-[26px] font-semibold leading-tight text-ink">
            You learned something new.
          </h1>
          {lesson && (
            <p className="text-[15px] leading-snug text-ink-soft">{lesson.summary}</p>
          )}
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-4">
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-ink"
            style={{ backgroundColor: accentBg }}
          >
            <LessonIllustration visualKey="orbit-loop" className="h-9 w-9" animated={false} />
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="font-display text-[15px] font-medium text-ink">
              {subject?.name ?? "Astronomy"}
            </span>
            <span className="text-[13px] text-ink-soft">1 topic explored</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button variant="primary" className="w-full" onClick={onContinueSubject}>
            Continue learning
          </Button>
          <Button variant="ghost" className="w-full" onClick={onDiscoverSomethingElse}>
            Discover something else
          </Button>
        </div>
      </div>
    </ScreenTransition>
  );
}
