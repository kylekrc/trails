
function Hero() {
  return (
    <section
      id="home"
      className="px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-20 lg:px-20"
    >
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#79583C]">
        This is the hero section
      </p>

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-sm uppercase tracking-widest text-[#79583C]">
            Pack up. Go places.
          </p>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Your next adventure starts with a pack.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#686B60] md:text-lg">
            Meet the PAKGO Alpine Backpack, your companion for spontaneous
            getaways, scenic trails, and journeys worth remembering.
            Pack your essentials and make every destination part of your story.
          </p>

          <a
            href="#gallery"
            className="mt-8 inline-flex rounded-full bg-[#79583C] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#5F422C]"
          >
            Discover the Backpack
          </a>
        </div>

        <div className="relative">
          <img
            src="/images/gallery-1.jpg"
            alt="Showcasing the PAKGO travel backpack"
            className="h-87.5 w-full rounded-2xl object-cover md:h-120"
          />

          <p className="mt-3 text-right text-xs tracking-wide text-[#77796E]">
            MATTERHORN, SWITZERLAND · MADE FOR ADVENTURE
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
