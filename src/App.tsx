import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { X, Send, MessageSquare } from 'lucide-react';
import { MayuraInnLogo } from './components/MayuraInnIcons';
import { HeaderAndMenu } from './components/HeaderAndMenu';
import { RoomsSection, RoomSuite } from './components/RoomsSection';
import { TestimonialsAndResortSection } from './components/TestimonialsAndResortSection';
import { DolomitesAndOffersSection } from './components/DolomitesAndOffersSection';
import {
  FooterSection,
  HotelDetailModal,
  OfferDetailDrawer,
  BookingModal,
  ConfirmedReservation,
} from './components/FooterAndModals';
import { Hotel, HOTELS, Offer } from './data/mayurainnData';
import {
  BookingDraft,
  BookingValidationResult,
  validateBookingDraft,
} from './utils/bookingLogic';

export default function App() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroVideoY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const heroVideoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroLogoY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const heroLogoOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const heroLogoScale = useTransform(scrollYProgress, [0, 0.72], [1, 0.92]);
  const heroOverlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.25, 0.6]);

  const [draft, setDraft] = useState<BookingDraft>({
    hotelId: '',
    checkIn: '',
    checkOut: '',
    rooms: 1,
    adults: 2,
    promoCode: '',
  });

  const [selectedHotelModal, setSelectedHotelModal] = useState<Hotel | null>(
    null
  );
  const [selectedOfferDrawer, setSelectedOfferDrawer] = useState<Offer | null>(
    null
  );
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingValidation, setBookingValidation] =
    useState<BookingValidationResult | null>(null);
  const [selectedRoomRate, setSelectedRoomRate] = useState<number | undefined>(
    undefined
  );

  const [confirmedBookings, setConfirmedBookings] = useState<
    ConfirmedReservation[]
  >([
    {
      referenceCode: 'MI-842910',
      hotelName: 'Kodai Mayura Inn',
      roomName: '2 Bedroom with Hall Suite',
      checkIn: '2027-01-15',
      checkOut: '2027-01-19',
      rooms: 1,
      adults: 2,
      guestName: 'Charles Miller',
      guestEmail: 'charles@example.com',
      totalEur: 14000,
    },
  ]);

  const [infoModal, setInfoModal] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [conciergeInput, setConciergeInput] = useState('');
  const [conciergeMessages, setConciergeMessages] = useState<
    { sender: 'concierge' | 'guest'; text: string }[]
  >([
    {
      sender: 'concierge',
      text: 'Welcome to Kodai Mayura Inn, Kodaikanal. How may our Reservations Concierge assist with your stay, suite selection, or local attractions?',
    },
  ]);

  const [cookieDialogOpen, setCookieDialogOpen] = useState(false);
  const [cookiePrefs, setCookiePrefs] = useState({
    essential: true,
    analytics: true,
    personalization: false,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolledPastHero(window.scrollY > 260);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNowClick = () => {
    const validation = validateBookingDraft(draft);
    setBookingValidation(validation);
    setBookingModalOpen(true);
  };

  const handleQuickBookHotel = (hotel: Hotel, roomRate?: number) => {
    const nextDraft: BookingDraft = {
      ...draft,
      hotelId: hotel.id,
      checkIn: draft.checkIn || '2027-06-10',
      checkOut: draft.checkOut || '2027-06-14',
    };
    setDraft(nextDraft);
    setSelectedRoomRate(roomRate);
    setSelectedHotelModal(null);
    setBookingValidation(validateBookingDraft(nextDraft));
    setBookingModalOpen(true);
  };

  const handleQuickBookRoom = (room: RoomSuite) => {
    const fallbackHotel = draft.hotelId || HOTELS[0].id;
    const nextDraft: BookingDraft = {
      ...draft,
      hotelId: fallbackHotel,
      checkIn: draft.checkIn || '2027-06-10',
      checkOut: draft.checkOut || '2027-06-14',
    };
    setDraft(nextDraft);
    setSelectedRoomRate(room.rateEur);
    setBookingValidation(validateBookingDraft(nextDraft));
    setBookingModalOpen(true);
  };

  const handleApplyOffer = (offer: Offer) => {
    const nextDraft: BookingDraft = {
      ...draft,
      hotelId: offer.hotelId,
      promoCode: offer.promoCode,
      checkIn: draft.checkIn || '2027-05-10',
      checkOut: draft.checkOut || '2027-05-14',
    };
    setDraft(nextDraft);
    setSelectedOfferDrawer(null);
    setBookingValidation(validateBookingDraft(nextDraft));
    setBookingModalOpen(true);
  };

  const handleSendConcierge = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = conciergeInput.trim();
    if (!trimmed) return;
    const lower = trimmed.toLowerCase();
    let reply =
      'Our reservations team has noted your inquiry. Enjoy direct booking perks and special offers for 2 Bedroom and 3 Bedroom suites at Kodai Mayura Inn with code STAYLONGER15.';
    if (lower.includes('lake') || lower.includes('attraction') || lower.includes('pine') || lower.includes('guna')) {
      reply =
        'Kodai Mayura Inn is minutes from Kodaikanal Lake, Pine Forest, Pillar Rocks, Coaker’s Walk, and Guna Caves. We can arrange morning guided walks or vehicle transfers.';
    } else if (lower.includes('room') || lower.includes('suite') || lower.includes('stay') || lower.includes('booking')) {
      reply =
        'Kodai Mayura Inn offers luxury 2 Bedroom with Hall and 3 Bedroom with Hall layouts. Direct bookings receive complimentary breakfast and best rate guarantee.';
    }
    setConciergeMessages((prev) => [
      ...prev,
      { sender: 'guest', text: trimmed },
      { sender: 'concierge', text: reply },
    ]);
    setConciergeInput('');
  };

  return (
    <div id="top" className="min-h-screen bg-[#F9F8F6] text-[#171614]">
      {/* Fixed Top Bar & Navigation Drawer */}
      <HeaderAndMenu
        showHeaderLogo={scrolledPastHero}
        onSelectHotel={(hotel) => setSelectedHotelModal(hotel)}
        onOpenManageBooking={() => {
          const fallbackHotel = draft.hotelId || HOTELS[0].id;
          const nextDraft = {
            ...draft,
            hotelId: fallbackHotel,
            checkIn: draft.checkIn || '2027-06-10',
            checkOut: draft.checkOut || '2027-06-14',
          };
          setDraft(nextDraft);
          setBookingValidation({ valid: true });
          setBookingModalOpen(true);
        }}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content */}
      <main className="pt-[56px]">
        {/* Hero Video with Smooth Parallax */}
        <section
          ref={heroRef}
          aria-label="Kodai Mayura Inn Hero"
          className="relative w-full h-[calc(100vh-56px)] min-h-[540px] max-h-[880px] bg-[#2D2924] overflow-hidden flex items-center justify-center"
        >
          <motion.div
            style={{ y: heroVideoY, scale: heroVideoScale }}
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <video
              src="/assets/kodai/hero.mp4"
              poster="/assets/kodai/exterior.png"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Dynamic dark gradient scrim */}
          <motion.div
            style={{ opacity: heroOverlayOpacity }}
            className="absolute inset-0 bg-black pointer-events-none"
          />

          {/* Centered Large Kodai Mayura Inn Logo with Parallax & Fade */}
          <motion.div
            style={{ y: heroLogoY, opacity: heroLogoOpacity, scale: heroLogoScale }}
            className="relative z-10 flex flex-col items-center justify-center px-6 text-center pointer-events-none will-change-transform"
          >
            <MayuraInnLogo
              className="w-[260px] sm:w-[330px] md:w-[370px] h-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
              variant="white"
            />

            {/* Subtle scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-6 flex flex-col items-center gap-2"
            >
              <span className="font-courier text-[11px] uppercase tracking-[0.25em] text-white/80">
                SCROLL TO DISCOVER
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-px h-6 bg-white/60"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Curated Rooms & Suites Section */}
        <RoomsSection
          onQuickBookRoom={handleQuickBookRoom}
        />

        {/* Guest Testimonials & Overall Resort Showcase */}
        <TestimonialsAndResortSection
          onSelectHotelModal={(hotel) => setSelectedHotelModal(hotel)}
        />

        {/* Nearby Attractions & Offers Section */}
        <DolomitesAndOffersSection
          onSelectHotelModal={(hotel) => setSelectedHotelModal(hotel)}
          onSelectOfferDrawer={(offer) => setSelectedOfferDrawer(offer)}
          onOpenInfoModal={(title, content) => setInfoModal({ title, content })}
          onOpenConcierge={() => setConciergeOpen(true)}
        />
      </main>

      {/* Footer matching Screenshot 10 */}
      <FooterSection
        onSelectHotel={(hotel) => setSelectedHotelModal(hotel)}
        onOpenManageBooking={() => {
          const nextDraft = {
            ...draft,
            hotelId: draft.hotelId || HOTELS[0].id,
            checkIn: draft.checkIn || '2027-06-10',
            checkOut: draft.checkOut || '2027-06-14',
          };
          setDraft(nextDraft);
          setBookingValidation({ valid: true });
          setBookingModalOpen(true);
        }}
        onOpenInfoModal={(title, content) => setInfoModal({ title, content })}
      />

      {/* Floating Concierge Chat Button */}
      <button
        type="button"
        onClick={() => setConciergeOpen((prev) => !prev)}
        aria-label="Open Reservations Concierge"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#4A443B] hover:bg-[#3D3830] text-white shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer font-display text-sm tracking-wider uppercase border border-white/15"
      >
        <MessageSquare className="w-4 h-4 text-[#C9C5BD]" />
        <span className="hidden sm:inline">CONCIERGE</span>
      </button>

      {/* Interactive Hotel Detail Modal */}
      <HotelDetailModal
        hotel={selectedHotelModal}
        onClose={() => setSelectedHotelModal(null)}
        onSelectForBooking={(hotel, rate) => handleQuickBookHotel(hotel, rate)}
      />

      {/* Interactive Offer Slide-Over Drawer */}
      <OfferDetailDrawer
        offer={selectedOfferDrawer}
        onClose={() => setSelectedOfferDrawer(null)}
        onApplyOfferToBooking={handleApplyOffer}
      />

      {/* Interactive Booking & Validation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        validation={bookingValidation}
        draft={draft}
        selectedRoomRate={selectedRoomRate}
        confirmedBookings={confirmedBookings}
        onClose={() => setBookingModalOpen(false)}
        onUpdateDraft={(next) => {
          setDraft(next);
          setBookingValidation(validateBookingDraft(next));
        }}
        onConfirmBooking={(res) =>
          setConfirmedBookings((prev) => [res, ...prev])
        }
      />

      {/* Info Modal for Footer / Brand Links */}
      {infoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          role="dialog"
          aria-modal="true"
          aria-label={infoModal.title}
        >
          <div className="bg-[#F9F8F6] border border-[#D3CFC7] max-w-[480px] w-full p-7 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DFD9]">
              <h3 className="font-display text-2xl uppercase tracking-wide text-[#171614]">
                {infoModal.title}
              </h3>
              <button
                type="button"
                onClick={() => setInfoModal(null)}
                aria-label="Close information modal"
                className="p-1 text-[#5C5852] hover:text-[#171614] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-4 font-courier text-sm leading-relaxed text-[#262421]">
              {infoModal.content}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setInfoModal(null)}
                className="px-5 py-2 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-base uppercase tracking-wider cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Guest Concierge Drawer (bottom-right button) */}
      {conciergeOpen && (
        <div
          role="dialog"
          aria-label="Kodai Mayura Inn Guest Concierge"
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] max-w-[360px] bg-[#F9F8F6] border border-[#D3CFC7] shadow-2xl flex flex-col"
        >
          <div className="bg-[#4A443B] text-white px-4 py-3 flex items-center justify-between">
            <div>
              <div className="font-display text-lg uppercase tracking-wide">
                KODAI MAYURA INN CONCIERGE
              </div>
              <div className="font-courier text-[11px] text-white/75">
                Direct Reservations & Destination Advice
              </div>
            </div>
            <button
              type="button"
              onClick={() => setConciergeOpen(false)}
              aria-label="Close concierge chat"
              className="p-1 text-white/80 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 max-h-[260px] overflow-y-auto space-y-3 font-courier text-xs">
            {conciergeMessages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 ${
                  msg.sender === 'concierge'
                    ? 'bg-[#EFECE6] text-[#171614]'
                    : 'bg-[#828578] text-white ml-6'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSendConcierge}
            className="p-3 border-t border-[#E2DFD9] flex items-center gap-2"
          >
            <input
              type="text"
              value={conciergeInput}
              onChange={(e) => setConciergeInput(e.target.value)}
              placeholder="Ask about hotels or offers..."
              aria-label="Concierge message"
              className="flex-1 bg-white border border-[#C9C5BD] px-3 py-2 font-courier text-xs focus:outline-none focus:border-[#4A443B]"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="px-3 py-2 bg-[#828578] hover:bg-[#6E7165] text-white cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Cookie Preferences Modal (bottom-left button) */}
      {cookieDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          role="dialog"
          aria-modal="true"
          aria-label="Privacy Preference Center"
        >
          <div className="bg-[#F9F8F6] border border-[#D3CFC7] max-w-[460px] w-full p-7 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DFD9]">
              <h3 className="font-display text-2xl uppercase tracking-wide text-[#171614]">
                PRIVACY PREFERENCES
              </h3>
              <button
                type="button"
                onClick={() => setCookieDialogOpen(false)}
                aria-label="Close privacy preferences"
                className="p-1 text-[#5C5852] hover:text-[#171614] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 space-y-3 font-courier text-xs">
              <label className="flex items-center justify-between py-1">
                <span>Strictly Necessary Booking Cookies</span>
                <input type="checkbox" checked disabled />
              </label>
              <label className="flex items-center justify-between py-1 cursor-pointer">
                <span>Anonymous Performance Analytics</span>
                <input
                  type="checkbox"
                  checked={cookiePrefs.analytics}
                  onChange={(e) =>
                    setCookiePrefs({
                      ...cookiePrefs,
                      analytics: e.target.checked,
                    })
                  }
                />
              </label>
              <label className="flex items-center justify-between py-1 cursor-pointer">
                <span>Personalized Resort Offers</span>
                <input
                  type="checkbox"
                  checked={cookiePrefs.personalization}
                  onChange={(e) =>
                    setCookiePrefs({
                      ...cookiePrefs,
                      personalization: e.target.checked,
                    })
                  }
                />
              </label>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setCookieDialogOpen(false)}
                className="px-5 py-2 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-base uppercase tracking-wider cursor-pointer"
              >
                SAVE PREFERENCES
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
