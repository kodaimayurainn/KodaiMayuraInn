import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MayuraInnLogo } from '../components/MayuraInnIcons';
import { RoomsSection } from '../components/RoomsSection';
import { TestimonialsAndResortSection } from '../components/TestimonialsAndResortSection';
import { DolomitesAndOffersSection } from '../components/DolomitesAndOffersSection';
import { MapSection } from '../components/MapSection';

interface HomePageProps {
  onOpenInfoModal: (title: string, content: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInfoModal }) => {
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

  return (
    <>
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
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dynamic dark gradient scrim */}
        <motion.div
          style={{ opacity: heroOverlayOpacity }}
          className="absolute inset-0 bg-black pointer-events-none"
        />

        {/* Centered Large Kodai Mayura Inn Logo & Semantic H1 */}
        <motion.div
          style={{ y: heroLogoY, opacity: heroLogoOpacity, scale: heroLogoScale }}
          className="relative z-10 flex flex-col items-center justify-center px-6 text-center pointer-events-none will-change-transform"
        >
          <MayuraInnLogo
            className="w-[260px] sm:w-[330px] md:w-[370px] h-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            variant="white"
          />
          {/* SEO Primary Heading */}
          <h1 className="mt-4 font-courier text-xs sm:text-sm tracking-[0.25em] uppercase text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Boutique Hillside Stay in Kodaikanal
          </h1>
        </motion.div>
      </section>

      {/* Curated Rooms & Suites Section */}
      <RoomsSection />

      {/* Guest Testimonials & Overall Resort Showcase */}
      <TestimonialsAndResortSection />

      {/* Dolomites / Nearby Attractions Section */}
      <DolomitesAndOffersSection onOpenInfoModal={onOpenInfoModal} />

      {/* Map & Location Section */}
      <MapSection />
    </>
  );
};
