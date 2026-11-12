import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check, Calendar, MapPin, Users, Sparkles } from 'lucide-react';
import { MayuraInnLogo, PinIcon } from './MayuraInnIcons';
import { Hotel, HOTELS, Offer } from '../data/mayurainnData';
import {
  BookingDraft,
  BookingValidationResult,
  calculatePriceQuote,
} from '../utils/bookingLogic';

export interface ConfirmedReservation {
  referenceCode: string;
  hotelName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  rooms: number;
  adults: number;
  guestName: string;
  guestEmail: string;
  totalEur: number;
}

interface FooterProps {
  onSelectHotel: (hotel: Hotel) => void;
  onOpenManageBooking: () => void;
  onOpenInfoModal: (title: string, content: string) => void;
}

export const FooterSection: React.FC<FooterProps> = ({
  onSelectHotel,
  onOpenManageBooking,
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
          </div>

          {/* Middle Column 1: Suites & Exploration */}
          <div className="md:col-span-3">
            <div className="font-courier text-xs uppercase tracking-widest text-white/50 mb-3">
              SUITES & GROUNDS
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#rooms-section"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  2 BEDROOM WITH HALL
                </a>
              </li>
              <li>
                <a
                  href="#rooms-section"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  3 BEDROOM WITH HALL
                </a>
              </li>
              <li>
                <a
                  href="#resort-overview-section"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  RESORT OVERVIEW
                </a>
              </li>
              <li>
                <a
                  href="#attractions-section"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  NEARBY ATTRACTIONS
                </a>
              </li>
              <li>
                <a
                  href="#offers-section"
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 transition-colors cursor-pointer text-left block"
                >
                  SPECIAL OFFERS
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Column 2: Company Links */}
          <div className="md:col-span-3">
            <div className="font-courier text-xs uppercase tracking-widest text-white/50 mb-3">
              ABOUT & CONTACT
            </div>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onOpenInfoModal(
                      'ABOUT KODAI MAYURA INN',
                      'Kodai Mayura Inn is an exclusive boutique hillside resort in Kodaikanal. Rooted in warm minimalism, organic architecture, and tranquil natural beauty, our property offers an unhurried mountain sanctuary for restorative escapes.'
                    )
                  }
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 cursor-pointer"
                >
                  ABOUT US
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenManageBooking}
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 cursor-pointer"
                >
                  MANAGE MY BOOKING
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onOpenInfoModal(
                      'COMPANY INFORMATION',
                      'Kodai Kodai Mayura Inn. Registered boutique luxury hospitality retreat in Kodaikanal, Tamil Nadu, India.'
                    )
                  }
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 cursor-pointer"
                >
                  COMPANY INFORMATION
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onOpenInfoModal(
                      'CONTACT US',
                      'Reservations & Guest Concierge: reservations@mayurainn.com · Available daily 08:00 – 22:00 IST.'
                    )
                  }
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 cursor-pointer"
                >
                  CONTACT US
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onOpenInfoModal(
                      'CAREERS AT KODAI MAYURA INN',
                      'Join our seasonal and year-round hospitality team in Kodaikanal. Send your CV to talent@mayurainn.com.'
                    )
                  }
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 cursor-pointer"
                >
                  CAREER
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                  className="font-display text-[17px] uppercase tracking-[0.04em] text-[#F9F8F6] hover:text-white/75 cursor-pointer"
                >
                  BACK TO TOP
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Vertical Social Icons Stack */}
          <div className="md:col-span-1 flex md:flex-col items-end justify-end gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kodai Mayura Inn on Instagram"
              className="text-white/85 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                <circle cx="12" cy="12" r="4.25" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kodai Mayura Inn on Facebook"
              className="text-white/85 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9.5" />
                <path d="M13.5 21v-7h2.5l.5-3h-3V9.5c0-.8.3-1.5 1.5-1.5H16V5.2c-.4-.1-1.2-.2-2.2-.2-2.3 0-3.8 1.4-3.8 3.9V11H8v3h2v7" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kodai Mayura Inn on LinkedIn"
              className="text-white/85 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kodai Mayura Inn on YouTube"
              className="text-white/85 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2.25" y="6" width="19.5" height="12" rx="2" />
                <polygon points="10 9.5 15 12 10 14.5 10 9.5" fill="currentColor" />
              </svg>
            </a>
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
                  'Kodai Mayura Inn respects your privacy and processes personal reservation data strictly and securely in accordance with global data protection standards.'
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
                  'We use strictly necessary cookies to remember your reservation dates, selected suite, and stay preferences.'
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
                  'By tagging #MayuraInn, you grant permission to showcase your photography in our community journal with full creator credit.'
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
  onSelectForBooking: (hotel: Hotel, roomRate?: number) => void;
}> = ({ hotel, onClose, onSelectForBooking }) => {
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
                Coordinates: {hotel.coordinates} · Adults-Only (16+)
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
                      {room.sizeSqm} m² · Up to {room.maxGuests} Adults
                    </div>
                    <p className="mt-3 font-courier text-xs leading-relaxed text-[#262421]">
                      {room.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#EAE7E1] flex items-center justify-between">
                    <span className="font-display text-xl tabular-nums">
                      ₹{room.rateEur}{' '}
                      <span className="font-courier text-xs font-normal text-[#5C5852]">
                        / night
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectForBooking(hotel, room.rateEur)}
                      className="px-3.5 py-1.5 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-sm uppercase tracking-wider cursor-pointer"
                    >
                      SELECT ROOM
                    </button>
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

/* Offer Slide-Over Drawer */
export const OfferDetailDrawer: React.FC<{
  offer: Offer | null;
  onClose: () => void;
  onApplyOfferToBooking: (offer: Offer) => void;
}> = ({ offer, onClose, onApplyOfferToBooking }) => {
  if (!offer) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/55"
      role="dialog"
      aria-modal="true"
      aria-label={offer.title}
    >
      <div className="fixed inset-0" onClick={onClose} />
      <div className="relative z-10 w-full max-w-[540px] bg-[#F9F8F6] text-[#171614] h-full overflow-y-auto p-6 sm:p-10 shadow-2xl flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#D3CFC7]">
            <span className="font-courier text-xs uppercase tracking-wider text-[#5C5852]">
              EXCLUSIVE OFFER
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close offer details"
              className="p-1.5 text-[#171614] hover:text-[#4A443B] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-6 aspect-[948/564] w-full overflow-hidden bg-[#E5E2DC]">
            <img
              src={offer.wideImage}
              alt={offer.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="mt-6 font-display text-4xl uppercase tracking-wide text-[#171614]">
            {offer.title}
          </h2>

          <div className="mt-2 flex items-center gap-1.5 font-courier text-sm text-[#4A443B]">
            <PinIcon className="w-4 h-4" />
            <span>{offer.hotelName}</span>
          </div>

          <div className="mt-5 p-4 bg-[#EFECE6] border border-[#DCD9D0] font-courier text-xs space-y-1.5">
            <div>
              <strong>Discount:</strong> {offer.discountPercent}%
            </div>
            <div>
              <strong>Book By:</strong> {offer.bookBy}
            </div>
            <div>
              <strong>For Stays:</strong> {offer.staysUntil}
            </div>
            <div>
              <strong>Promo Code:</strong> {offer.promoCode}
            </div>
          </div>

          <p className="mt-5 font-courier text-sm leading-relaxed text-[#262421]">
            {offer.summary}
          </p>

          <div className="mt-6">
            <h3 className="font-display text-xl uppercase tracking-wide mb-2">
              OFFER DETAILS
            </h3>
            <ul className="space-y-2 font-courier text-xs leading-relaxed text-[#262421]">
              {offer.details.map((line, i) => (
                <li key={i}>· {line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#D3CFC7]">
          <button
            type="button"
            onClick={() => onApplyOfferToBooking(offer)}
            className="w-full py-3.5 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-lg uppercase tracking-wider cursor-pointer"
          >
            APPLY {offer.discountPercent}% OFFER & SELECT DATES
          </button>
        </div>
      </div>
    </div>
  );
};

/* Validation & Checkout Modal */
export const BookingModal: React.FC<{
  isOpen: boolean;
  validation: BookingValidationResult | null;
  draft: BookingDraft;
  selectedRoomRate?: number;
  confirmedBookings: ConfirmedReservation[];
  onClose: () => void;
  onUpdateDraft: (next: BookingDraft) => void;
  onConfirmBooking: (reservation: ConfirmedReservation) => void;
}> = ({
  isOpen,
  validation,
  draft,
  selectedRoomRate,
  confirmedBookings,
  onClose,
  onUpdateDraft,
  onConfirmBooking,
}) => {
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [formError, setFormError] = useState('');
  const [justConfirmed, setJustConfirmed] =
    useState<ConfirmedReservation | null>(null);

  if (!isOpen) return null;

  const hotel = HOTELS.find((h) => h.id === draft.hotelId);

  // If validation failed, show the validation prompt with quick-fix inputs
  if (validation && !validation.valid) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
        role="dialog"
        aria-modal="true"
        aria-label={validation.errorTitle}
      >
        <div className="bg-[#F9F8F6] border border-[#D3CFC7] max-w-[460px] w-full p-7 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-[#E2DFD9]">
            <h3 className="font-display text-2xl uppercase tracking-wide text-[#171614]">
              {validation.errorTitle}
            </h3>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="p-1 text-[#5C5852] hover:text-[#171614] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-4 font-courier text-sm text-[#262421]">
            {validation.errorMessage}
          </p>

          {/* Allow instant completion inside the modal */}
          <div className="mt-5 space-y-4">
            <div>
              <label
                htmlFor="modal-hotel-select"
                className="block font-courier text-xs font-bold uppercase mb-1"
              >
                WHERE
              </label>
              <select
                id="modal-hotel-select"
                value={draft.hotelId}
                onChange={(e) =>
                  onUpdateDraft({ ...draft, hotelId: e.target.value })
                }
                className="w-full border border-[#C9C5BD] bg-white px-3 py-2 font-display text-base uppercase"
              >
                <option value="">SELECT ACCOMMODATION</option>
                {HOTELS.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.name} ({h.country}) — ₹{h.nightlyRateEur}/night
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="modal-checkin"
                  className="block font-courier text-xs font-bold uppercase mb-1"
                >
                  CHECK IN
                </label>
                <input
                  id="modal-checkin"
                  type="date"
                  value={draft.checkIn}
                  onChange={(e) =>
                    onUpdateDraft({ ...draft, checkIn: e.target.value })
                  }
                  className="w-full border border-[#C9C5BD] bg-white px-3 py-2 font-display text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="modal-checkout"
                  className="block font-courier text-xs font-bold uppercase mb-1"
                >
                  CHECK OUT
                </label>
                <input
                  id="modal-checkout"
                  type="date"
                  value={draft.checkOut}
                  onChange={(e) =>
                    onUpdateDraft({ ...draft, checkOut: e.target.value })
                  }
                  className="w-full border border-[#C9C5BD] bg-white px-3 py-2 font-display text-base"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-base uppercase tracking-wider cursor-pointer"
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!hotel) return null;

  const chosenRoom =
    hotel.rooms.find((r) => r.rateEur === selectedRoomRate) || hotel.rooms[0];
  const quote = calculatePriceQuote(
    hotel,
    chosenRoom.rateEur,
    draft.checkIn,
    draft.checkOut,
    draft.rooms,
    draft.promoCode
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestEmail.includes('@')) {
      setFormError('Please enter your full name and a valid email address.');
      return;
    }
    setFormError('');
    const reservation: ConfirmedReservation = {
      referenceCode: `CC-${Math.floor(100000 + Math.random() * 900000)}`,
      hotelName: hotel.name,
      roomName: chosenRoom.name,
      checkIn: draft.checkIn,
      checkOut: draft.checkOut,
      rooms: draft.rooms,
      adults: draft.adults,
      guestName: guestName.trim(),
      guestEmail: guestEmail.trim(),
      totalEur: quote.totalEur,
    };
    setJustConfirmed(reservation);
    onConfirmBooking(reservation);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65"
      role="dialog"
      aria-modal="true"
      aria-label="Complete Your Reservation"
    >
      <div className="bg-[#F9F8F6] border border-[#D3CFC7] max-w-[620px] w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-[#D3CFC7]">
          <h2 className="font-display text-3xl uppercase tracking-wide text-[#171614]">
            {justConfirmed ? 'RESERVATION CONFIRMED' : 'DIRECT RESERVATION'}
          </h2>
          <button
            type="button"
            onClick={() => {
              setJustConfirmed(null);
              onClose();
            }}
            aria-label="Close reservation dialog"
            className="p-1 text-[#5C5852] hover:text-[#171614] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {justConfirmed ? (
          <div className="py-6 space-y-5">
            <div className="p-5 bg-[#4A443B] text-white space-y-2">
              <div className="font-courier text-xs uppercase tracking-wider text-white/80">
                BOOKING REFERENCE: {justConfirmed.referenceCode}
              </div>
              <div className="font-display text-2xl uppercase">
                {justConfirmed.hotelName} — {justConfirmed.roomName}
              </div>
              <div className="font-courier text-xs text-white/90">
                {justConfirmed.checkIn} to {justConfirmed.checkOut} ·{' '}
                {justConfirmed.rooms} Room(s), {justConfirmed.adults} Adult(s)
              </div>
              <div className="font-display text-xl pt-2 border-t border-white/20 tabular-nums">
                Total Guaranteed Rate: ₹{justConfirmed.totalEur}
              </div>
            </div>

            <p className="font-courier text-xs leading-relaxed text-[#262421]">
              Thank you, {justConfirmed.guestName}. A confirmation itinerary has
              been registered for {justConfirmed.guestEmail}.
            </p>

            <button
              type="button"
              onClick={() => {
                setJustConfirmed(null);
                onClose();
              }}
              className="w-full py-3 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-lg uppercase tracking-wider cursor-pointer"
            >
              DONE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-5">
            <div className="p-4 bg-[#EFECE6] border border-[#DCD9D0] space-y-2 font-courier text-xs">
              <div className="font-display text-xl uppercase text-[#171614]">
                {hotel.name} · {chosenRoom.name}
              </div>
              <div>
                Dates: <strong>{draft.checkIn}</strong> to{' '}
                <strong>{draft.checkOut}</strong> ({quote.nights} nights)
              </div>
              <div>
                Occupancy: {draft.rooms} Room(s) · {draft.adults} Adult(s)
              </div>
              {quote.appliedOfferTitle && (
                <div className="text-[#4A443B] font-bold">
                  Applied Benefit: {quote.appliedOfferTitle} (-₹
                  {quote.discountAmount})
                </div>
              )}
              <div className="pt-2 border-t border-[#D3CFC7] flex items-center justify-between font-display text-xl text-[#171614] tabular-nums">
                <span>TOTAL STAY</span>
                <span>₹{quote.totalEur}</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="guest-full-name"
                className="block font-courier text-xs font-bold uppercase mb-1"
              >
                FULL NAME *
              </label>
              <input
                id="guest-full-name"
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Elena Papadopoulos"
                className="w-full border border-[#C9C5BD] bg-white px-3.5 py-2.5 font-courier text-sm focus:outline-none focus:border-[#4A443B]"
              />
            </div>

            <div>
              <label
                htmlFor="guest-email"
                className="block font-courier text-xs font-bold uppercase mb-1"
              >
                EMAIL ADDRESS *
              </label>
              <input
                id="guest-email"
                type="email"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                placeholder="elena@example.com"
                className="w-full border border-[#C9C5BD] bg-white px-3.5 py-2.5 font-courier text-sm focus:outline-none focus:border-[#4A443B]"
              />
            </div>

            {formError && (
              <div
                role="alert"
                className="font-courier text-xs text-red-700 bg-red-50 border border-red-200 p-2.5"
              >
                {formError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-lg uppercase tracking-wider cursor-pointer"
            >
              CONFIRM RESERVATION (₹{quote.totalEur})
            </button>
          </form>
        )}

        {confirmedBookings.length > 0 && (
          <div className="mt-6 pt-5 border-t border-[#D3CFC7]">
            <h4 className="font-display text-base uppercase tracking-wider mb-2">
              YOUR SAVED BOOKINGS ({confirmedBookings.length})
            </h4>
            <div className="space-y-2">
              {confirmedBookings.map((b) => (
                <div
                  key={b.referenceCode}
                  className="p-2.5 bg-white border border-[#DCD9D0] font-courier text-xs flex items-center justify-between"
                >
                  <span>
                    <strong>{b.referenceCode}</strong> · {b.hotelName} (
                    {b.checkIn})
                  </span>
                  <span className="tabular-nums font-bold">₹{b.totalEur}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
