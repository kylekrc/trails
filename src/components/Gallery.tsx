
function Gallery() {
  return (
    <section
      id="gallery"
      className="px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#79583C]">
        This is the gallery section
      </p>

      <div className="mb-12">
        <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
          This is a heading
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          One backpack. Endless possibilities.
        </h2>

        <p className="mb-2 mt-4 text-[10px] tracking-wide text-[#686B60]">
          This is a paragraph
        </p>
        <p className="max-w-xl text-sm leading-7 text-[#686B60]">
          Meet your new travel companion. From everyday essentials to
          unforgettable getaways, PAKGO is made to go wherever the journey
          takes you.
        </p>
      </div>

      <div className="flex flex-col gap-5 md:gap-8">
        {/* ROW 1: PHOTO - TEXT */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          <div className="h-full min-h-72 overflow-hidden rounded-2xl md:min-h-80">
            <img
              src="/images/gallery-1.jpg"
              alt="PAKGO backpack featured"
              className="h-full min-h-72 w-full object-cover md:min-h-80"
            />
          </div>

          <div className="flex min-h-72 flex-col justify-center rounded-2xl bg-[#E5DDCE] p-8 md:min-h-80 md:p-12">
            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a subheading
            </p>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#79583C]">
              01 / Meet PAKGO
            </p>

            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a heading
            </p>
            <h3 className="mb-4 text-2xl font-semibold">
              Made for the journey ahead.
            </h3>

            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a paragraph
            </p>
            <p className="text-sm leading-7 text-[#686B60]">
              Say hello to the PAKGO Alpine Backpack. A travel companion
              designed to be part of your everyday plans and your biggest
              adventures.
            </p>
          </div>
        </div>

        {/* ROW 2: TEXT - PHOTO */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          <div className="order-2 flex min-h-72 flex-col justify-center rounded-2xl bg-[#E5DDCE] p-8 md:order-1 md:min-h-80 md:p-12">
            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a subheading
            </p>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#79583C]">
              02 / Room for adventure
            </p>

            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a heading
            </p>
            <h3 className="mb-4 text-2xl font-semibold">
              Bring what matters.
            </h3>

            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a paragraph
            </p>
            <p className="text-sm leading-7 text-[#686B60]">
              Pack your essentials, gather your favorite people, and get
              ready to explore. The best adventures start with being
              prepared to go.
            </p>
          </div>

          <div className="order-1 h-full min-h-72 overflow-hidden rounded-2xl md:order-2 md:min-h-80">
            <img
              src="/images/gallery-2.jpg"
              alt="PAKGO backpack ready for an adventure"
              className="h-full min-h-72 w-full object-cover md:min-h-80"
            />
          </div>
        </div>

        {/* ROW 3: PHOTO - TEXT */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          <div className="h-full min-h-72 overflow-hidden rounded-2xl md:min-h-80">
            <img
              src="/images/gallery-3.jpg"
              alt="Travel scenery from a PAKGO adventure"
              className="h-full min-h-72 w-full object-cover md:min-h-80"
            />
          </div>

          <div className="flex min-h-72 flex-col justify-center rounded-2xl bg-[#E5DDCE] p-8 md:min-h-80 md:p-12">
            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a subheading
            </p>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#79583C]">
              03 / Take the scenic route
            </p>

            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a heading
            </p>
            <h3 className="mb-4 text-2xl font-semibold">
              Wherever you go, go with wonder.
            </h3>

            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a paragraph
            </p>
            <p className="text-sm leading-7 text-[#686B60]">
              From familiar streets to breathtaking mountain views,
              every destination has a story to tell. Make room for
              new places and unexpected moments.
            </p>
          </div>
        </div>

        {/* ROW 4: TEXT - PHOTO */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          <div className="order-2 flex min-h-72 flex-col justify-center rounded-2xl bg-[#E5DDCE] p-8 md:order-1 md:min-h-80 md:p-12">
            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a subheading
            </p>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#79583C]">
              04 / Your next chapter
            </p>

            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a heading
            </p>
            <h3 className="mb-4 text-2xl font-semibold">
              Pack up. Go places.
            </h3>

            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a paragraph
            </p>
            <p className="text-sm leading-7 text-[#686B60]">
              A quick weekend escape or a trip you've been planning
              for months, your next adventure is waiting. Take PAKGO
              along for the ride.
            </p>
          </div>

          <div className="order-1 h-full min-h-72 overflow-hidden rounded-2xl md:order-2 md:min-h-80">
            <img
              src="/images/gallery-4.png"
              alt="PAKGO travel adventure"
              className="h-full min-h-72 w-full object-cover md:min-h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
