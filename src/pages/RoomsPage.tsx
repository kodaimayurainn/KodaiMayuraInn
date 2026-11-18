import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Sparkles, Check, X, Phone, Compass } from 'lucide-react';
import { FEATURED_ROOMS, RoomSuite } from '../components/RoomsSection';
import { RESORT_CONTACT } from '../data/mayurainnData';
import { Link } from '../router/Router';

export const RoomsPage: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomSuite | null>(null);

  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-12 pb-24">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Header Breadcrumb & Heading */}
        <div className="max-w-[840px] mb-14">
          <div className="flex items-center gap-2 font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-3">
            <Link href="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>SUITES & RESIDENCES</span>
          </div>

          <h1 className="font-display text-[42px] sm:text-[54px] md:text-[62px] leading-[1.05] uppercase tracking-[0.02em] text-[#171614] mb-6">
            SUITES & RESIDENCES AT KODAI MAYURA INN
          </h1>

          <p className="font-courier text-[15px] sm:text-[16px] leading-[1.7] text-[#5C5852]">
            Perched amidst the tranquil mountain heights of Kodaikanal, our hillside accommodations
            are designed for quiet luxury, slow living, and spacious family comfort. Every suite
            features natural stone and timber craftsmanship, private panoramic verandas, and sunlit living spaces.
          </p>
        </div>

        {/* Pricing notice */}
        <div className="mb-10 p-4 bg-[#EFECE6] border-l-2 border-[#4A443B] font-courier text-xs sm:text-sm text-[#5C5852]">
          Note: All listed rates are base starting prices. Prices may vary based on seasonal demand, weekends, and holiday dates.
        </div>

        {/* Suites Detailed Grid */}
        <div className="space-y-16 md:space-y-24">
          {FEATURED_ROOMS.map((room, idx) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center bg-[#F2EFE9] border border-[#E0DCD4] p-6 sm:p-8 md:p-10 rounded-sm shadow-sm ${
                idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image Section */}
              <div className={`lg:col-span-7 relative overflow-hidden rounded-xs ${idx % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                <div className="aspect-[16/10] overflow-hidden bg-[#2D2924]">
                  <img
                    src={room.image}
                    alt={`${room.name} at Kodai Mayura Inn`}
                    width="1200"
                    height="750"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#4A443B] text-white font-courier text-xs font-bold tracking-widest px-3.5 py-1.5 uppercase">
                  {room.badge}
                </div>
              </div>

              {/* Content Section */}
              <div className={`lg:col-span-5 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <div className="flex items-center gap-2 font-courier text-xs text-[#5C5852] mb-2">
                    <Users className="w-4 h-4 text-[#828578]" />
                    <span>Accommodates up to {room.maxGuests} Guests</span>
                    <span>·</span>
                    <span className="text-[#828578]">Family Friendly</span>
                  </div>

                  <h2 className="font-display text-[32px] sm:text-[38px] leading-tight uppercase tracking-[0.02em] text-[#171614] mb-2">
                    {room.name}
                  </h2>

                  <div className="font-courier text-xs text-[#828578] uppercase tracking-wider mb-5">
                    {room.subtitle}
                  </div>

                  <p className="font-courier text-sm leading-[1.7] text-[#4A443B] mb-6">
                    {room.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="mb-8">
                    <div className="font-courier text-xs uppercase tracking-wider text-[#828578] mb-3">
                      SUITE HIGHLIGHTS & AMENITIES
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-courier text-[#171614]">
                      {room.amenities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#828578] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price & Call to Action */}
                <div className="pt-6 border-t border-[#DCD9D0] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="block font-courier text-[11px] text-[#5C5852] uppercase">Starting From</span>
                    <span className="font-display text-3xl text-[#171614]">
                      ₹{room.rateEur.toLocaleString('en-IN')}{' '}
                      <span className="font-courier text-xs text-[#5C5852] font-normal">/ night</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedRoom(room)}
                      className="px-4 py-2.5 border border-[#4A443B] text-[#4A443B] font-display text-xs uppercase tracking-wider hover:bg-[#4A443B] hover:text-white transition-colors cursor-pointer"
                    >
                      SPECIFICATIONS
                    </button>
                    <a
                      href={room.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#FF5A5F] text-white font-display text-xs uppercase tracking-wider hover:bg-[#E04E53] transition-colors cursor-pointer"
                    >
                      BOOK ON AIRBNB
                    </a>
                    <a
                      href={`tel:${RESORT_CONTACT.phoneTel}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#4A443B] text-white font-display text-xs uppercase tracking-wider hover:bg-[#38332C] transition-colors cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>DIRECT ENQUIRY</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#F9F8F6] text-[#171614] max-w-[620px] w-full p-7 md:p-9 shadow-2xl relative border border-[#DCD9D0] max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedRoom(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 text-[#5C5852] hover:text-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-2">
                SUITE SPECIFICATIONS
              </div>

              <h3 className="font-display text-3xl uppercase tracking-wide text-[#171614] mb-1">
                {selectedRoom.name}
              </h3>
              <p className="font-courier text-xs text-[#828578] mb-6">{selectedRoom.subtitle}</p>

              <div className="mb-6 aspect-[16/9] overflow-hidden rounded-xs">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-courier text-sm leading-[1.7] text-[#2D2924] mb-6">
                {selectedRoom.description}
              </p>

              <div className="border-t border-[#DCD9D0] pt-5 mb-6">
                <div className="font-courier text-xs font-bold uppercase tracking-wider text-[#171614] mb-3">
                  Included Amenities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-courier text-[#4A443B]">
                  {selectedRoom.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#828578]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#DCD9D0] pt-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="font-courier text-xs text-[#828578]">Starting rate</div>
                  <div className="font-display text-2xl text-[#171614]">
                    ₹{selectedRoom.rateEur.toLocaleString('en-IN')}{' '}
                    <span className="font-courier text-xs font-normal text-[#5C5852]">/ night</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedRoom.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#FF5A5F] text-white font-display text-xs uppercase tracking-wider hover:bg-[#E04E53] transition-colors"
                  >
                    BOOK ON AIRBNB
                  </a>
                  <a
                    href={`tel:${RESORT_CONTACT.phoneTel}`}
                    className="px-6 py-2.5 bg-[#4A443B] text-white font-display text-xs uppercase tracking-wider hover:bg-[#38332C] transition-colors"
                  >
                    CALL TO RESERVE
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
