// Core content types for the Polymath prototype.
// Kept intentionally small: this models exactly the data the
// approved 6-screen flow needs, nothing more.

export type CategoryId = "technology" | "science" | "mind" | "people" | "skills";

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
}

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Subject {
  id: string;
  categoryId: CategoryId;
  name: string;
  tagline: string;
  estimatedMinutes: number;
  level: DifficultyLevel;
}

export interface LessonStep {
  id: string;
  title: string;
  body: string;
  // Placeholder for now — Stage 4 will render an actual SVG per step.
  // Kept as a string key so content and visuals stay decoupled.
  visualKey: string;
}

export interface QuizOption {
  id: string;
  label: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  correctFeedback: string;
  incorrectFeedback: string;
}

export interface Lesson {
  id: string;
  subjectId: string;
  title: string;
  estimatedMinutes: number;
  level: DifficultyLevel;
  recommendationReason: string;
  summary: string;
  steps: LessonStep[];
  quiz: QuizQuestion;
}

// The six screens in the approved user journey, in order.
export type ScreenId =
  | "discovery"
  | "subjectPicker"
  | "recommendation"
  | "lesson"
  | "quickCheck"
  | "completion";
