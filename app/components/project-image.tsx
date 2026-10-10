import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

export function ProjectImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(!src);

  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-pink-300/30 via-purple-400/20 to-background",
          className,
        )}
      >
        <span className="text-gradient text-5xl font-semibold">
          {alt.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}
