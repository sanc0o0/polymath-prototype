interface JourneyStep {
  label: string;
  note?: string;
}

interface UserJourneyProps {
  steps: JourneyStep[];
}

export default function UserJourney({ steps }: UserJourneyProps) {
  return (
    <ol className="flex flex-col">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <li key={step.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal-soft text-[13px] font-medium text-signal">
                {i + 1}
              </span>
              {!isLast && <span className="w-px flex-1 bg-ink/10" />}
            </div>
            <div className={`flex flex-col gap-0.5 ${isLast ? "pb-0" : "pb-6"}`}>
              <p className="font-display text-[16px] font-medium text-ink">{step.label}</p>
              {step.note && <p className="text-[14px] text-ink-soft">{step.note}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
