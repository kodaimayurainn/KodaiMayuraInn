import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hotel, TESTIMONIALS } from '../data/mayurainnData';
import {
  HandDrawnArrowLeft,
  HandDrawnArrowRight,
  PinIcon,
} from './MayuraInnIcons';
import { Compass, Sparkles, Trees, Eye } from 'lucide-react';

interface TestimonialsAndResortSectionProps {
  onSelectHotelModal?: (hotel: Hotel) => void;
  onExploreResort?: () => void;
}

export const TestimonialsAndResortSection: React.FC<
  TestimonialsAndResortSectionProps
> = ({ onSelectHotelModal, onExploreResort }) => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const currentReview = TESTIMONIALS[activeReviewIndex];

  const prevReview = () => {
    setActiveReviewIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const nextReview = () => {
    setActiveReviewIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  // Strip leading/trailing quotes and display in uppercase
  const cleanQuote = currentReview.quote.replace(/^["“”]|["“”]$/g, '').trim().toUpperCase();

  return (
    <>
      {/* Full-Bleed Earthy Reviews Carousel Section matching Screenshot */}
      <section
        id="testimonials-section"
        className="bg-[#4A443B] text-[#F9F8F6] py-24 md:py-36 px-6 relative overflow-hidden"
      >
        <div className="max-w-[960px] mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReviewIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-display text-[26px] sm:text-[32px] md:text-[38px] leading-[1.3] uppercase tracking-[0.03em] text-[#F9F8F6] text-balance">
                “{cleanQuote}”
              </blockquote>

              <div className="mt-8 font-courier text-[13px] sm:text-[14px] md:text-[15px] font-bold tracking-wide text-[#F9F8F6]/90">
                Kodai Mayura Inn – {currentReview.guestName}, {currentReview.location}
              </div>

              <div className="mt-5">
                <a
                  href="https://www.tripadvisor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-courier text-[13.5px] font-bold text-[#F9F8F6] underline underline-offset-4 hover:text-white/80 transition-colors"
                >
                  Tripadvisor
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls: Left Counter, Centered Arrows */}
          <div className="mt-14 sm:mt-16 relative flex items-center justify-between text-white/75 font-courier text-xs">
            {/* Slide Index on the left */}
            <div className="tabular-nums text-white/80 text-[13px]">
              {activeReviewIndex + 1} / {TESTIMONIALS.length}
            </div>

            {/* Arrows centered */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
              <button
                type="button"
                onClick={prevReview}
                aria-label="Previous guest review"
                className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <HandDrawnArrowLeft className="w-5 h-4" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                aria-label="Next guest review"
                className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <HandDrawnArrowRight className="w-5 h-4" />
              </button>
            </div>

            {/* Empty right placeholder for balance */}
            <div className="w-10" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* OVERALL RESORT SHOWCASE */}
      <section
        id="resort-overview-section"
        className="bg-[#F9F8F6] py-14 md:py-20 px-4 sm:px-8 md:px-14"
      >
        <div className="max-w-[1320px] mx-auto bg-[#828578] text-[#F9F8F6] px-6 sm:px-10 md:px-14 py-14 md:py-20 shadow-lg">
          {/* Header Block with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 md:mb-14"
          >
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2.5 font-courier text-[13px] uppercase tracking-[0.16em] text-[#F9F8F6]/90 mb-3">
                <Compass className="w-4 h-4" />
                <span>RESORT ARCHITECTURE & GROUNDS</span>
              </div>
              <h2 className="font-display text-[38px] sm:text-[48px] md:text-[54px] leading-[1.03] uppercase tracking-[0.02em] text-white">
                THE RESORT
                <br />
                OVERALL
              </h2>
            </div>

            <div className="lg:col-span-6 lg:pl-4">
              <p className="font-courier text-[14.5px] md:text-[15.5px] leading-[1.7] text-white/95">
                Set against breathtaking mountain ridges and lush highland greenery, the resort
                embodies grounded luxury. Organic stone foundations, warm timber detailing, and
                open terraces blend effortlessly into the rolling hillside, inviting you into an
                unhurried rhythm of stillness, fresh alpine air, and natural serenity.
              </p>
            </div>
          </motion.div>

          {/* Majestic Hero Image of Resort Overall Exterior with Scroll Zoom & Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[16/9] w-full overflow-hidden bg-[#2D2924] shadow-2xl group border border-white/10"
          >
            <img
              src="/assets/kodai/exterior.png"
              alt="Kodai Mayura Inn Resort Overall Exterior Architecture"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Overlay Badges */}
            <div className="absolute top-5 left-5 bg-[#4A443B]/90 backdrop-blur-sm text-white font-courier text-xs tracking-widest px-3.5 py-1.5 uppercase flex items-center gap-2">
              <Trees className="w-3.5 h-3.5 text-[#B2ABA0]" />
              <span>HILLSIDE ESTATE · ELEVATED PANORAMA</span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4 text-white">
              <div>
                <div className="font-display text-2xl sm:text-3xl uppercase tracking-wide">
                  SERENE NATURE RETREAT
                </div>
                <div className="font-courier text-xs text-white/80 mt-1 flex items-center gap-2">
                  <PinIcon className="w-3.5 h-3.5" />
                  <span>Highland Sanctuary · Panoramic Mountain Terraces · Family-Friendly</span>
                </div>
              </div>

              <div className="font-courier text-xs bg-white/20 backdrop-blur-md px-3 py-1.5 uppercase tracking-wider text-white">
                Full Property Exterior View
              </div>
            </div>
          </motion.div>

          {/* Property Pillars Grid with Staggered Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 pt-10 border-t border-white/20"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2 font-display text-lg tracking-wider uppercase text-white mb-2">
                <span className="font-courier text-xs text-[#E5E2DC]">01</span>
                <span>HARMONIOUS ARCHITECTURE</span>
              </div>
              <p className="font-courier text-xs md:text-sm text-white/85 leading-relaxed">
                Seamless indoor-outdoor living crafted with local stonework, warm timber, and neutral earth pigments that echo the mountain terrain.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 font-display text-lg tracking-wider uppercase text-white mb-2">
                <span className="font-courier text-xs text-[#E5E2DC]">02</span>
                <span>EXPANSIVE LIVING SPACES</span>
              </div>
              <p className="font-courier text-xs md:text-sm text-white/85 leading-relaxed">
                Spacious multi-bedroom suites and private living halls designed to foster quiet reconnection and intimate gatherings.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 font-display text-lg tracking-wider uppercase text-white mb-2">
                <span className="font-courier text-xs text-[#E5E2DC]">03</span>
                <span>UNHURRIED SANCTUARY</span>
              </div>
              <p className="font-courier text-xs md:text-sm text-white/85 leading-relaxed">
                Lush gardens, open-air fire pits, and shaded viewing decks creating a tranquil escape far above the noise of daily life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
