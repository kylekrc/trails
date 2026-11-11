
function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#79583C]">
        This is the testimonials section
      </p>

      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a heading
          </p>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Made for every kind of adventure.
          </h2>
        </div>

        <div>
          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a paragraph
          </p>
          <p className="max-w-sm text-sm leading-7 text-[#686B60]">
            See what fellow explorers have to say about taking PAKGO along
            for the journey.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Testimonial 1 */}
        <article className="rounded-2xl border border-[#E5DDCE] bg-[#FAF8F2] p-7">
          <img
            src="https://i.pravatar.cc/160?img=47"
            alt="Placeholder portrait of Alyssa Mae"
            className="mb-6 h-14 w-14 rounded-full object-cover"
          />

          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a paragraph
          </p>
          <p className="mb-6 text-sm leading-7 text-[#686B60]">
            "I love how comfortable and easy it is to carry. There's
            enough room for my essentials, and it has quickly become
            my go-to bag for weekend adventures."
          </p>

          <p className="mb-1 text-[10px] tracking-wide text-[#686B60]">
            This is a name
          </p>
          <h3 className="text-sm font-semibold">Alyssa Mae</h3>

          <p className="mb-1 mt-2 text-[10px] tracking-wide text-[#686B60]">
            This is a subheading
          </p>
          <p className="text-xs text-[#858579]">Weekend Explorer</p>
        </article>

        {/* Testimonial 2 */}
        <article className="rounded-2xl border border-[#E5DDCE] bg-[#FAF8F2] p-7">
          <img
            src="https://i.pravatar.cc/160?img=12"
            alt="Placeholder portrait of Nico Royce"
            className="mb-6 h-14 w-14 rounded-full object-cover"
          />

          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a paragraph
          </p>
          <p className="mb-6 text-sm leading-7 text-[#686B60]">
            "A great companion for outdoor trips. I can organize my
            gear without feeling like I'm carrying too much. It's
            practical, reliable, and ready for the trail."
          </p>

          <p className="mb-1 text-[10px] tracking-wide text-[#686B60]">
            This is a name
          </p>
          <h3 className="text-sm font-semibold">Nico Royce</h3>

          <p className="mb-1 mt-2 text-[10px] tracking-wide text-[#686B60]">
            This is a subheading
          </p>
          <p className="text-xs text-[#858579]">Outdoor Enthusiast</p>
        </article>

        {/* Testimonial 3 */}
        <article className="rounded-2xl border border-[#E5DDCE] bg-[#FAF8F2] p-7">
          <img
            src="https://i.pravatar.cc/150?img=62"
            alt="Placeholder portrait of William James"
            className="mb-6 h-14 w-14 rounded-full object-cover"
          />

          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a paragraph
          </p>
          <p className="mb-6 text-sm leading-7 text-[#686B60]">
            "From quick getaways to longer trips, this backpack fits
            right into my lifestyle. I love its timeless look and
            how versatile it is for different adventures."
          </p>

          <p className="mb-1 text-[10px] tracking-wide text-[#686B60]">
            This is a name
          </p>
          <h3 className="text-sm font-semibold">William James</h3>

          <p className="mb-1 mt-2 text-[10px] tracking-wide text-[#686B60]">
            This is a subheading
          </p>
          <p className="text-xs text-[#858579]">Frequent Traveler</p>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
