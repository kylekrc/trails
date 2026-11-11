
function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden px-6 pb-20 pt-6 md:px-12 md:pb-28 md:pt-10 lg:px-20"
    >
      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#79583C]">
        This is the hero section
      </p>

      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

        {/* Hero content */}
        <div className="relative z-10">
          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a subheading
          </p>

          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#79583C]">
            <span className="h-px w-8 bg-[#79583C]" />
            Pack up. Go places.
          </p>

          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a heading
          </p>

          <h1 className="max-w-2xl text-5xl font-bold leading-[1.04] tracking-[-0.055em] text-[#4B2E1B] md:text-6xl lg:text-7xl">
            Your next adventure
            <span className="mt-1 block font-serif font-normal italic text-[#85866A]">
              starts with a pack.
            </span>
          </h1>

          <p className="mb-2 mt-7 text-[10px] tracking-wide text-[#686B60]">
            This is a paragraph
          </p>

          <p className="max-w-lg text-base leading-8 text-[#686B60] md:text-lg">
            Meet the PAKGO Alpine Backpack, your companion for spontaneous
            getaways, scenic trails, and journeys worth remembering.
            Pack your essentials and make every destination part of your story.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a button
            </p>

            <a
              href="#gallery"
              className="group inline-flex items-center gap-5 rounded-full bg-[#79583C] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5F422C] hover:shadow-md"
            >
              Discover the Backpack
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Supporting detail */}
          <div className="mt-11 flex items-center gap-4 border-t border-[#E5DDCE] pt-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5DDCE] text-[#79583C]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m16.2 7.8-2.8 5.6-5.6 2.8 2.8-5.6z" />
              </svg>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#4B2E1B]">
                Made for the journey
              </p>
              <p className="mt-1 text-xs leading-5 text-[#858579]">
                Everyday essentials. Extraordinary destinations.
              </p>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative">
          <div className="rounded-4xl bg-[#E5DDCE] p-2.5 md:p-3">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
                src="/images/gallery-1.jpg"
                alt="Showcasing the PAKGO travel backpack"
                className="h-104 w-full object-cover transition-transform duration-700 hover:scale-[1.025] md:h-144"
              />

              {/* Image overlay label */}
              <div className="absolute left-5 top-5 rounded-full border border-[#E5DDCE]/70 bg-[#F5F1E8]/95 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#79583C] md:left-7 md:top-7">
                The Alpine Collection
              </div>
            </div>
          </div>

          {/* Image caption */}
          <div className="mb-1 mt-5 text-right text-[10px] tracking-wide text-[#686B60]">
            This is a caption
          </div>

          <p className="text-right text-xs uppercase tracking-[0.18em] text-[#77796E]">
            MATTERHORN, SWITZERLAND · MADE FOR ADVENTURE
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
