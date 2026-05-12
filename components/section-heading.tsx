type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.3em] text-ink/45">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-ink/65 md:text-lg">
        {description}
      </p>
    </div>
  );
}
