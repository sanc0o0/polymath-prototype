interface QuestionCardProps {
  question: string;
  explanation: string;
}

export default function QuestionCard({ question, explanation }: QuestionCardProps) {
  return (
    <div className="flex flex-col gap-2 border-l-2 border-signal/30 pl-5">
      <p className="font-display text-[17px] font-medium leading-snug text-ink">{question}</p>
      <p className="text-[14px] leading-relaxed text-ink-soft">{explanation}</p>
    </div>
  );
}
