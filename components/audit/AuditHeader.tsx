export default function AuditHeader() {
  return (
    <header className="flex flex-col gap-4">
      <p className="text-[13px] text-ink-soft">Prepared by Sana Ansari</p>

      <h1 className="font-display text-[32px] font-semibold leading-[1.15] text-ink sm:text-[40px]">
        Polymath: Product Exploration & Prototype
      </h1>

      <p className="max-w-[52ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
        An independent look at the first-use experience, with a small prototype
        exploring one possible direction.
      </p>

      <p className="max-w-[58ch] border-t border-ink/10 pt-5 text-[13px] leading-relaxed text-ink-soft">
        This is an independent exploration based on publicly available information
        about Polymath. It is not affiliated with or endorsed by Polymath or Andrew
        Codesmith.
      </p>
    </header>
  );
}
