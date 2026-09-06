import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={"/media/shazib-logo.jpeg"}
              alt="Shazib Outlet"
              width={44}
              height={44}
              loading="lazy"
              className="h-11 w-11 rounded-md object-cover"
            />
            <span className="text-lg font-semibold tracking-[0.16em]">SHAZIB OUTLET</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Your one-stop outlet for premium watches, genuine leather wallets and
            fast-charging power banks — quality you can trust, prices you'll love.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest text-primary">EXPLORE</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/collection" className="hover:text-primary">Watches</Link></li>
            <li><Link to="/interior-design" className="hover:text-primary">Wallets</Link></li>
            <li><Link to="/about" className="hover:text-primary">Power Banks</Link></li>
            <li><Link to="/about-us" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest text-primary">VISIT US</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Chhani Nikowani, District Gujrat, Punjab, Pakistan.
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+923144849045" className="hover:text-primary">0314 484 9045</a>
            </li>
            <li className="flex gap-2">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:shazibbhai338@gmail.com" className="hover:text-primary">shazibbhai338@gmail.com</a>
            </li>
            <li className="flex gap-3 pt-1">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        Design and developed by brandup
      </div>
    </footer>
  );
}
