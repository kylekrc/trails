
function Gallery() {
  const stories = [
    {
      number: "01",
      label: "Meet PAKGO",
      title: "Made for the journey ahead.",
      description:
        "Say hello to the PAKGO Alpine Backpack. A travel companion designed to be part of your everyday plans and your biggest adventures.",
      image: "/images/gallery-1.jpg",
      alt: "PAKGO backpack featured",
      imageFirst: true,
      position: "62% center",
    },
    {
      number: "02",
      label: "Room for adventure",
      title: "Bring what matters.",
      description:
        "Pack your essentials, gather your favorite people, and get ready to explore. The best adventures start with being prepared to go.",
      image: "/images/gallery-2.jpg",
      alt: "PAKGO backpack ready for an adventure",
      imageFirst: false,
      position: "55% center",
    },
    {
      number: "03",
      label: "Take the scenic route",
      title: "Wherever you go, go with wonder.",
      description:
        "From familiar streets to breathtaking mountain views, every destination has a story to tell. Make room for new places and unexpected moments.",
      image: "/images/gallery-3.jpg",
      alt: "Travel scenery from a PAKGO adventure",
      imageFirst: true,
      position: "45% center",
    },
    {
      number: "04",
      label: "Your next chapter",
      title: "Pack up. Go places.",
      description:
        "A quick weekend escape or a trip you've been planning for months, your next adventure is waiting. Take PAKGO along for the ride.",
      image: "/images/gallery-4.png",
      alt: "PAKGO travel adventure",
      imageFirst: false,
      position: "70% center",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="page-container">
        <p className="section-label">This is the gallery section</p>

        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="tag">This is a heading</p>
            <h2 className="max-w-2xl text-3xl font-bold leading-[1.1] tracking-[-0.04em] text-bark md:text-4xl lg:text-5xl">
              One backpack.
              <span className="mt-1 block font-serif font-normal italic tracking-[-0.02em] text-forest">
                Endless possibilities.
              </span>
            </h2>
          </div>

          <div className="md:max-w-sm md:pb-1">
            <p className="tag">This is a paragraph</p>
            <p className="text-sm leading-7 text-sage">
              Meet your new travel companion. From everyday essentials to
              unforgettable getaways, PAKGO is made to go wherever the journey
              takes you.
            </p>
          </div>
        </div>

        {/* Alternating gallery rows: 1 photo-text, 2 text-photo, 3 photo-text, 4 text-photo */}
        <div className="flex flex-col gap-6 md:gap-8">
          {stories.map((story) => {
            const tinted = story.number === "01" || story.number === "03";
            return (
              <div
                key={story.number}
                className="grid items-stretch gap-5 md:grid-cols-2 md:gap-8"
              >
                {/* Image */}
                <div
                  className={`group relative aspect-[4/3] min-w-0 overflow-hidden rounded-2xl border border-sand bg-sand md:aspect-auto md:min-h-[26rem] ${
                    story.imageFirst ? "order-1" : "order-1 md:order-2"
                  }`}
                >
                  <img
                    src={story.image}
                    alt={story.alt}
                    style={{ objectPosition: story.position }}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Text */}
                <div
                  className={`flex min-w-0 flex-col justify-center rounded-2xl border border-sand p-8 md:p-10 lg:p-14 ${
                    tinted ? "bg-sand" : "bg-ivory"
                  } order-2 ${story.imageFirst ? "" : "md:order-1"}`}
                >
                  <p className="tag self-start">This is a subheading</p>
                  <p className="eyebrow mb-6">
                    {story.number} / {story.label}
                  </p>

                  <p className="tag self-start">This is a heading</p>
                  <h3 className="mb-5 max-w-md text-2xl font-bold leading-tight tracking-[-0.03em] text-bark md:text-3xl">
                    {story.title}
                  </h3>

                  <p className="tag self-start">This is a paragraph</p>
                  <p className="max-w-md text-sm leading-7 text-sage md:text-base md:leading-8">
                    {story.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
