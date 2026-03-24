export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <span className="inline-flex rounded-full border border-white/15 px-3 py-1 text-xs tracking-[0.3em] text-[var(--teal-300)] uppercase">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      <p className="text-base leading-8 text-[var(--text-soft)] md:text-lg">{description}</p>
    </div>
  );
}
