import { Link } from "@tanstack/react-router";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      to="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${company.name} — home`}
    >
      <img
        src="/images/logo-mark.png"
        alt={`${company.name} logo`}
        width={512}
        height={512}
        className="size-14 shrink-0 object-contain transition-transform duration-500 group-hover:scale-[1.04] md:size-16"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.1rem] font-extrabold tracking-tight md:text-[1.2rem]">
          <span className="text-primary">B</span>
          <span className="text-brand-red">·G Pharma</span>
          <span
            className={cn(
              "ml-1.5 text-[0.62rem] font-bold tracking-[0.2em] uppercase text-primary",
            )}
          >
            Pakistan
          </span>
        </span>
        <span
          className={cn(
            "mt-1.5 text-[0.56rem] font-bold tracking-[0.16em] uppercase text-primary",
          )}
        >
          Priority to Serve Humanity
        </span>
      </span>
    </Link>
  );
}
