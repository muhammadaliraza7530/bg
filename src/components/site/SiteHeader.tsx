import { Link } from "@tanstack/react-router";
import { Menu, Phone, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  { label: "Home", to: "/" },
  { label: "Watches", to: "/collection" },
  { label: "Wallets", to: "/interior-design" },
  { label: "Power Banks", to: "/about" },
  { label: "About Us", to: "/about-us" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const { count, setOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={"/media/shazib-logo.jpeg"}
            alt="Shazib Outlet logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-md object-cover object-center"
          />
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.18em] text-foreground">
              SHAZIB
            </span>
            <span className="block text-[10px] tracking-[0.42em] text-primary">
              OUTLET
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+923144849045"
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-primary sm:flex"
          >
            <Phone className="h-3.5 w-3.5" /> 0314 484 9045
          </a>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open cart"
            className="relative"
            onClick={() => setOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card">
              <nav className="mt-10 flex flex-col gap-1 px-4">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="rounded-lg px-3 py-3 text-base text-foreground transition-colors hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}