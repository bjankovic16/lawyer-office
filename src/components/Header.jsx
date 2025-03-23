import React, { useState, useEffect } from 'react';

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);  // Auto-hide
  const [scrolled, setScrolled] = useState(false);     // Whether user has scrolled from top
  const [lastScrollY, setLastScrollY] = useState(0);   // Previous scroll position
  const [menuOpen, setMenuOpen] = useState(false);     // Toggle for side menu (mobile+md)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background color if not at top
      setScrolled(currentScrollY > 0);

      // Auto-hide header: hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
        setMenuOpen(false); // close menu if scrolling down
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`
        fixed top-0 w-full z-50
        transform transition-all duration-300
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
        ${scrolled ? 'bg-indigo-950 shadow-md' : 'bg-transparent'}
      `}
    >
      <div
        className="relative max-w-6xl mx-auto 
                   px-10 py-6 
                   flex justify-between items-center
                   md:px-14 md:py-6
                   xl:max-w-7xl xl:px-16 xl:py-8"
      >
        {/* Logo / Brand */}
        <div className="text-2xl xl:text-3xl font-serif font-bold uppercase text-white">
          <a href="#top" className="hover:text-gray-400">
            Advokatska kancelarija Petrović
          </a>
        </div>

        {/* Desktop Nav (≥ lg) */}
        <nav className="hidden lg:flex space-x-6 text-white font-medium text-lg xl:space-x-8 xl:text-xl">
          <a className="hover:text-gray-200 transition-colors duration-300" href="#about">
            O nama
          </a>
          <a className="hover:text-gray-200 transition-colors duration-300" href="#services">
            Usluge
          </a>
          <a className="hover:text-gray-200 transition-colors duration-300" href="#contact">
            Kontakt
          </a>
        </nav>

        {/* Hamburger for < lg (small and medium screens) */}
        <button
          className="lg:hidden focus:outline-none relative z-30"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>
      </div>

      {/* Overlay behind mobile+md side menu */}
      <div
        className={`
          lg:hidden fixed inset-0
          bg-black bg-opacity-50
          transition-all duration-300
          ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}
        `}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-in Side Menu for < lg */}
      <aside
        className={`
          lg:hidden
          fixed top-0 right-0
          h-screen w-64
          bg-indigo-950 text-white
          transform transition-transform duration-300
          flex flex-col items-start
          pt-24 px-6
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <a
          href="#about"
          className="mb-4 text-lg font-medium hover:text-gray-200 transition-colors duration-300"
          onClick={() => setMenuOpen(false)}
        >
          O nama
        </a>
        <a
          href="#services"
          className="mb-4 text-lg font-medium hover:text-gray-200 transition-colors duration-300"
          onClick={() => setMenuOpen(false)}
        >
          Usluge
        </a>
        <a
          href="#contact"
          className="mb-4 text-lg font-medium hover:text-gray-200 transition-colors duration-300"
          onClick={() => setMenuOpen(false)}
        >
          Kontakt
        </a>
      </aside>
    </header>
  );
}
