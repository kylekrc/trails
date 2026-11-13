function Hero() {
  return (
    <section id="home" className="overflow-hidden pb-20 pt-8 md:pb-28 md:pt-12">
      <div className="page-container">
        <p className="section-label">This is the hero section</p>

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Hero content */}
          <div className="relative z-10">
            <p className="tag">This is a subheading</p>
            <p className="eyebrow mb-7">Pack up. Go places.</p>

            <p className="tag">This is a heading</p>
            <h1 className="max-w-xl text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-bark md:text-6xl xl:text-7xl">
              Your next adventure
              <span className="mt-2 block font-serif font-normal italic tracking-[-0.03em] text-forest">
                starts with a pack.
              </span>
            </h1>

            <p className="tag mt-8">This is a paragraph</p>
            <p className="max-w-md text-base leading-8 text-sage md:text-lg">
              Meet the PAKGO Alpine Backpack, your companion for spontaneous
              getaways, scenic trails, and journeys worth remembering. Pack
              your essentials and make every destination part of your story.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <p className="tag">This is a button</p>
              <div>
                <a href="#gallery" className="btn-primary">
                  Discover the Backpack
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>

            {/* Supporting detail */}
            <div className="mt-10 flex items-center gap-4 border-t border-sand pt-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand text-leather">
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
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m16.2 7.8-2.8 5.6-5.6 2.8 2.8-5.6z" />
                </svg>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-bark">
                  Made for the journey
                </p>
                <p className="mt-1 text-xs leading-5 text-sage">
                  Everyday essentials. Extraordinary destinations.
                </p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            {/* soft glacier backdrop */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-0 rounded-[2.5rem] bg-glacier/70 md:-inset-4"
            />
            <div className="relative rounded-4xl border border-sand bg-sand p-2.5 shadow-[0_30px_60px_-30px_rgb(75_46_27/0.35)] md:p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] sm:aspect-[5/4] lg:aspect-[4/3.6]">
                <img
                  src="/images/gallery-1.jpg"
                  alt="Showcasing the PAKGO travel backpack"
                  className="h-full w-full object-cover object-[70%_center] transition-transform duration-700 hover:scale-[1.03]"
                />

                {/* Image overlay label */}
                <div className="absolute left-4 top-4 rounded-full border border-sand/70 bg-cream/95 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-leather shadow-sm md:left-6 md:top-6">
                  The Alpine Collection
                </div>
              </div>
            </div>

            {/* Image caption */}
            <div className="relative mt-6 text-right">
              <p className="tag">This is a caption</p>
              <p className="text-xs uppercase tracking-[0.18em] text-sage">
                MATTERHORN, SWITZERLAND · MADE FOR ADVENTURE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
