import { categories, getLessonForSubject, getSubjectById } from "@/lib/content";
import Button from "@/components/ui/Button";
import LessonIllustration from "@/components/ui/LessonIllustration";
import ScreenTransition from "@/components/ui/ScreenTransition";
import { ArrowLeftIcon } from "@/components/ui/icons";
import { categoryAccent } from "@/components/ui/theme";

interface RecommendationProps {
  subjectId: string;
  onStartLesson: (lessonId: string) => void;
  onBack: () => void;
}

// SCREEN 3 — exactly one featured recommendation, on purpose. This is
// the screen that directly tests the choice-paralysis hypothesis: no
// list to browse, just one obvious next action and a quiet way out.
export default function Recommendation({ subjectId, onStartLesson, onBack }: RecommendationProps) {
  const lesson = getLessonForSubject(subjectId);
  const subject = getSubjectById(subjectId);
  const category = subject ? categories.find((c) => c.id === subject.categoryId) : undefined;

  if (!lesson) {
    return (
      <ScreenTransition>
        <div className="flex flex-1 flex-col gap-4 p-6 pt-6">
          <BackLink onClick={onBack} label="Back" />
          <p className="text-[14px] text-ink-soft">
            No lesson is built for this subject yet in the prototype.
          </p>
        </div>
      </ScreenTransition>
    );
  }

  const accentBg = category ? categoryAccent[category.id].bg : "#DCEFE6";

  return (
    <ScreenTransition>
      <div className="flex flex-1 flex-col gap-6 p-6 pt-6">
        <BackLink onClick={onBack} label="Back" />

        <div className="flex flex-col gap-3">
          {category && (
            <span
              className="self-start rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-ink"
              style={{ backgroundColor: accentBg }}
            >
              {category.label}
            </span>
          )}
          <h1 className="font-display text-[26px] font-semibold leading-tight text-ink">
            Start with this
          </h1>
          <p className="text-[15px] leading-snug text-ink-soft">
            One small idea. About {lesson.estimatedMinutes} minutes.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-5">
          <div
            className="flex h-32 items-center justify-center rounded-xl"
            style={{ backgroundColor: accentBg }}
          >
            <LessonIllustration visualKey="orbit-loop" className="h-24 w-24 text-ink" animated={false} />
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="font-display text-[19px] font-semibold leading-snug text-ink">
              {lesson.title}
            </h2>
            <p className="text-[13px] text-ink-soft">
              {lesson.estimatedMinutes} min · {lesson.level}
            </p>
            <p className="text-[14px] leading-snug text-ink-soft">{lesson.recommendationReason}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button variant="primary" className="w-full" onClick={() => onStartLesson(lesson.id)}>
            Start learning
          </Button>
          <Button variant="ghost" className="w-full" onClick={onBack}>
            Pick something else
          </Button>
        </div>
      </div>
    </ScreenTransition>
  );
}

function BackLink({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="-ml-1 flex items-center gap-1 self-start rounded-md px-1 py-1 text-[14px] text-ink-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
    >
      <ArrowLeftIcon className="h-4 w-4" />
      {label}
    </button>
  );
}
