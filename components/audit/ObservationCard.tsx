interface ObservationCardProps {
  title: string;
  text: string;
}

export default function ObservationCard({ title, text }: ObservationCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-ink/10 bg-white p-5">
      <h3 className="font-display text-[16px] font-semibold text-ink">{title}</h3>
      <p className="text-[14px] leading-relaxed text-ink-soft">{text}</p>
    </div>
  );
}
