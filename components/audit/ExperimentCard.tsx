interface ExperimentCardProps {
  title: string;
  question: string;
}

export default function ExperimentCard({ title, question }: ExperimentCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-ink/10 bg-white p-4">
      <span className="self-start rounded-full bg-ink/[0.06] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-ink-soft">
        {title}
      </span>
      <p className="text-[14px] leading-snug text-ink">{question}</p>
    </div>
  );
}
