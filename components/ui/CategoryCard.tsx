import type { Category } from "@/lib/types";
import { categoryAccent } from "./theme";
import { CategoryIcon, ChevronRightIcon } from "./icons";

interface CategoryCardProps {
  category: Category;
  onSelect: () => void;
}

export default function CategoryCard({ category, onSelect }: CategoryCardProps) {
  const accent = categoryAccent[category.id];

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Explore ${category.label}: ${category.description}`}
      className="group flex w-full items-center gap-3.5 rounded-2xl border border-ink/10 bg-white p-3.5 text-left transition-all duration-150 ease-out active:scale-[0.98] active:bg-ink/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink transition-transform duration-150 group-active:scale-90"
        style={{ backgroundColor: accent.bg }}
      >
        <CategoryIcon id={category.id} className="h-5 w-5" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block font-display text-[16px] font-medium text-ink">
          {category.label}
        </span>
        <span className="block truncate text-[13px] text-ink-soft">
          {category.description}
        </span>
      </span>

      <ChevronRightIcon className="h-4 w-4 shrink-0 text-ink/30 transition-transform duration-150 group-active:translate-x-0.5" />
    </button>
  );
}
