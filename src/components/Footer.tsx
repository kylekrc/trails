
function Footer() {
  return (
    <footer className="border-t border-[#E5DDCE] px-6 py-10 md:px-12 lg:px-20">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#79583C]">
        This is the footer section
      </p>

      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        {/* Brand */}
        <div>
          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a logo
          </p>

          <div className="flex items-center gap-2.5">
            <img
              src="/images/backpack.png"
              alt="PAKGO backpack logo"
              className="h-11 w-11 object-contain"
            />

            <div className="flex flex-col">
              <a
                href="#top"
                className="text-lg font-bold tracking-[0.15em] text-[#4B2E1B] transition hover:text-[#79583C]"
              >
                PAKGO
              </a>

              <p className="text-xs tracking-wide text-[#686B60]">
                Pack up. Go places.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-2 text-[10px] tracking-wide text-[#686B60]">
            This is a navigation menu
          </p>

          <nav className="flex flex-col items-start gap-3 text-sm text-[#686B60]">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#79583C]">
              Explore
            </p>

            <a href="#top" className="transition hover:text-[#79583C]">
              Home
            </a>
            <a href="#gallery" className="transition hover:text-[#79583C]">
              The Backpack
            </a>
            <a href="#testimonials" className="transition hover:text-[#79583C]">
              Reviews
            </a>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <p className="mb-2 mt-8 text-[10px] tracking-wide text-[#686B60]">
        This is a copyright text
      </p>

      <p className="border-t border-[#E5DDCE] pt-6 text-xs text-[#858579]">
        © {new Date().getFullYear()} PAKGO. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
