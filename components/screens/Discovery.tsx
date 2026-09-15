import { categories } from "@/lib/content";
import type { CategoryId } from "@/lib/types";
import CategoryCard from "@/components/ui/CategoryCard";
import SurpriseMeButton from "@/components/ui/SurpriseMeButton";
import ScreenTransition from "@/components/ui/ScreenTransition";

interface DiscoveryProps {
  onSelectCategory: (categoryId: CategoryId) => void;
  onSurpriseMe: () => void;
}

// SCREEN 1 — the most important screen in the prototype. Deliberately
// narrows choice instead of presenting the full catalogue up front —
// that narrowing is the product hypothesis being tested (see audit).
export default function Discovery({ onSelectCategory, onSurpriseMe }: DiscoveryProps) {
  return (
    <ScreenTransition>
      <div className="flex flex-1 flex-col gap-7 p-6 pt-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-[27px] font-semibold leading-[1.15] text-ink">
            What are you curious about today?
          </h1>
          <p className="text-[15px] leading-snug text-ink-soft">
            Pick a direction. We&apos;ll find something interesting.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelect={() => onSelectCategory(category.id)}
            />
          ))}
        </div>

        <SurpriseMeButton onClick={onSurpriseMe} />
      </div>
    </ScreenTransition>
  );
}
