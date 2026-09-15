"use client";

import Link from "next/link";
import Discovery from "@/components/screens/Discovery";
import SubjectPicker from "@/components/screens/SubjectPicker";
import Recommendation from "@/components/screens/Recommendation";
import Lesson from "@/components/screens/Lesson";
import QuickCheck from "@/components/screens/QuickCheck";
import Completion from "@/components/screens/Completion";

const LESSON_ID = "how-do-planets-stay-in-orbit";
const noop = () => {};

const screens = [
  {
    title: "Discovery",
    caption: "Start with a broad direction instead of a long list of individual topics.",
    node: <Discovery onSelectCategory={noop} onSurpriseMe={noop} />,
  },
  {
    title: "Subject Picker",
    caption: "Show only a few subjects so the next decision is smaller.",
    node: <SubjectPicker categoryId="science" onSelectSubject={noop} onBack={noop} />,
  },
  {
    title: "Recommendation",
    caption: "Instead of asking the user to choose again, suggest one specific thing to learn.",
    node: <Recommendation subjectId="astronomy" onStartLesson={noop} onBack={noop} />,
  },
  {
    title: "Lesson",
    caption: "Explain one astronomy concept using three short visual steps.",
    node: <Lesson lessonId={LESSON_ID} onFinishLesson={noop} onBack={noop} />,
  },
  {
    title: "Quick Check",
    caption: "Ask one question to make the user retrieve the idea.",
    node: <QuickCheck lessonId={LESSON_ID} onComplete={noop} />,
  },
  {
    title: "Completion",
    caption: "End with a clear choice about what to do next.",
    node: <Completion lessonId={LESSON_ID} onContinueSubject={noop} onDiscoverSomethingElse={noop} />,
  },
];

// These are the real screen components at their real size (390x844),
// scaled down visually. Not recreated mockups, so they stay accurate
// automatically if the prototype changes. Marked inert (pointer-events
// disabled) rather than left tappable, since their callbacks are no-ops
// here and a dead tap would feel broken; the link below goes to the
// actual working prototype instead.
export default function PrototypeShowcase() {
  return (
    <div className="flex flex-col gap-5">
      <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 sm:mx-0 sm:px-0">
        {screens.map((screen, i) => (
          <figure key={screen.title} className="flex w-[215px] shrink-0 snap-start flex-col gap-3">
            <div className="h-[465px] w-[215px] overflow-hidden rounded-[1.5rem] border border-ink/15 bg-paper">
              <div
                className="h-[844px] w-[390px] origin-top-left scale-[0.551] select-none"
                inert
                aria-hidden="true"
              >
                {screen.node}
              </div>
            </div>
            <figcaption className="flex flex-col gap-0.5">
              <p className="text-[13px] font-medium text-ink">
                {i + 1}. {screen.title}
              </p>
              <p className="text-[13px] leading-snug text-ink-soft">{screen.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <Link
        href="/"
        className="inline-flex w-fit items-center gap-1.5 rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-[14px] font-medium text-ink transition-all duration-150 active:scale-[0.98] active:bg-ink/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      >
        Open the live prototype
      </Link>
    </div>
  );
}
