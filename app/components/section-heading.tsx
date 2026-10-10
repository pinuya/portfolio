import { VisibleDecoderText } from "~/components/decoder-text/VisibleDecoderText";

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-14 flex flex-col items-center text-center">
      <span className="mb-3 font-mono text-xs tracking-[0.3em] text-pink-500 dark:text-pink-300">
        {index}
      </span>
      <h2 className="text-3xl font-semibold uppercase tracking-widest">
        <VisibleDecoderText text={title} delay={300} />
      </h2>
      <div className="bg-gradient-brand mt-4 h-1 w-12 rounded-full" />
      {subtitle && (
        <p className="mt-4 max-w-md text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
