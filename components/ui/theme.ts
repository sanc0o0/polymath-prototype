import type { CategoryId } from "@/lib/types";

// Soft, low-saturation chip backgrounds — one per category. All five are
// matched in lightness/saturation so the set reads as one coherent
// palette rather than a rainbow of unrelated colors.
export const categoryAccent: Record<CategoryId, { bg: string }> = {
  science: { bg: "#DCEFE6" },
  technology: { bg: "#FBE7C6" },
  mind: { bg: "#E6E1F7" },
  people: { bg: "#FBE1E6" },
  skills: { bg: "#DCE7F7" },
};

// All three prototype subjects currently sit under Science, so they
// share one accent for visual cohesion within that category.
export const subjectAccent = { bg: "#DCEFE6" };
