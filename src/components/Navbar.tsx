
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
      {/* Brand logo */}
      {/* Brand logo */}
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

      {/* Desktop navigation */}
      <nav className="hidden items-center gap-8 text-sm md:flex">
        <a href="#top" className="transition hover:text-[#79583C]">
          Home
        </a>
        <a href="#gallery" className="transition hover:text-[#79583C]">
          The Backpack
        </a>
        <a href="#testimonials" className="transition hover:text-[#79583C]">
          Reviews
        </a>
      </nav>

      {/* Desktop explore button */}
      <a
        href="#gallery"
        className="hidden rounded-full bg-[#79583C] px-5 py-2.5 text-sm text-white transition hover:bg-[#5F422C] md:inline-flex"
      >
        Explore
      </a>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#D8D2C5] md:hidden"
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

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="absolute left-0 top-full z-50 flex w-full flex-col gap-5 border-t border-[#E5DDCE] bg-[#F5F1E8] px-6 py-6 shadow-lg md:hidden">
          <a
            href="#top"
            onClick={() => setMenuOpen(false)}
            className="text-sm hover:text-[#79583C]"
          >
            Home
          </a>
          <a
            href="#gallery"
            onClick={() => setMenuOpen(false)}
            className="text-sm hover:text-[#79583C]"
          >
            The Backpack
          </a>
          <a
            href="#testimonials"
            onClick={() => setMenuOpen(false)}
            className="text-sm hover:text-[#79583C]"
          >
            Reviews
          </a>
          <a
            href="#gallery"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-[#79583C] px-5 py-3 text-center text-sm text-white"
          >
            Explore
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
