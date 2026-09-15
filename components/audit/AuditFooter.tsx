export default function AuditFooter() {
  return (
    <footer className="flex flex-col gap-4 border-t border-ink/10 pt-10">
      <h2 className="font-display text-[22px] font-semibold text-ink sm:text-[26px]">
        One thing I would be curious to learn
      </h2>
      <p className="text-[15px] leading-relaxed text-ink-soft">
        I would be most interested in seeing what happens between curiosity and the
        first completed lesson.
      </p>
      <p className="text-[15px] leading-relaxed text-ink-soft">
        If that part of the experience can consistently turn &ldquo;I want to learn
        something&rdquo; into &ldquo;I just learned something,&rdquo; I think the
        product has a very interesting loop to explore.
      </p>

      <div className="flex flex-col gap-1.5 pt-4">
        <p className="font-display text-[16px] font-medium text-ink">Sana Ansari</p>
        {/* No real GitHub/LinkedIn URLs exist in this project yet, so these are
            left as plain labels rather than invented links. Swap in real profile
            URLs here when ready. */}
        <div className="flex gap-4 text-[14px] text-ink-soft">
          <span>GitHub</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </footer>
  );
}
