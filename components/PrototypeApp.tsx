"use client";

import { useState } from "react";
import type { CategoryId, ScreenId } from "@/lib/types";
import Discovery from "./screens/Discovery";
import SubjectPicker from "./screens/SubjectPicker";
import Recommendation from "./screens/Recommendation";
import Lesson from "./screens/Lesson";
import QuickCheck from "./screens/QuickCheck";
import Completion from "./screens/Completion";

// The whole prototype's navigation state lives here as plain React
// state — no router, no global store. This is a single linear-ish
// session flow, not a multi-page app, so this is intentionally the
// simplest thing that works (see approved plan, Section D).
interface FlowState {
  screen: ScreenId;
  categoryId: CategoryId | null;
  subjectId: string | null;
  lessonId: string | null;
}

const initialState: FlowState = {
  screen: "discovery",
  categoryId: null,
  subjectId: null,
  lessonId: null,
};

// Small fallback shown if we somehow land on a screen without the
// state it needs (shouldn't happen via normal navigation, but this
// avoids calling setState during render, which React disallows).
function BrokenStateFallback({ onReset }: { onReset: () => void }) {
  return (
    <div className="p-6 flex flex-col gap-4">
      <p className="text-zinc-500 text-sm">Something went wrong with navigation.</p>
      <button onClick={onReset} className="border rounded-lg p-3 font-medium">
        Start over
      </button>
    </div>
  );
}

export default function PrototypeApp() {
  const [state, setState] = useState<FlowState>(initialState);
  const reset = () => setState(initialState);

  switch (state.screen) {
    case "discovery":
      return (
        <Discovery
          onSelectCategory={(categoryId) =>
            setState((s) => ({ ...s, screen: "subjectPicker", categoryId }))
          }
          onSurpriseMe={() =>
            setState((s) => ({
              ...s,
              screen: "recommendation",
              categoryId: "science",
              subjectId: "astronomy",
            }))
          }
        />
      );

    case "subjectPicker":
      if (!state.categoryId) {
        return <BrokenStateFallback onReset={reset} />;
      }
      return (
        <SubjectPicker
          categoryId={state.categoryId}
          onSelectSubject={(subjectId) =>
            setState((s) => ({ ...s, screen: "recommendation", subjectId }))
          }
          onBack={() => setState((s) => ({ ...s, screen: "discovery" }))}
        />
      );

    case "recommendation":
      if (!state.subjectId) {
        return <BrokenStateFallback onReset={reset} />;
      }
      return (
        <Recommendation
          subjectId={state.subjectId}
          onStartLesson={(lessonId) =>
            setState((s) => ({ ...s, screen: "lesson", lessonId }))
          }
          onBack={() => setState((s) => ({ ...s, screen: "subjectPicker" }))}
        />
      );

    case "lesson":
      if (!state.lessonId) {
        return <BrokenStateFallback onReset={reset} />;
      }
      return (
        <Lesson
          lessonId={state.lessonId}
          onFinishLesson={() => setState((s) => ({ ...s, screen: "quickCheck" }))}
          onBack={() => setState((s) => ({ ...s, screen: "recommendation" }))}
        />
      );

    case "quickCheck":
      if (!state.lessonId) {
        return <BrokenStateFallback onReset={reset} />;
      }
      return (
        <QuickCheck
          lessonId={state.lessonId}
          onComplete={() => setState((s) => ({ ...s, screen: "completion" }))}
        />
      );

    case "completion":
      if (!state.lessonId) {
        return <BrokenStateFallback onReset={reset} />;
      }
      return (
        <Completion
          lessonId={state.lessonId}
          onContinueSubject={() =>
            setState((s) => ({ ...s, screen: "recommendation" }))
          }
          onDiscoverSomethingElse={reset}
        />
      );

    default:
      return null;
  }
}
