import type { Category, Subject, Lesson } from "./types";

// SCREEN 1 — Discovery categories.
// Five broad areas, matching the approved plan. "Surprise me" is
// handled separately in the Discovery screen, not as a Category.
export const categories: Category[] = [
  {
    id: "science",
    label: "Science",
    description: "How the universe, life, and matter behave.",
  },
  {
    id: "technology",
    label: "Technology",
    description: "Code, tools, and how digital things work.",
  },
  {
    id: "mind",
    label: "Mind",
    description: "Thinking, focus, and how people reason.",
  },
  {
    id: "people",
    label: "People",
    description: "Psychology, history, and how humans connect.",
  },
  {
    id: "skills",
    label: "Skills",
    description: "Practical crafts and abilities you build by doing.",
  },
];

// SCREEN 2 — Subject discovery.
// Only the Science category is fully populated for this prototype;
// only Astronomy has a real lesson behind it (per approved scope).
export const subjects: Subject[] = [
  {
    id: "astronomy",
    categoryId: "science",
    name: "Astronomy",
    tagline: "Why planets don't simply fly away from the Sun.",
    estimatedMinutes: 2,
    level: "Beginner",
  },
  {
    id: "quantum-physics",
    categoryId: "science",
    name: "Quantum Physics",
    tagline: "Why tiny particles behave so strangely.",
    estimatedMinutes: 3,
    level: "Beginner",
  },
  {
    id: "evolution",
    categoryId: "science",
    name: "Evolution",
    tagline: "How small changes become big differences over time.",
    estimatedMinutes: 3,
    level: "Beginner",
  },
];

// SCREENS 3–5 — the one fully-built lesson: orbital mechanics.
export const lessons: Lesson[] = [
  {
    id: "how-do-planets-stay-in-orbit",
    subjectId: "astronomy",
    title: "How do planets stay in orbit?",
    estimatedMinutes: 2,
    level: "Beginner",
    recommendationReason: "Why doesn't Earth simply fly away into space?",
    summary:
      "Planets stay in orbit because gravity keeps changing their direction while they keep moving forward.",
    steps: [
      {
        id: "step-1",
        title: "Why don't planets just fly off into space?",
        body: "Without any force acting on it, a moving object travels in a straight line forever. Planets don't — so something must be constantly pulling them off that straight path.",
        visualKey: "straight-line-drift",
      },
      {
        id: "step-2",
        title: "Gravity keeps redirecting it.",
        body: "The Sun's gravity pulls every planet toward it at every instant. That pull doesn't stop the planet — it just keeps bending its path inward, a little at a time.",
        visualKey: "gravity-bend",
      },
      {
        id: "step-3",
        title: "A constantly bending path is a curve — and a closed curve is an orbit.",
        body: "The planet is always \u201cfalling\u201d toward the Sun, but always moving fast enough sideways to miss it. That balance \u2014 falling and missing, forever \u2014 is what an orbit actually is.",
        visualKey: "orbit-loop",
      },
    ],
    quiz: {
      id: "orbit-check",
      prompt: "What keeps a planet from either flying away or falling into the Sun?",
      options: [
        { id: "a", label: "The planet has no gravity" },
        { id: "b", label: "Its forward motion and the Sun's gravity work together" },
        { id: "c", label: "The vacuum pushes it outward" },
        { id: "d", label: "Planets don't move" },
      ],
      correctOptionId: "b",
      correctFeedback:
        "Exactly. The planet keeps moving forward while gravity continually changes its direction.",
      incorrectFeedback:
        "Not quite. Gravity keeps pulling the planet toward the Sun while its forward motion keeps it moving along its path.",
    },
  },
];

// --- Simple lookup helpers, kept here rather than duplicated in components ---

export function getSubjectsForCategory(categoryId: string): Subject[] {
  return subjects.filter((s) => s.categoryId === categoryId);
}

export function getSubjectById(subjectId: string): Subject | undefined {
  return subjects.find((s) => s.id === subjectId);
}

export function getLessonForSubject(subjectId: string): Lesson | undefined {
  return lessons.find((l) => l.subjectId === subjectId);
}

export function getLessonById(lessonId: string): Lesson | undefined {
  return lessons.find((l) => l.id === lessonId);
}
