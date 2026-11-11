
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative px-6 py-5 md:px-12 lg:px-20">
      {/* Header section label */}
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#79583C]">
        This is the header section
      </p>

      <div className="flex items-center justify-between">
        {/* Brand logo */}
        <div>
          <p className="mb-1 text-[9px] tracking-wide text-[#686B60]">
            This is a logo
          </p>
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src="/images/backpack.png"
              alt="PAKGO backpack logo"
              className="h-11 w-11 object-contain"
            />
            <span className="text-xl font-bold tracking-[0.15em] text-[#4B2E1B]">
              PAKGO
            </span>
          </a>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:block">
          <p className="mb-2 text-center text-[9px] tracking-wide text-[#686B60]">
            This is a navigation menu
          </p>
          <nav className="flex items-center gap-8 text-sm">
            <a href="#top" className="transition hover:text-[#79583C]">
              Home
            </a>
            <a href="#testimonials" className="transition hover:text-[#79583C]">
              Reviews
            </a>
            <a href="#gallery" className="transition hover:text-[#79583C]">
              The Backpack
            </a>
          </nav>
        </div>

        {/* Desktop explore button */}
        <div className="hidden md:block">
          <p className="mb-1 text-center text-[9px] tracking-wide text-[#686B60]">
            This is a button
          </p>
          <a
            href="#gallery"
            className="inline-flex rounded-full bg-[#79583C] px-5 py-2.5 text-sm text-white transition hover:bg-[#5F422C]"
          >
            Explore
          </a>
        </div>

        {/* Mobile hamburger button */}
        <div className="md:hidden">
          <p className="mb-1 text-center text-[9px] tracking-wide text-[#686B60]">
            This is a button
          </p>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#D8D2C5]"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`h-0.5 w-5 bg-[#292D25] transition-all ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#292D25] transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#292D25] transition-all ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-[#E5DDCE] bg-[#F5F1E8] px-6 py-6 shadow-lg md:hidden">
          <p className="mb-3 text-[9px] tracking-wide text-[#686B60]">
            This is a navigation menu
          </p>
          <nav className="flex flex-col gap-5">
            <a
              href="#top"
              onClick={() => setMenuOpen(false)}
              className="text-sm transition hover:text-[#79583C]"
            >
              Home
            </a>
            <a
              href="#testimonials"
              onClick={() => setMenuOpen(false)}
              className="text-sm transition hover:text-[#79583C]"
            >
              Reviews
            </a>
            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="text-sm transition hover:text-[#79583C]"
            >
              The Backpack
            </a>
            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-[#79583C] px-5 py-3 text-center text-sm text-white transition hover:bg-[#5F422C]"
            >
              Explore
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
