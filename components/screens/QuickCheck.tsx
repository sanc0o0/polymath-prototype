"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { getLessonById } from "@/lib/content";
import Button from "@/components/ui/Button";
import ScreenTransition from "@/components/ui/ScreenTransition";
import { CheckCircleIcon, XCircleIcon } from "@/components/ui/icons";
import type { QuizOption } from "@/lib/types";

interface QuickCheckProps {
  lessonId: string;
  onComplete: () => void;
}

// SCREEN 5 — one question, answered once. Correctness is always shown
// with both color AND an icon/text label, never color alone.
export default function QuickCheck({ lessonId, onComplete }: QuickCheckProps) {
  const lesson = getLessonById(lessonId);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  if (!lesson) {
    return (
      <ScreenTransition>
        <div className="flex flex-1 flex-col gap-4 p-6 pt-6">
          <p className="text-[14px] text-ink-soft">This question isn&apos;t available.</p>
        </div>
      </ScreenTransition>
    );
  }

  const { quiz } = lesson;
  const hasAnswered = selectedOptionId !== null;
  const isCorrect = selectedOptionId === quiz.correctOptionId;

  return (
    <ScreenTransition>
      <div className="flex flex-1 flex-col gap-6 p-6 pt-8">
        <div className="flex flex-col gap-2">
          <span className="self-start rounded-full bg-ink/[0.06] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-ink-soft">
            Quick check
          </span>
          <h1 className="font-display text-[21px] font-semibold leading-snug text-ink">
            {quiz.prompt}
          </h1>
        </div>

        <div className="flex flex-col gap-2.5">
          {quiz.options.map((option) => (
            <QuizOptionRow
              key={option.id}
              option={option}
              hasAnswered={hasAnswered}
              isSelected={selectedOptionId === option.id}
              isCorrectOption={option.id === quiz.correctOptionId}
              onSelect={() => setSelectedOptionId(option.id)}
            />
          ))}
        </div>

        {hasAnswered && (
          <div
            role="status"
            className={`flex items-start gap-2.5 rounded-2xl border p-4 ${
              isCorrect
                ? "border-success/30 bg-success-soft"
                : "border-danger/30 bg-danger-soft"
            }`}
          >
            {isCorrect ? (
              <CheckCircleIcon className="h-5 w-5 shrink-0 text-success" />
            ) : (
              <XCircleIcon className="h-5 w-5 shrink-0 text-danger" />
            )}
            <div className="flex flex-col gap-0.5">
              <span className={`text-[13px] font-medium ${isCorrect ? "text-success" : "text-danger"}`}>
                {isCorrect ? "Correct" : "Not quite"}
              </span>
              <p className="text-[14px] leading-snug text-ink">
                {isCorrect ? quiz.correctFeedback : quiz.incorrectFeedback}
              </p>
            </div>
          </div>
        )}

        {hasAnswered && (
          <Button variant="primary" className="w-full" onClick={onComplete}>
            Continue
          </Button>
        )}
      </div>
    </ScreenTransition>
  );
}

function QuizOptionRow({
  option,
  hasAnswered,
  isSelected,
  isCorrectOption,
  onSelect,
}: {
  option: QuizOption;
  hasAnswered: boolean;
  isSelected: boolean;
  isCorrectOption: boolean;
  onSelect: () => void;
}) {
  // Three visual states once answered: the correct option (always
  // highlighted, even if the user didn't pick it), the selected wrong
  // option, and the remaining unselected/unpicked options (dimmed).
  let stateClasses =
    "border-ink/10 bg-white text-ink active:scale-[0.98] active:bg-ink/[0.03]";
  let icon: ReactNode = null;

  if (hasAnswered) {
    if (isCorrectOption) {
      stateClasses = "border-success/40 bg-success-soft text-ink";
      icon = <CheckCircleIcon className="h-5 w-5 shrink-0 text-success" />;
    } else if (isSelected) {
      stateClasses = "border-danger/40 bg-danger-soft text-ink";
      icon = <XCircleIcon className="h-5 w-5 shrink-0 text-danger" />;
    } else {
      stateClasses = "border-ink/10 bg-white text-ink-soft";
    }
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={hasAnswered}
      aria-pressed={isSelected}
      className={`flex w-full items-center justify-between gap-3 rounded-2xl border p-4 text-left text-[15px] leading-snug transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none ${stateClasses}`}
    >
      <span>{option.label}</span>
      {icon}
    </button>
  );
}
