
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#292D25]">
      {/* HEADER */}
      <header className="relative flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <a href="#" className="text-xl font-bold tracking-[0.15em]">
          ALPINE TRAILS
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#home" className="transition hover:text-[#697650]">
            Home
          </a>
          <a href="#testimonials" className="transition hover:text-[#697650]">
            Testimonials
          </a>
          <a href="#gallery" className="transition hover:text-[#697650]">
            Gallery
          </a>
        </nav>

        {/* Desktop explore button */}
        <a
          href="#gallery"
          className="hidden rounded-full bg-[#697650] px-5 py-2.5 text-sm text-white transition hover:bg-[#535F40] md:inline-flex"
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
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="text-sm hover:text-[#697650]"
            >
              Home
            </a>
            <a
              href="#testimonials"
              onClick={() => setMenuOpen(false)}
              className="text-sm hover:text-[#697650]"
            >
              Testimonials
            </a>
            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="text-sm hover:text-[#697650]"
            >
              Gallery
            </a>
            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-[#697650] px-5 py-3 text-center text-sm text-white"
            >
              Explore
            </a>
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-20 lg:px-20"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#697650]">
          This is the hero section
        </p>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-[#697650]">
              Discover the Swiss Alps
            </p>

            <h1 className="max-w-xl text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Find your way to the mountains.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#686B60] md:text-lg">
              Escape the ordinary and discover the breathtaking landscapes
              of the Swiss Alps. Every journey begins with a step into
              something extraordinary.
            </p>

            <a
              href="#gallery"
              className="mt-8 inline-flex rounded-full bg-[#697650] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#535F40]"
            >
              Explore the journey
            </a>
          </div>

          <div className="relative">
            <img
              src="/images/hero-alps.png"
              alt="Swiss Alps landscape from our Task 2 image collection"
              className="h-[350px] w-full rounded-2xl object-cover md:h-[480px]"
            />
            <p className="mt-3 text-right text-xs tracking-wide text-[#77796E]">
              SWISS ALPS · A JOURNEY TO REMEMBER
            </p>
          </div>
        </div>
      </section>

      {/* TEMPORARY TESTIMONIAL AND GALLERY MARKERS */}
      <section id="testimonials" className="px-6 py-12 md:px-12 lg:px-20">
        <p className="text-xs uppercase tracking-widest text-[#697650]">
          This is the testimonials section
        </p>
      </section>

      <section id="gallery" className="px-6 py-12 md:px-12 lg:px-20">
        <p className="text-xs uppercase tracking-widest text-[#697650]">
          This is the gallery section
        </p>
      </section>
    </main>
  );
}

export default App;
