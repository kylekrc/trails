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
      image: "https://i.pravatar.cc/160?img=62",
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
      className="border-y border-sand bg-ivory/60 py-20 md:py-28"
    >
      <div className="page-container">
        <p className="section-label">This is the testimonials section</p>

        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="tag">This is a heading</p>
            <h2 className="max-w-xl text-3xl font-bold leading-[1.1] tracking-[-0.04em] text-bark md:text-4xl lg:text-5xl">
              Made for every kind of adventure.
            </h2>
          </div>

          <div className="md:pb-1">
            <p className="tag">This is a paragraph</p>
            <p className="max-w-sm text-sm leading-7 text-sage">
              A little love from fellow explorers who bring PAKGO along for the
              journey.
            </p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid items-stretch gap-5 md:grid-cols-3 md:gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="group flex h-full flex-col rounded-2xl border border-sand bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sand-deep hover:shadow-[0_18px_40px_-24px_rgb(75_46_27/0.4)] md:p-8"
            >
              <div
                aria-hidden="true"
                className="mb-3 h-10 font-serif text-6xl leading-none text-olive"
              >
                “
              </div>

              <div className="flex flex-1 flex-col">
                <p className="tag self-start">This is a paragraph</p>
                <p className="mb-8 flex-1 text-[0.95rem] leading-7 text-sage">
                  {review.quote}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-sand pt-6">
                <img
                  src={review.image}
                  alt={review.alt}
                  className="h-14 w-14 shrink-0 rounded-full border-2 border-ivory object-cover ring-1 ring-sand-deep"
                />

                <div className="min-w-0">
                  <p className="tag">This is a name</p>
                  <h3 className="text-sm font-semibold text-bark">
                    {review.name}
                  </h3>

                  <p className="tag mt-2">This is a subheading</p>
                  <p className="text-xs text-sage">{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
