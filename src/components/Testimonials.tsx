
function Testimonials() {
  const reviews = [
    {
      image: "https://i.pravatar.cc/160?img=47",
      alt: "Placeholder portrait of Alyssa Mae",
      quote:
        "I love how comfortable and easy it is to carry. There's enough room for my essentials, and it has quickly become my go-to bag for weekend adventures.",
      name: "Alyssa Mae",
      role: "Weekend Explorer",
    },
    {
      image: "https://i.pravatar.cc/160?img=12",
      alt: "Placeholder portrait of Nico Royce",
      quote:
        "A great companion for outdoor trips. I can organize my gear without feeling like I'm carrying too much. It's practical, reliable, and ready for the trail.",
      name: "Nico Royce",
      role: "Outdoor Enthusiast",
    },
    {
      image: "https://i.pravatar.cc/150?img=62",
      alt: "Placeholder portrait of William James",
      quote:
        "From quick getaways to longer trips, this backpack fits right into my lifestyle. I love its timeless look and how versatile it is for different adventures.",
      name: "William James",
      role: "Frequent Traveler",
    },
  ];

  return (
    <section
      id="testimonials"
      className="px-6 py-20 md:px-12 md:py-28 lg:px-20"
    >
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#79583C]">
        This is the testimonials section
      </p>

      {/* Section heading */}
      <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a heading
          </p>

          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.04em] text-[#4B2E1B] md:text-4xl lg:text-5xl">
            Made for every kind of adventure.
          </h2>
        </div>

        <div className="md:pb-1">
          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a paragraph
          </p>

          <p className="max-w-sm text-sm leading-7 text-[#686B60]">
            A little love from fellow explorers who bring PAKGO along
            for the journey.
          </p>
        </div>
      </div>

      {/* Testimonial cards */}
      <div className="grid items-stretch gap-5 md:grid-cols-3 md:gap-6">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="group flex flex-col rounded-2xl border border-[#E5DDCE] bg-[#FAF8F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9BBA5] hover:shadow-md md:p-8"
          >
            {/* Quote decoration */}
            <div className="mb-4 font-serif text-5xl leading-none text-[#85866A]">
              “
            </div>

            <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
              This is a paragraph
            </p>

            <p className="mb-8 flex-1 text-sm leading-7 text-[#686B60]">
              "{review.quote}"
            </p>

            <div className="flex items-center gap-4 border-t border-[#E5DDCE] pt-6">
              <img
                src={review.image}
                alt={review.alt}
                className="h-12 w-12 shrink-0 rounded-full object-cover"
              />

              <div>
                <p className="mb-1 text-[10px] tracking-wide text-[#686B60]">
                  This is a name
                </p>

                <h3 className="text-sm font-semibold text-[#4B2E1B]">
                  {review.name}
                </h3>

                <p className="mb-1 mt-2 text-[10px] tracking-wide text-[#686B60]">
                  This is a subheading
                </p>

                <p className="text-xs text-[#858579]">
                  {review.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
