
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
    },
  ];

  return (
    <section
      id="gallery"
      className="px-6 py-20 md:px-12 md:py-28 lg:px-20"
    >
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#79583C]">
        This is the gallery section
      </p>

      {/* Section heading */}
      <div className="mb-14 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a heading
          </p>

          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.045em] text-[#4B2E1B] md:text-4xl lg:text-5xl">
            One backpack.
            <span className="block font-serif font-normal italic text-[#85866A]">
              Endless possibilities.
            </span>
          </h2>
        </div>

        <div className="md:max-w-sm md:pb-1">
          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a paragraph
          </p>

          <p className="text-sm leading-7 text-[#686B60]">
            Meet your new travel companion. From everyday essentials to
            unforgettable getaways, PAKGO is made to go wherever the journey
            takes you.
          </p>
        </div>
      </div>

      {/* Alternating gallery rows */}
      <div className="flex flex-col gap-6 md:gap-9">
        {stories.map((story) => (
          <div
            key={story.number}
            className="grid items-stretch gap-5 md:grid-cols-2 md:gap-8"
          >
            {/* Image */}
            <div
              className={`group relative min-h-72 overflow-hidden rounded-2xl md:min-h-96 ${
                story.imageFirst ? "order-1" : "order-1 md:order-2"
              }`}
            >
              <img
                src={story.image}
                alt={story.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            {/* Text */}
            <div
              className={`flex min-h-72 flex-col justify-center rounded-2xl p-8 md:min-h-96 md:p-10 lg:p-12 ${
                story.number === "02" || story.number === "04"
                  ? "order-2 bg-[#FAF8F2] border border-[#E5DDCE]"
                  : "order-2 bg-[#E5DDCE]"
              } ${
                story.imageFirst ? "" : "md:order-1"
              }`}
            >
              <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
                This is a subheading
              </p>

              <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#79583C]">
                <span className="h-px w-7 bg-[#79583C]" />
                {story.number} / {story.label}
              </p>

              <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
                This is a heading
              </p>

              <h3 className="mb-5 max-w-md text-2xl font-bold leading-tight tracking-[-0.035em] text-[#4B2E1B] md:text-3xl">
                {story.title}
              </h3>

              <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
                This is a paragraph
              </p>

              <p className="max-w-md text-sm leading-7 text-[#686B60]">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
