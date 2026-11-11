import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Maximize2, Check, Sparkles } from 'lucide-react';
import { PinIcon } from './MayuraInnIcons';

export interface RoomSuite {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  badge: string;
  sizeSqm: number;
  maxGuests: number;
  rateEur: number;
  description: string;
  amenities: string[];
}

export const FEATURED_ROOMS: RoomSuite[] = [
  {
    id: '2-bedroom-with-hall',
    name: '2 Bedroom with Hall',
    subtitle: 'Luxury Sanctuary · Central Hall & Mountain Veranda',
    image: '/assets/kodai/2 Bedroom with Hall.png',
    badge: 'POPULAR SUITE',
    sizeSqm: 95,
    maxGuests: 4,
    rateEur: 320,
    description:
      'Thoughtfully curated for quiet luxury and relaxation. Features two spacious master bedrooms with king beds, an expansive central living hall for unwinding, private scenic balconies, hand-troweled warm plaster accents, and twin en-suite bathrooms.',
    amenities: [
      '2 Private King Bedrooms',
      'Central Living & Lounge Hall',
      'Private Scenic View Balcony',
      '2 Luxury En-Suite Bathrooms',
      'Artisanal Oak & Linen Furnishings',
      'Complimentary Artisan Breakfast',
    ],
  },
  {
    id: '3-bedroom-with-hall',
    name: '3 Bedroom with Hall',
    subtitle: 'Grand Residence · Expansive Hall & Panoramic Views',
    image: '/assets/kodai/3 Bedroom with hall.png',
    badge: 'SIGNATURE RESIDENCE',
    sizeSqm: 145,
    maxGuests: 6,
    rateEur: 480,
    description:
      'Our signature multi-bedroom haven offering unparalleled privacy and space. Three generous bedrooms accompany a magnificent open-concept living and dining hall, wrap-around panoramic terrace, bespoke stone and timber craftsmanship, and dedicated guest concierge service.',
    amenities: [
      '3 Independent En-Suite Bedrooms',
      'Expansive Open Living & Dining Hall',
      'Wrap-Around Panoramic Veranda',
      'Dedicated Relaxation Lounge',
      'Private In-Room Bar & Espresso Bar',
      'VIP Concierge & Arrival Service',
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
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number | null>(null);

  return (
    <section id="rooms-section" className="bg-[#F9F8F6] pt-16 md:pt-24 pb-20">
      {/* Intro Statement matching Mayura Inn Editorial Style */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[820px] mx-auto md:ml-[12%]"
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
              2 Signature Multi-Bedroom Layouts Available
            </p>
          </div>
          <div className="font-courier text-xs text-[#5C5852]">
            Adults-Only Sanctuary · High-Speed Wi-Fi · In-Suite Dining
          </div>
        </motion.div>
      </div>

      {/* Rooms Showcase: 2 Featured Rooms with Staggered Scroll Reveal */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {FEATURED_ROOMS.map((room, idx) => {
            const isDetailsOpen = selectedRoomIndex === idx;
            return (
              <motion.article
                key={room.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.85, delay: idx * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-[#DCD9D0] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Room Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#2D2924] group">
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#4A443B] text-white font-courier text-[11px] font-bold tracking-widest px-3 py-1 uppercase">
                    {room.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white font-display text-sm px-3 py-1 tracking-wider uppercase">
                    €{room.rateEur} / NIGHT
                  </div>
                </div>

                {/* Room Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Key Specs Pills */}
                    <div className="flex flex-wrap items-center gap-3 font-courier text-xs text-[#5C5852] mb-3">
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-[#828578]" />
                        {room.sizeSqm} m² / {Math.round(room.sizeSqm * 10.764)} sq ft
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#828578]" />
                        Up to {room.maxGuests} Guests
                      </span>
                    </div>

                    {/* Room Title */}
                    <h3 className="font-display text-[28px] sm:text-[34px] leading-tight uppercase tracking-[0.02em] text-[#171614] mb-2">
                      {room.name}
                    </h3>

                    <div className="font-courier text-xs text-[#828578] mb-4 uppercase tracking-wider">
                      {room.subtitle}
                    </div>

                    <p className="font-courier text-[13.5px] leading-[1.65] text-[#262421] mb-6">
                      {room.description}
                    </p>

                    {/* Amenities List */}
                    <div className="mb-6 pt-4 border-t border-[#EFECE6]">
                      <div className="font-courier text-xs font-bold uppercase tracking-wider text-[#171614] mb-3">
                        SUITE HIGHLIGHTS
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-courier text-xs text-[#4A443B]">
                        {room.amenities.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#828578] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking CTA Bar */}
                  <div className="pt-5 border-t border-[#DCD9D0] flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="font-courier text-[11px] text-[#5C5852] uppercase">
                        Starting from
                      </div>
                      <div className="font-display text-2xl text-[#171614]">
                        €{room.rateEur}{' '}
                        <span className="font-courier text-xs text-[#5C5852] font-normal">
                          / night
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          if (onSelectRoomDetails) {
                            onSelectRoomDetails(room);
                          } else {
                            setSelectedRoomIndex(isDetailsOpen ? null : idx);
                          }
                        }}
                        className="px-4 py-2.5 border border-[#4A443B] text-[#4A443B] font-display text-sm uppercase tracking-wider hover:bg-[#4A443B] hover:text-white transition-colors cursor-pointer"
                      >
                        SPECIFICATIONS
                      </button>
                      <button
                        type="button"
                        onClick={() => onQuickBookRoom(room)}
                        className="px-5 py-2.5 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-sm uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        BOOK THIS ROOM
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

