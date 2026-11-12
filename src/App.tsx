import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { X } from 'lucide-react';
import { MayuraInnLogo } from './components/MayuraInnIcons';
import { HeaderAndMenu } from './components/HeaderAndMenu';
import { RoomsSection } from './components/RoomsSection';
import { TestimonialsAndResortSection } from './components/TestimonialsAndResortSection';
import { DolomitesAndOffersSection } from './components/DolomitesAndOffersSection';
import { FooterSection } from './components/FooterAndModals';
import { AnimationLoader } from './components/AnimationLoader';

export default function App() {
  const [loading, setLoading] = useState(true);
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

  const [infoModal, setInfoModal] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const [cookieDialogOpen, setCookieDialogOpen] = useState(false);
  const [cookiePrefs, setCookiePrefs] = useState({
    essential: true,
    analytics: true,
    personalization: false,
  });

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

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

  return (
    <div id="top" className="min-h-screen bg-[#F9F8F6] text-[#171614]">
      {/* Full-Screen Editorial Animation Loader matching Framer specification */}
      <AnimationLoader
        brandName="KODAI MAYURA INN"
        duration={2.2}
        background="#F9F8F6"
        textColor="#171614"
        onComplete={() => setLoading(false)}
      />

      {/* Fixed Top Bar & Navigation Drawer */}
      <HeaderAndMenu
        showHeaderLogo={scrolledPastHero}
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
          </motion.div>
        </section>

        {/* Curated Rooms & Suites Section */}
        <RoomsSection />

        {/* Guest Testimonials & Overall Resort Showcase */}
        <TestimonialsAndResortSection />

        {/* Nearby Attractions Section */}
        <DolomitesAndOffersSection
          onOpenInfoModal={(title, content) => setInfoModal({ title, content })}
        />
      </main>

      {/* Footer */}
      <FooterSection
        onOpenInfoModal={(title, content) => setInfoModal({ title, content })}
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

      {/* Cookie Preferences Modal */}
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
                <span>Strictly Necessary Functionality Cookies</span>
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
