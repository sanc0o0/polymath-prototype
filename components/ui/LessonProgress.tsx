interface LessonProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function LessonProgress({ currentStep, totalSteps }: LessonProgressProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex gap-1.5">
        {Array.from({ length: totalSteps }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-200 ${
              i < currentStep ? "bg-signal" : "bg-ink/10"
            }`}
          />
        ))}
      </div>
      <span className="text-[12px] text-ink-soft">
        Step {currentStep} of {totalSteps}
      </span>
    </div>
  );
}
