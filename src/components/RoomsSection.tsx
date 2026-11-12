import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Check, Sparkles, X, ChevronRight } from 'lucide-react';

export interface RoomSuite {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  badge: string;
  maxGuests: number;
  rateEur: number;
  description: string;
  amenities: string[];
}

export const FEATURED_ROOMS: RoomSuite[] = [
  {
    id: 'single-bedroom',
    name: 'Single Bedroom',
    subtitle: 'Cozy Hillside Haven · Mountain View Veranda',
    image: '/assets/kodai/single bedroom.jpeg',
    badge: 'COZY RETREAT',
    maxGuests: 2,
    rateEur: 3000,
    description:
      'Thoughtfully designed private sanctuary featuring a comfortable king-size bed, private scenic balcony overlooking misty valleys, bespoke timber furnishings, and a luxury en-suite bathroom.',
    amenities: [
      '1 Private King Bedroom',
      'Private Scenic View Balcony',
      'Luxury En-Suite Bathroom',
      'Hand-Troweled Warm Plaster Accents',
      'Artisanal Oak & Linen Furnishings',
      'High-Speed Wi-Fi',
    ],
  },
  {
    id: '2-bedroom-with-hall',
    name: '2 Bedroom with Hall',
    subtitle: 'Family Sanctuary · Central Hall & Mountain Veranda',
    image: '/assets/kodai/2 Bedroom with Hall.png',
    badge: 'POPULAR SUITE',
    maxGuests: 4,
    rateEur: 6000,
    description:
      'Thoughtfully curated for quiet luxury and family relaxation. Features two spacious master bedrooms with king beds, an expansive central living hall for unwinding, private scenic balconies, hand-troweled warm plaster accents, and twin en-suite bathrooms.',
    amenities: [
      '2 Private King Bedrooms',
      'Central Living Hall',
      'Private Scenic View Balcony',
      '2 Luxury En-Suite Bathrooms',
      'Artisanal Oak & Linen Furnishings',
      'High-Speed Wi-Fi',
    ],
  },
  {
    id: '3-bedroom-with-hall',
    name: '3 Bedroom with Hall',
    subtitle: 'Grand Family Residence · Expansive Hall & Panoramic Views',
    image: '/assets/kodai/3 Bedroom with hall.png',
    badge: 'SIGNATURE RESIDENCE',
    maxGuests: 6,
    rateEur: 9000,
    description:
      'Our signature multi-bedroom haven offering generous space for families and groups. Three independent en-suite bedrooms accompany an expansive living hall, wrap-around panoramic terrace, and bespoke stone and timber craftsmanship.',
    amenities: [
      '3 Independent En-Suite Bedrooms',
      'Expansive Open Living Hall',
      'Wrap-Around Panoramic Veranda',
      'Bespoke Stone & Timber Accents',
      'Private Scenic Balconies',
      'High-Speed Wi-Fi',
    ],
  },
];

