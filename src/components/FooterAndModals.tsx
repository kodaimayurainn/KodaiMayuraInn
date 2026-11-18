import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { MayuraInnLogo, PinIcon } from './MayuraInnIcons';
import { Hotel, RESORT_CONTACT } from '../data/mayurainnData';
import { Link } from '../router/Router';

interface FooterProps {
  onOpenInfoModal: (title: string, content: string) => void;
}

export const FooterSection: React.FC<FooterProps> = ({
  onOpenInfoModal,
}) => {
  return (
    <footer
      id="footer-section"
      className="bg-[#4A443B] text-[#F9F8F6] pt-16 pb-32 px-6 md:px-14 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1360px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-16">
          {/* Left: Kodai Mayura Inn Logo */}
          <div className="md:col-span-5">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="Kodai Mayura Inn Resort"
              className="inline-block"
            >
              <MayuraInnLogo className="w-[180px] sm:w-[210px] h-auto" variant="white" />
            </a>
            <p className="mt-4 font-courier text-xs text-white/70 max-w-[320px] leading-relaxed">
              Boutique hillside retreat in Kodaikanal. Thoughtfully designed suites, panoramic mountain vistas, and unhurried luxury.
            </p>

            <div className="mt-5 pt-4 border-t border-white/15 space-y-1.5 font-courier text-xs text-white/80">
              <p>
                <span className="text-white/50">Location:</span> {RESORT_CONTACT.location}
              </p>
              <p>
                <span className="text-white/50">Contact:</span>{' '}
                <a
                  href={`tel:${RESORT_CONTACT.phoneTel}`}
                  className="text-white hover:underline"
                >
                  {RESORT_CONTACT.phoneFormatted}
                </a>
              </p>
              <p>
                <span className="text-white/50">Instagram:</span>{' '}
                <a
                  href={RESORT_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  {RESORT_CONTACT.instagramHandle}
                </a>
              </p>
              <p>
                <span className="text-white/50">Website:</span>{' '}
                <a
                  href={RESORT_CONTACT.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  {RESORT_CONTACT.website}
                </a>
              </p>
            </div>
          </div>

          {/* Middle Column 1: Suites & Exploration */}
          <div className="md:col-span-3">
            <div className="font-courier text-xs uppercase tracking-widest text-white/50 mb-3">
              SUITES & GROUNDS
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/rooms/"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  SINGLE BEDROOM
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms/"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  2 BEDROOM WITH HALL
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms/"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  3 BEDROOM WITH HALL
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery/"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  PHOTO GALLERY
                </Link>
              </li>
              <li>
                <Link
                  href="/location/"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  LOCATION & MAP
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle Column 2: Company Links */}
          <div className="md:col-span-4">
            <div className="font-courier text-xs uppercase tracking-widest text-white/50 mb-3">
              ABOUT & GUIDES
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about/"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/kodaikanal-travel-guide/"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  KODAIKANAL TRAVEL GUIDE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  CONTACT & RESERVATIONS
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 cursor-pointer text-left"
                >
                  BACK TO TOP
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-courier text-xs text-white/75">
          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() =>
                onOpenInfoModal(
                  'PRIVACY POLICY',
                  'Kodai Mayura Inn respects your privacy and processes personal data strictly and securely in accordance with global data protection standards.'
                )
              }
              className="hover:text-white cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() =>
                onOpenInfoModal(
                  'COOKIE POLICY',
                  'We use strictly necessary cookies to ensure the website functions properly.'
                )
              }
              className="hover:text-white cursor-pointer"
            >
              Cookie Policy
            </button>
            <button
              type="button"
              onClick={() =>
                onOpenInfoModal(
                  'USER GENERATED CONTENT',
                  'Tag @kodaimayurainn on Instagram to be featured! By tagging @kodaimayurainn on Instagram, you grant permission to showcase your photography in our community journal with full creator credit.'
                )
              }
              className="hover:text-white cursor-pointer"
            >
              User Generated Content
            </button>
          </div>
          <div>Kodai Mayura Inn, All rights reserved</div>
        </div>
      </motion.div>
    </footer>
  );
};

/* Hotel Details Modal */
export const HotelDetailModal: React.FC<{
  hotel: Hotel | null;
  onClose: () => void;
}> = ({ hotel, onClose }) => {
  if (!hotel) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-[1px]"
      role="dialog"
      aria-modal="true"
      aria-label={hotel.name}
    >
      <div className="bg-[#F9F8F6] text-[#171614] w-full max-w-[960px] max-h-[90vh] overflow-y-auto border border-[#D3CFC7] shadow-2xl">
        {/* Hero Image Banner */}
        <div className="relative h-[280px] sm:h-[360px] w-full bg-[#4A443B]">
          <img
            src={hotel.heroImage}
            alt={hotel.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close hotel details"
            className="absolute top-4 right-4 w-10 h-10 bg-[#4A443B]/90 text-white flex items-center justify-center hover:bg-[#4A443B] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 font-courier text-xs uppercase tracking-wider text-white/90">
              <PinIcon className="w-4 h-4" />
              <span>
                {hotel.location} · {hotel.country}
              </span>
              {hotel.openingDate && (
                <>
                  <span>·</span>
                  <span>{hotel.openingDate}</span>
                </>
              )}
            </div>
            <h2 className="mt-1 font-display text-4xl sm:text-5xl uppercase tracking-wide">
              {hotel.name}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <h3 className="font-display text-2xl uppercase tracking-wide mb-3">
                THE SANCTUARY
              </h3>
              <p className="font-courier text-sm leading-relaxed text-[#262421]">
                {hotel.fullDescription}
              </p>
              <div className="mt-4 font-courier text-xs text-[#5C5852]">
                Coordinates: {hotel.coordinates} · Family-Friendly Hillside Sanctuary
              </div>
            </div>

            <div className="md:col-span-5 bg-[#EFECE6] p-5 border border-[#DCD9D0]">
              <h4 className="font-display text-xl uppercase tracking-wide mb-3">
                ARCHITECTURAL HIGHLIGHTS
              </h4>
              <ul className="space-y-2 font-courier text-xs text-[#262421]">
                {hotel.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#4A443B] font-bold">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Room Categories */}
          <div>
            <h3 className="font-display text-2xl uppercase tracking-wide mb-4">
              SUITES & ROOMS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hotel.rooms.map((room) => (
                <div
                  key={room.name}
                  className="border border-[#D3CFC7] bg-white p-5 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display text-xl uppercase text-[#171614]">
                      {room.name}
                    </h4>
                    <div className="mt-1 font-courier text-xs text-[#5C5852]">
                      Up to {room.maxGuests} Guests · Family Friendly
                    </div>
                    <p className="mt-3 font-courier text-xs leading-relaxed text-[#262421]">
                      {room.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#EAE7E1] flex items-center justify-between">
                    <div>
                      <span className="font-display text-xl tabular-nums">
                        ₹{room.rateEur}{' '}
                        <span className="font-courier text-xs font-normal text-[#5C5852]">
                          / night
                        </span>
                      </span>
                      <div className="font-courier text-[10px] text-[#828578] mt-0.5">
                        *Prices may vary based on demand
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
