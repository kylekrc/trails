import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Reviews", href: "#testimonials" },
    { label: "The Backpack", href: "#gallery" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-sand bg-cream/90 backdrop-blur-md">
      <div className="page-container py-3">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-leather">
          This is the header section
        </p>

        <div className="flex items-end justify-between gap-4">
          {/* Brand logo */}
          <div>
            <p className="tag">This is a logo</p>

            <a href="#top" className="group flex items-center gap-2.5">
              <img
                src="/images/backpack.png"
                alt="PAKGO backpack logo"
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:-rotate-6"
              />
              <span className="text-xl font-bold tracking-[0.15em] text-bark">
                PAKGO
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <p className="tag">This is a navigation menu</p>

            <nav className="flex items-center gap-1 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative rounded-full px-4 py-2 font-medium text-bark transition-colors duration-200 hover:text-leather"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-leather transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <p className="tag">This is a button</p>

            <div>
              <a href="#gallery" className="btn-primary px-5! py-2.5! gap-2!">
                Explore
                <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <p className="tag">This is a button</p>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-2xl border border-sand-deep bg-ivory transition-colors hover:bg-sand"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`h-0.5 w-5 bg-bark transition-all ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-bark transition-all ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-bark transition-all ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-sand bg-cream px-6 py-6 shadow-lg md:hidden">
          <p className="tag">This is a navigation menu</p>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-bark transition-colors hover:bg-sand/70 hover:text-leather"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-3 py-3!"
            >
              Explore <span className="arrow">→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
