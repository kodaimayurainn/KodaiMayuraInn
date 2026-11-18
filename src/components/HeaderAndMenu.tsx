import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { MayuraInnLogo, HamburgerIcon } from './MayuraInnIcons';
import { RESORT_CONTACT } from '../data/mayurainnData';
import { Link, useRouter } from '../router/Router';

interface HeaderAndMenuProps {
  showHeaderLogo: boolean;
  onNavigateSection?: (sectionId: string) => void;
}

export const HeaderAndMenu: React.FC<HeaderAndMenuProps> = ({
  showHeaderLogo,
  onNavigateSection,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

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

        {/* Zone 2: Centered Kodai Mayura Inn Logo */}
        <Link
          href="/"
          aria-label="Kodai Mayura Inn Resort Home"
          className={`transition-opacity duration-300 ${
            showHeaderLogo || currentPath !== '/' ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <MayuraInnLogo className="h-[34px] w-auto" variant="white" />
        </Link>

        {/* Zone 3: Direct Phone Call Shortcut */}
        <div className="flex items-center">
          <a
            href={`tel:${RESORT_CONTACT.phoneTel}`}
            aria-label="Call Kodai Mayura Inn"
            className="hidden sm:inline-flex items-center gap-1.5 font-courier text-xs text-white/90 hover:text-white px-3 py-1.5 border border-white/30 rounded-xs uppercase tracking-wider"
          >
            <span>CALL</span>
          </a>
          <div className="w-6 sm:hidden" aria-hidden="true" />
        </div>
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
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <MayuraInnLogo className="h-[36px] w-auto" variant="white" />
                </Link>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-2 text-white/80 hover:text-white cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <ul className="mt-8 space-y-4 font-display text-2xl tracking-wider uppercase text-white">
                <li>
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-between hover:text-white/80 transition-colors py-1"
                  >
                    <span>HOME</span>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/rooms/"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-between hover:text-white/80 transition-colors py-1"
                  >
                    <span>OUR ROOMS & SUITES</span>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about/"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-between hover:text-white/80 transition-colors py-1"
                  >
                    <span>ABOUT OUR RESORT</span>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/location/"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-between hover:text-white/80 transition-colors py-1"
                  >
                    <span>LOCATION & MAP</span>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/gallery/"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-between hover:text-white/80 transition-colors py-1"
                  >
                    <span>PHOTO GALLERY</span>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/kodaikanal-travel-guide/"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-between hover:text-white/80 transition-colors py-1"
                  >
                    <span>KODAI TRAVEL GUIDE</span>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact/"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-between hover:text-white/80 transition-colors py-1"
                  >
                    <span>CONTACT & RESERVATIONS</span>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-white/15 font-courier text-xs text-white/70 space-y-2">
              <p className="text-white font-medium">Kodai Mayura Inn</p>
              <p>Coordinates: 10.2446° N, 77.4917° E</p>
              <p>
                Direct Phone:{' '}
                <a
                  href={`tel:${RESORT_CONTACT.phoneTel}`}
                  className="text-white hover:underline"
                >
                  {RESORT_CONTACT.phoneFormatted}
                </a>
              </p>
              <p>
                Instagram:{' '}
                <a
                  href={RESORT_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  {RESORT_CONTACT.instagramHandle}
                </a>
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