interface RoomsSectionProps {
  onQuickBookRoom: (room: RoomSuite) => void;
  onSelectRoomDetails?: (room: RoomSuite) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onQuickBookRoom,
  onSelectRoomDetails,
}) => {
  const [modalRoom, setModalRoom] = useState<RoomSuite | null>(null);

  const handleOpenDetails = (room: RoomSuite) => {
    if (onSelectRoomDetails) {
      onSelectRoomDetails(room);
    } else {
      setModalRoom(room);
    }
  };

  return (
    <section id="rooms-section" className="bg-[#F9F8F6] pt-16 md:pt-24 pb-20">
      {/* Intro Statement matching Kodai Mayura Inn Editorial Style */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[820px] mx-auto md:ml-[8%]"
        >
          <div className="flex items-center gap-2 font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURATED SUITES & RESIDENCES</span>
          </div>
          <h1 className="font-display text-[32px] md:text-[42px] leading-[1.1] uppercase tracking-[0.03em] text-[#171614] mb-6">
            ELEVATED LIVING, DESIGNED FOR QUIET LUXURY
          </h1>
          <p className="font-courier text-[14px] md:text-[15px] leading-[1.7] text-[#262421]">
            Our accommodations merge raw stone, warm timber, and soft natural linens to create
            an atmosphere of grounded tranquility. Each suite offers expansive private living
            spaces, inviting living halls, and unhurried comfort framed by nature.
          </p>
        </motion.div>
      </div>

      {/* Section Header */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#DCD9D0]"
        >
          <div>
            <h2 className="font-display text-[40px] md:text-[52px] leading-none uppercase tracking-[0.02em] text-[#171614]">
              OUR ROOMS
            </h2>
            <p className="font-courier text-xs text-[#5C5852] mt-1.5 uppercase tracking-wider">
              3 Signature Room & Suite Layouts Available
            </p>
          </div>
          <div className="font-courier text-xs text-[#5C5852]">
            Family-Friendly Hillside Sanctuary · High-Speed Wi-Fi · Panoramic Views
          </div>
        </motion.div>
      </div>

      {/* Rooms Showcase: Clean Cards with Details on Pop-Up */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_ROOMS.map((room, idx) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, delay: idx * 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-[#DCD9D0] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Room Image Container with Click to Open Pop-Up */}
              <div
                onClick={() => handleOpenDetails(room)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#2D2924] cursor-pointer"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#4A443B] text-white font-courier text-[11px] font-bold tracking-widest px-3 py-1 uppercase">
                  {room.badge}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/65 backdrop-blur-sm text-white font-display text-sm px-3 py-1 tracking-wider uppercase">
                  ₹{room.rateEur.toLocaleString('en-IN')} / NIGHT
                </div>
              </div>

              {/* Simplified Room Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Capacity Tag - NO AREA MENTIONED */}
                  <div className="flex items-center gap-2 font-courier text-xs text-[#5C5852] mb-2.5">
                    <Users className="w-3.5 h-3.5 text-[#828578]" />
                    <span>Up to {room.maxGuests} Guests</span>
                    <span>·</span>
                    <span className="text-[#828578]">Family Friendly</span>
                  </div>

                  {/* Room Title */}
                  <h3
                    onClick={() => handleOpenDetails(room)}
                    className="font-display text-[26px] sm:text-[28px] leading-tight uppercase tracking-[0.02em] text-[#171614] mb-2 cursor-pointer hover:text-[#828578] transition-colors"
                  >
                    {room.name}
                  </h3>

                  <div className="font-courier text-xs text-[#828578] uppercase tracking-wider mb-4">
                    {room.subtitle}
                  </div>
                </div>

                {/* Booking CTA Bar */}
                <div className="pt-5 border-t border-[#DCD9D0] flex flex-wrap items-center justify-between gap-3 mt-4">
                  <div>
                    <div className="font-courier text-[11px] text-[#5C5852] uppercase">
                      Starting from
                    </div>
                    <div className="font-display text-2xl text-[#171614]">
                      ₹{room.rateEur.toLocaleString('en-IN')}{' '}
                      <span className="font-courier text-xs text-[#5C5852] font-normal">
                        / night
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenDetails(room)}
                      className="px-3.5 py-2.5 border border-[#4A443B] text-[#4A443B] font-display text-xs uppercase tracking-wider hover:bg-[#4A443B] hover:text-white transition-colors cursor-pointer"
                    >
                      SPECIFICATIONS
                    </button>
                    <button
                      type="button"
                      onClick={() => onQuickBookRoom(room)}
                      className="px-4 py-2.5 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      BOOK THIS ROOM
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Specifications & Room Details Pop-up Modal */}
      <AnimatePresence>
        {modalRoom && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${modalRoom.name} Specifications`}
            onClick={() => setModalRoom(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F9F8F6] border border-[#D3CFC7] max-w-[620px] w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
            >
              {/* Modal Image Header */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#2D2924] shrink-0">
                <img
                  src={modalRoom.image}
                  alt={modalRoom.name}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setModalRoom(null)}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-4 bg-[#4A443B] text-white font-courier text-[11px] font-bold tracking-widest px-3 py-1 uppercase">
                  {modalRoom.badge}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 font-courier text-xs text-[#5C5852] mb-1.5">
                    <Users className="w-3.5 h-3.5 text-[#828578]" />
                    <span>Up to {modalRoom.maxGuests} Guests</span>
                    <span>·</span>
                    <span className="text-[#828578]">Family Friendly</span>
                  </div>
                  <h3 className="font-display text-[30px] sm:text-[34px] uppercase tracking-wide text-[#171614] leading-tight">
                    {modalRoom.name}
                  </h3>
                  <div className="font-courier text-xs text-[#828578] uppercase tracking-wider mt-1">
                    {modalRoom.subtitle}
                  </div>
                </div>

                <p className="font-courier text-[14px] leading-relaxed text-[#262421]">
                  {modalRoom.description}
                </p>

                {/* Highlights */}
                <div className="pt-4 border-t border-[#E5E2DC]">
                  <div className="font-courier text-xs font-bold uppercase tracking-wider text-[#171614] mb-3">
                    SUITE HIGHLIGHTS
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-courier text-xs text-[#4A443B]">
                    {modalRoom.amenities.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#828578] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-5 border-t border-[#E5E2DC] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="font-courier text-[11px] text-[#5C5852] uppercase">
                      Starting from
                    </div>
                    <div className="font-display text-3xl text-[#171614]">
                      ₹{modalRoom.rateEur.toLocaleString('en-IN')}{' '}
                      <span className="font-courier text-xs text-[#5C5852] font-normal">
                        / night
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setModalRoom(null)}
                      className="px-5 py-2.5 border border-[#4A443B] text-[#4A443B] font-display text-sm uppercase tracking-wider hover:bg-[#4A443B] hover:text-white transition-colors cursor-pointer"
                    >
                      CLOSE
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const target = modalRoom;
                        setModalRoom(null);
                        onQuickBookRoom(target);
                      }}
                      className="px-6 py-2.5 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-sm uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>BOOK THIS ROOM</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
