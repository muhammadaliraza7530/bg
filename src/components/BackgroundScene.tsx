import { useEffect, useRef, useState } from "react";

const slides = [
  "/images/backgrounds/bg-3.jpg",
  "/images/backgrounds/bg-4.jpg",
  "/images/backgrounds/bg-5.jpg",
];

const SLIDE_MS = 6500;

/**
 * Fixed, GPU-only 3D backdrop shared by every section.
 * The three brand photographs cross-fade one-by-one in an endless loop while a
 * slow Ken Burns push and a rAF-throttled pointer tilt give the scene depth.
 * Pure CSS transforms: no canvas, no WebGL, and motion is disabled for
 * visitors who prefer reduced motion.
 */
export function BackgroundScene() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        stage.style.setProperty("--tilt-x", `${(-y * 4).toFixed(2)}deg`);
        stage.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="scene-root" aria-hidden="true">
      <div className="scene-stage" ref={stageRef}>
        {slides.map((url, index) => (
          <div
            key={url}
            className={`scene-slide${index === active ? " is-active" : ""}`}
            style={{ backgroundImage: `url("${url}")` }}
          />
        ))}
        <div className="scene-orb scene-orb--one" />
        <div className="scene-orb scene-orb--two" />
      </div>
      <div className="scene-grid hairline-grid" />
      <div className="scene-veil" />
    </div>
  );
}
