function Footer() {
  const links = [
    { label: "Home", href: "#top" },
    { label: "The Backpack", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
  ];

  return (
    <footer className="border-t border-sand-deep bg-footer pb-8 pt-14 md:pt-16">
      <div className="page-container">
        <p className="section-label">This is the footer section</p>

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <p className="tag">This is a logo</p>

            <a href="#top" className="group flex items-center gap-3">
              <img
                src="/images/backpack.png"
                alt="PAKGO backpack logo"
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:-rotate-6"
              />
              <span className="text-xl font-bold tracking-[0.16em] text-bark transition-colors group-hover:text-leather">
                PAKGO
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-sage">
              Wherever the road leads, bring a little curiosity and a sense of
              adventure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="tag">This is a navigation menu</p>

            <nav className="flex flex-col items-start gap-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-leather">
                Explore
              </p>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative text-sm text-sage transition-colors hover:text-bark"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 bg-leather transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col gap-4 border-t border-sand-deep pt-6 md:mt-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="tag">This is a copyright text</p>
            <p className="text-xs text-sage">
              © {new Date().getFullYear()} PAKGO. All rights reserved.
            </p>
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-forest">
            Pack up. Go places.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
