
function Footer() {
  return (
    <footer className="border-t border-[#E5DDCE] bg-[#EDE8DC] px-6 pb-8 pt-12 md:px-12 md:pt-16 lg:px-20">
      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#79583C]">
        This is the footer section
      </p>

      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

        {/* Brand */}
        <div>
          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a logo
          </p>

          <div className="flex items-center gap-3">
            <img
              src="/images/backpack.png"
              alt="PAKGO backpack logo"
              className="h-14 w-14 object-contain"
            />

            <div className="flex flex-col">
              <a
                href="#top"
                className="text-xl font-bold tracking-[0.16em] text-[#4B2E1B] transition-colors hover:text-[#79583C]"
              >
                PAKGO
              </a>
            </div>
          </div>

          <p className="mt-5 max-w-xs text-sm leading-7 text-[#686B60]">
            Wherever the road leads, bring a little curiosity and a sense of adventure.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a navigation menu
          </p>

          <nav className="flex flex-col items-start gap-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#79583C]">
              Explore
            </p>

            <a
              href="#top"
              className="text-sm text-[#686B60] transition-colors hover:text-[#4B2E1B]"
            >
              Home
            </a>

            <a
              href="#gallery"
              className="text-sm text-[#686B60] transition-colors hover:text-[#4B2E1B]"
            >
              The Backpack
            </a>

            <a
              href="#testimonials"
              className="text-sm text-[#686B60] transition-colors hover:text-[#4B2E1B]"
            >
              Reviews
            </a>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 flex flex-col gap-3 border-t border-[#D8CEBC] pt-6 md:mt-16 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a copyright text
          </p>

          <p className="text-xs text-[#858579]">
            © {new Date().getFullYear()} PAKGO. All rights reserved.
          </p>
        </div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#85866A]">
          Pack up. Go places.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
