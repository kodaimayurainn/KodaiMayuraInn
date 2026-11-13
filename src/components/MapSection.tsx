import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

export const MapSection: React.FC = () => {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=10.2446242,77.49171';

  return (
    <section
      id="map-section"
      className="bg-[#F9F8F6] py-16 md:py-24 border-t border-[#E8E4DD]"
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px] mb-10 md:mb-14"
        >
          <div className="flex items-center gap-2 font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#828578]" />
            <span>RESORT LOCATION & DIRECTIONS</span>
          </div>

          <h2 className="font-display text-[40px] md:text-[54px] leading-[1.04] uppercase tracking-[0.03em] text-[#171614]">
            FIND OUR HILLSIDE
            <br />
            SANCTUARY
          </h2>

          <p className="mt-4 font-courier text-[14px] md:text-[15px] leading-[1.65] text-[#5C5852]">
            Tucked into the cool, elevated heights of Kodaikanal, Kodai Mayura Inn
            offers serene hillside seclusion while remaining moments away from the town’s
            most celebrated sights, tranquil lakes, and misty forest trails.
          </p>
        </motion.div>

        {/* Content Grid: Map + Location Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Google Maps Interactive Frame */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 bg-[#EFECE6] border border-[#D3CFC7] p-2 md:p-3 shadow-md rounded-sm overflow-hidden flex flex-col"
          >
            <div className="w-full h-[400px] sm:h-[460px] md:h-[500px] relative rounded-xs overflow-hidden">
              <iframe
                title="Kodai Mayura Inn Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.210198665875!2d77.49171!3d10.244624199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0767c62eda08e7%3A0x2212b75e3d278edc!2sKODAI%20SQUARE%20HOMESTAY!5e0!3m2!1sen!2sin!4v1794560807249!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
            </div>
            <div className="pt-3 px-2 flex flex-wrap items-center justify-between text-[#828578] font-courier text-xs gap-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#4A443B]" />
                Kodaikanal, Tamil Nadu 624101 · 10.2446° N, 77.4917° E
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#171614] hover:text-[#4A443B] font-medium underline underline-offset-2 transition-colors cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Quick Info & Nearby Distances */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-between gap-6 bg-[#4A443B] text-[#F9F8F6] p-7 md:p-8 rounded-sm shadow-md"
          >
            <div>
              <div className="font-courier text-[11px] uppercase tracking-[0.22em] text-[#B2ABA0] mb-2">
                ACCESSIBILITY & DISTANCES
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                PROXIMITY HIGHLIGHTS
              </h3>

              <div className="mt-6 space-y-4 font-courier text-xs">
                <div className="pb-3 border-b border-white/15 flex items-center justify-between">
                  <span className="text-white/80">Kodaikanal Lake</span>
                  <span className="text-[#D8D3C8] font-medium">5 mins (1.8 km)</span>
                </div>
                <div className="pb-3 border-b border-white/15 flex items-center justify-between">
                  <span className="text-white/80">Coaker&apos;s Walk</span>
                  <span className="text-[#D8D3C8] font-medium">8 mins (2.6 km)</span>
                </div>
                <div className="pb-3 border-b border-white/15 flex items-center justify-between">
                  <span className="text-white/80">Pine Forest</span>
                  <span className="text-[#D8D3C8] font-medium">12 mins (4.2 km)</span>
                </div>
                <div className="pb-3 border-b border-white/15 flex items-center justify-between">
                  <span className="text-white/80">Pillar Rocks</span>
                  <span className="text-[#D8D3C8] font-medium">15 mins (5.5 km)</span>
                </div>
                <div className="pb-3 border-b border-white/15 flex items-center justify-between">
                  <span className="text-white/80">Guna Caves</span>
                  <span className="text-[#D8D3C8] font-medium">14 mins (5.0 km)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Kodaikanal Bus Stand</span>
                  <span className="text-[#D8D3C8] font-medium">7 mins (2.2 km)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/15">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#828578] hover:bg-[#6E7165] text-white font-display text-base uppercase tracking-wider rounded-[3px] transition-colors cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON MAPS</span>
              </a>
              <p className="mt-3 text-center font-courier text-[11px] text-white/60">
                Ample on-site parking available for guest vehicles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

