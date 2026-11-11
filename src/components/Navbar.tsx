
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Reviews", href: "#testimonials" },
    { label: "The Backpack", href: "#gallery" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5DDCE] bg-[#F5F1E8]/95 px-6 py-4 backdrop-blur-md md:px-12 lg:px-20">
      <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#79583C]">
        This is the header section
      </p>

      <div className="flex items-center justify-between">
        {/* Brand logo */}
        <div>
          <p className="mb-1 text-[9px] tracking-wide text-[#686B60]">
            This is a logo
          </p>

          <a href="#top" className="group flex items-center gap-2.5">
            <img
              src="/images/backpack.png"
              alt="PAKGO backpack logo"
              className="h-11 w-11 object-contain transition-transform duration-300 group-hover:-rotate-6"
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

          <nav className="flex items-center gap-2 text-sm">
            {navLinks.map((link) => (
                <a
                key={link.label}
                href={link.href}
                className="group relative rounded-full px-4 py-2 font-medium text-[#4B2E1B] transition-all duration-200 hover:text-[#79583C]"
                >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-[#79583C] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
            ))}
          </nav>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <p className="mb-1 text-center text-[9px] tracking-wide text-[#686B60]">
            This is a button
          </p>

          <a
            href="#gallery"
            className="group inline-flex items-center gap-2 rounded-full bg-[#79583C] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5F422C] hover:shadow-md"
          >
            Explore
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <p className="mb-1 text-[9px] tracking-wide text-[#686B60]">
            This is a button
          </p>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-2xl border-[#D8D2C5] transition-colors hover:bg-[#E5DDCE]"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`h-0.5 w-5 bg-[#4B2E1B] transition-all ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#4B2E1B] transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#4B2E1B] transition-all ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-[#E5DDCE] bg-[#F5F1E8] px-6 py-6 shadow-lg md:hidden">
          <p className="mb-3 text-[9px] tracking-wide text-[#686B60]">
            This is a navigation menu
          </p>

          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#4B2E1B] transition-colors hover:text-[#79583C]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#79583C] px-5 py-3 text-center text-sm text-white transition hover:bg-[#5F422C]"
            >
              Explore <span>→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
