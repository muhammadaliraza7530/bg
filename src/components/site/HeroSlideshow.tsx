import * as React from "react";

type Props = { images: string[] };

/** Cross-fading single-image backdrop: one image every 2 seconds. */
export function HeroSlideshow({ images }: Props) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover blur-[3px] brightness-110 saturate-125 transition-all duration-1000 ease-out ${
            i === index ? "scale-105 opacity-100" : "scale-100 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-background/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background" />
    </div>
  );
}
