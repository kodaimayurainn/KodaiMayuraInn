import React, { useState } from 'react';
import { X } from 'lucide-react';
import { MayuraInnLogo, HamburgerIcon } from './MayuraInnIcons';
import { Hotel, HOTELS } from '../data/mayurainnData';

interface HeaderAndMenuProps {
  showHeaderLogo: boolean;
  onSelectHotel: (hotel: Hotel) => void;
  onOpenManageBooking: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const HeaderAndMenu: React.FC<HeaderAndMenuProps> = ({
  showHeaderLogo,
  onSelectHotel,
  onOpenManageBooking,
  onNavigateSection,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hotelsExpanded, setHotelsExpanded] = useState(true);

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-[56px] bg-[#4A443B] text-white flex items-center justify-between px-5 md:px-8 transition-colors">
        {/* Zone 1: Left Hamburger Menu Trigger */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            className="p-2 -ml-2 text-white/90 hover:text-white transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <HamburgerIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Zone 2: Centered Mayura Inn Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Mayura Inn Resort Home"
          className={`transition-opacity duration-300 ${
            showHeaderLogo ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <MayuraInnLogo className="h-[34px] w-auto" variant="white" />
        </a>

        {/* Zone 3: Balanced spacer */}
        <div className="w-6" aria-hidden="true" />
      </header>

      {/* Slide-out Full Navigation Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
        >
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-[1px] transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          <nav className="relative z-10 w-full max-w-[420px] bg-[#4A443B] text-[#F9F8F6] h-full flex flex-col justify-between p-7 md:p-10 overflow-y-auto shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-8 border-b border-white/15">
                <MayuraInnLogo className="h-[36px] w-auto" variant="white" />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-2 text-white/80 hover:text-white cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <ul className="mt-8 space-y-5">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavClick('rooms-section')}
                    className="w-full flex items-center justify-between font-display text-2xl tracking-wider uppercase text-white hover:text-white/80 cursor-pointer"
                  >
                    <span>OUR ROOMS & SUITES</span>
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => handleNavClick('resort-overview-section')}
                    className="w-full flex items-center justify-between font-display text-2xl tracking-wider uppercase text-white hover:text-white/80 cursor-pointer"
                  >
                    <span>RESORT OVERVIEW</span>
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => handleNavClick('attractions-section')}
                    className="font-display text-2xl tracking-wider uppercase text-white hover:text-white/80 cursor-pointer"
                  >
                    NEARBY ATTRACTIONS
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => handleNavClick('offers-section')}
                    className="font-display text-2xl tracking-wider uppercase text-white hover:text-white/80 cursor-pointer"
                  >
                    OFFERS
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => handleNavClick('testimonials-section')}
                    className="font-display text-2xl tracking-wider uppercase text-white hover:text-white/80 cursor-pointer"
                  >
                    GUEST REVIEWS
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenManageBooking();
                    }}
                    className="font-display text-2xl tracking-wider uppercase text-white hover:text-white/80 cursor-pointer"
                  >
                    MANAGE MY BOOKING
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => handleNavClick('footer-section')}
                    className="font-display text-2xl tracking-wider uppercase text-white hover:text-white/80 cursor-pointer"
                  >
                    ABOUT & CONTACT US
                  </button>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-white/15 font-courier text-xs text-white/70 space-y-1">
              <p>Mayura Inn · Hillside Sanctuary</p>
              <p>Kodaikanal · Western Ghats, Tamil Nadu</p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
