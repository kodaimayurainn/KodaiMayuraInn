import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Attraction,
  NEARBY_ATTRACTIONS,
  Hotel,
} from '../data/mayurainnData';
import {
  HandDrawnArrowLeft,
  HandDrawnArrowRight,
  PinIcon,
} from './MayuraInnIcons';
import { Compass } from 'lucide-react';

interface DolomitesAndOffersSectionProps {
  onSelectHotelModal?: (hotel: Hotel) => void;
  onOpenInfoModal?: (title: string, content: string) => void;
}

export const DolomitesAndOffersSection: React.FC<
  DolomitesAndOffersSectionProps
> = ({ onOpenInfoModal }) => {
  const [slideIdx, setSlideIdx] = useState(0);
  const currentAttraction: Attraction = NEARBY_ATTRACTIONS[slideIdx];

  const handlePrev = () => {
    setSlideIdx((prev) =>
      prev === 0 ? NEARBY_ATTRACTIONS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSlideIdx((prev) =>
      prev === NEARBY_ATTRACTIONS.length - 1 ? 0 : prev + 1
    );
  };

  const handleDiscover = (attraction: Attraction) => {
    if (onOpenInfoModal) {
      onOpenInfoModal(
        attraction.name.toUpperCase(),
        `${attraction.tagline}. Located ${attraction.distance}. ${attraction.description} Highlights include: ${attraction.highlights.join(
          ', '
        )}.`
      );
    }
  };

  return (
    <>
      {/* NEARBY ATTRACTIONS Full-Bleed Feature matching Kodai Mayura Inn Layout */}
      <section
        id="attractions-section"
        className="relative w-full min-h-[640px] md:min-h-[740px] bg-[#231F1B] text-white flex items-center overflow-hidden my-6"
      >
        <span id="dolomites-section" className="sr-only" aria-hidden="true" />

        {/* Background Image with subtle contrast scrim */}
        <img
          key={currentAttraction.id}
          src={currentAttraction.image}
          alt={currentAttraction.name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/40 to-black/75" />

        {/* Right-Aligned Content Block with Scroll Reveal */}
        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-6 md:px-12 py-20 flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[460px] md:mr-8 bg-black/20 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none p-6 md:p-0 rounded-sm"
          >
            <div className="flex items-center gap-2 font-courier text-xs uppercase tracking-[0.2em] text-[#D8D3C8] mb-3">
              <Compass className="w-3.5 h-3.5 text-[#B2ABA0]" />
              <span>DESTINATION DISCOVERY</span>
            </div>

            <h2 className="font-display text-[46px] md:text-[56px] leading-[1.02] uppercase tracking-[0.03em] text-white">
              NEARBY
              <br />
              ATTRACTIONS
            </h2>

            {/* Current Attraction Title & Distance Pill */}
            <div className="mt-4 flex items-center gap-2 font-courier text-xs uppercase tracking-[0.16em] text-[#D8D3C8]">
              <PinIcon className="w-3.5 h-3.5 text-[#B2ABA0] shrink-0" />
              <span>
                {currentAttraction.name} · {currentAttraction.distance}
              </span>
            </div>

            {/* Brief Description */}
            <p className="mt-5 font-courier text-[14px] md:text-[14.5px] leading-[1.62] text-white/95">
              {currentAttraction.description}
            </p>

            {/* Action Button */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleDiscover(currentAttraction)}
                className="px-6 py-4 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-[17px] uppercase tracking-[0.05em] rounded-[3px] transition-colors cursor-pointer"
              >
                DISCOVER {currentAttraction.name.toUpperCase()}
              </button>
            </div>

            {/* Slide Switcher Controls */}
            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous attraction"
                className="p-2 text-white/80 hover:text-white cursor-pointer"
              >
                <HandDrawnArrowLeft className="w-5 h-4" />
              </button>
              <span className="font-courier text-xs text-white/80 tabular-nums">
                {slideIdx + 1} / {NEARBY_ATTRACTIONS.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next attraction"
                className="p-2 text-white/80 hover:text-white cursor-pointer"
              >
                <HandDrawnArrowRight className="w-5 h-4" />
              </button>
            </div>

            {/* Direct Attraction Selector Pills */}
            <div className="mt-6 pt-5 border-t border-white/20 flex flex-wrap gap-2">
              {NEARBY_ATTRACTIONS.map((attraction, idx) => (
                <button
                  key={attraction.id}
                  type="button"
                  onClick={() => setSlideIdx(idx)}
                  className={`font-courier text-[11px] px-2.5 py-1 border transition-colors cursor-pointer ${
                    slideIdx === idx
                      ? 'border-white bg-white text-[#171614] font-bold'
                      : 'border-white/30 text-white/75 hover:text-white hover:border-white/60'
                  }`}
                >
                  {attraction.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
