import * as React from "react";
import { formatPKR, products } from "@/lib/products";

const AUTO_SPEED = 150; // px per second

/**
 * Auto-scrolling showcase rail that can also be dragged with finger or mouse.
 * Auto-scroll pauses while dragging or hovering.
 */
export function ProductMarquee() {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const pausedRef = React.useRef(false);
  const velocityRef = React.useRef(0); // px per second, from flick momentum
  const dragRef = React.useRef({
    active: false,
    startX: 0,
    startLeft: 0,
    lastX: 0,
    lastT: 0,
  });

  const normalize = React.useCallback((el: HTMLDivElement) => {
    const half = el.scrollWidth / 2;
    if (half <= 0) return;
    if (el.scrollLeft >= half) el.scrollLeft -= half;
    else if (el.scrollLeft < 0) el.scrollLeft += half;
  }, []);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min(64, now - last) / 1000;
      last = now;
      if (!dragRef.current.active) {
        if (Math.abs(velocityRef.current) > 8) {
          // momentum glide after a flick
          el.scrollLeft += velocityRef.current * dt;
          velocityRef.current *= Math.pow(0.0025, dt);
        } else {
          velocityRef.current = 0;
          if (!pausedRef.current) el.scrollLeft += AUTO_SPEED * dt;
        }
        normalize(el);
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [normalize]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    velocityRef.current = 0;
    pausedRef.current = true;
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      lastX: e.clientX,
      lastT: performance.now(),
    };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    const d = dragRef.current;
    if (!el || !d.active) return;
    // 1.6x multiplier so a short finger swipe covers several cards
    el.scrollLeft = d.startLeft - (e.clientX - d.startX) * 1.6;
    normalize(el);

    const now = performance.now();
    const dt = now - d.lastT;
    if (dt > 8) {
      velocityRef.current = (-(e.clientX - d.lastX) * 1.6 * 1000) / dt;
      d.lastX = e.clientX;
      d.lastT = now;
    }
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    dragRef.current.active = false;
    pausedRef.current = false;
    velocityRef.current = Math.max(-4200, Math.min(4200, velocityRef.current));
    if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  };

  const rail = [...products, ...products];

  return (
    <section className="py-16">
      <div className="mx-auto mb-8 flex max-w-7xl items-end justify-between px-4 sm:px-6">
        <div className="min-w-0">
          <p className="text-[10px] tracking-[0.4em] text-accent">IN MOTION</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Showroom Rail</h2>
        </div>
        <p className="hidden text-xs text-muted-foreground sm:block">
          Drag with your finger to explore
        </p>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => {
          if (!dragRef.current.active) pausedRef.current = false;
        }}
        className="scene-3d flex cursor-grab gap-5 overflow-x-auto px-4 pb-4 select-none active:cursor-grabbing sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ touchAction: "pan-y", overscrollBehaviorX: "contain" }}
      >
        {rail.map((product, i) => (
          <figure
            key={`${product.id}-${i}`}
            className="card-3d glass-panel relative w-[220px] shrink-0 overflow-hidden rounded-2xl sm:w-[300px]"
          >
            <div className="relative h-[200px] w-full bg-muted sm:h-[280px]">
              <img
                src={product.image}
                alt={product.name}
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="h-full w-full object-contain"
              />
              {product.comingSoon && (
                <span className="absolute right-2 top-2 rounded-full bg-muted-foreground/20 px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-foreground backdrop-blur-sm">
                  COMING SOON
                </span>
              )}
            </div>
            <figcaption className="flex items-center justify-between gap-2 px-4 py-3">
              <span className="truncate text-sm">{product.name}</span>
              <span className={`shrink-0 text-xs ${product.comingSoon ? "text-muted-foreground line-through" : "text-accent"}`}>
                {formatPKR(product.price)}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}