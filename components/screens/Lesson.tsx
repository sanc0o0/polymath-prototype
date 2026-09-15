"use client";

import { useState } from "react";
import { getLessonById } from "@/lib/content";
import Button from "@/components/ui/Button";
import LessonIllustration from "@/components/ui/LessonIllustration";
import LessonProgress from "@/components/ui/LessonProgress";
import ScreenTransition from "@/components/ui/ScreenTransition";
import { ArrowLeftIcon } from "@/components/ui/icons";

interface LessonProps {
  lessonId: string;
  onFinishLesson: () => void;
  onBack: () => void;
}

// SCREEN 4 — three short steps, one visual each. Step is tracked as
// local component state (per the approved architecture note) rather
// than lifted into the app-level flow state — nothing outside this
// screen needs to know which step the user is on.
export default function Lesson({ lessonId, onFinishLesson, onBack }: LessonProps) {
  const lesson = getLessonById(lessonId);
  const [stepIndex, setStepIndex] = useState(0);

  if (!lesson) {
    return (
      <ScreenTransition>
        <div className="flex flex-1 flex-col gap-4 p-6 pt-6">
          <BackLink onClick={onBack} label="Back" />
          <p className="text-[14px] text-ink-soft">This lesson isn&apos;t available.</p>
        </div>
      </ScreenTransition>
    );
  }

  const step = lesson.steps[stepIndex];
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === lesson.steps.length - 1;

  const handleBack = () => {
    if (isFirstStep) {
      onBack();
    } else {
      setStepIndex((i) => i - 1);
    }
  };

  const handleNext = () => {
    if (isLastStep) {
      onFinishLesson();
    } else {
      setStepIndex((i) => i + 1);
    }
  };

  return (
    <ScreenTransition key={step.id}>
      <div className="flex flex-1 flex-col gap-6 p-6 pt-6">
        <BackLink
          onClick={handleBack}
          label={isFirstStep ? "Back" : "Previous step"}
        />

        <LessonProgress currentStep={stepIndex + 1} totalSteps={lesson.steps.length} />

        <div className="flex h-44 items-center justify-center rounded-2xl bg-signal-soft">
          <LessonIllustration
            visualKey={step.visualKey}
            className="h-full w-full p-4 text-ink"
            animated={step.visualKey === "orbit-loop"}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-display text-[21px] font-semibold leading-snug text-ink">
            {step.title}
          </h2>
          <p className="text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
        </div>

        <div className="mt-auto pt-2">
          <Button variant="primary" className="w-full" onClick={handleNext}>
            {isLastStep ? "Check what you learned" : "Next"}
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
