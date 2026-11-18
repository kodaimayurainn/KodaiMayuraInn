import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Shield, Trees, Heart } from 'lucide-react';
import { Link } from '../router/Router';
import { RESORT_CONTACT } from '../data/mayurainnData';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-12 pb-24 text-[#171614]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Header Breadcrumb & Heading */}
        <div className="max-w-[840px] mb-14">
          <div className="flex items-center gap-2 font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-3">
            <Link href="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>ABOUT US</span>
          </div>

          <h1 className="font-display text-[42px] sm:text-[54px] md:text-[62px] leading-[1.05] uppercase tracking-[0.02em] text-[#171614] mb-6">
            ABOUT KODAI MAYURA INN — QUIET LUXURY IN THE HILLS
          </h1>

          <p className="font-courier text-[15px] sm:text-[16px] leading-[1.7] text-[#5C5852]">
            Kodai Mayura Inn was conceived as an independent mountain sanctuary in Kodaikanal — a place
            where travellers, couples, and multi-generational families could step away from the hurried
            cadence of modern life and sink into stillness, clean highland air, and unhurried comfort.
          </p>
        </div>

        {/* Hero Architectural Image */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 aspect-[21/9] min-h-[320px] max-h-[580px] overflow-hidden rounded-xs border border-[#E0DCD4] shadow-sm bg-[#2D2924]"
        >
          <img
            src="/assets/kodai/exterior.png"
            alt="Kodai Mayura Inn Exterior Architecture in Kodaikanal"
            width="1448"
            height="620"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Story Section: Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-6 space-y-6 font-courier text-[14.5px] sm:text-[15.5px] leading-[1.75] text-[#3A3630]">
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-[#171614] mb-4">
              OUR INDEPENDENT IDENTITY & HERITAGE
            </h2>
            <p>
              Tucked into the cool heights of the Western Ghats at coordinates 10.2446° N, 77.4917° E,
              Kodai Mayura Inn stands as its own distinct boutique hospitality property. We are an
              independent boutique retreat, offering guests personal care, verified local integrity,
              and a dedicated on-site team.
            </p>
            <p>
              Unlike conventional crowded commercial hotels, our focus is deliberately centered on generous
              living spaces. We feature curated single bedroom sanctuaries, 2 Bedroom with Hall suites,
              and our signature 3 Bedroom with Hall family residence. Each layout offers independent
              en-suite bedrooms framed around spacious central living halls and private scenic verandas.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6 font-courier text-[14.5px] sm:text-[15.5px] leading-[1.75] text-[#3A3630]">
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-[#171614] mb-4">
              DESIGNED FOR CALM & FAMILY RESTORATION
            </h2>
            <p>
              Our property prioritizes peace and privacy. We do not operate noisy public banquet halls or
              commercial dining rooms open to outside crowds. Instead, our guests enjoy calm mornings
              with panoramic valley vistas, warm herbal tea on private balconies, and quiet starlit nights
              warmed by crisp mountain breezes.
            </p>
            <p>
              Each suite is built with tactile, grounding materials: hand-troweled warm plaster accents,
              sturdy stone foundations, natural oak and timber furnishings, and soft woven linens.
              Whether visiting for a weekend escape from Bengaluru, Kochi, or Chennai, or enjoying a
              longer family holiday, you will find warmth and effortless serenity.
            </p>
          </div>
        </div>

        {/* Values / Pillars 3-Column */}
        <div className="border-t border-[#DCD9D0] pt-16">
          <div className="font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-8 text-center">
            OUR CORE VALUES & COMMITMENTS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#EFECE6] p-8 border border-[#DCD9D0] rounded-xs">
              <Trees className="w-6 h-6 text-[#4A443B] mb-4" />
              <h3 className="font-display text-2xl uppercase tracking-wide text-[#171614] mb-3">
                HARMONY WITH NATURE
              </h3>
              <p className="font-courier text-xs leading-[1.7] text-[#5C5852]">
                Framed by mist, eucalyptus, and ancient Shola forests, every room is positioned to maximize
                fresh highland airflow and unobstructed valley vistas.
              </p>
            </div>

            <div className="bg-[#EFECE6] p-8 border border-[#DCD9D0] rounded-xs">
              <Heart className="w-6 h-6 text-[#4A443B] mb-4" />
              <h3 className="font-display text-2xl uppercase tracking-wide text-[#171614] mb-3">
                WARM PERSONAL CARE
              </h3>
              <p className="font-courier text-xs leading-[1.7] text-[#5C5852]">
                Our dedicated hillside concierge is always available to help arrange private local sightseeing,
                scenic hiking recommendations, and seamless travel logistics.
              </p>
            </div>

            <div className="bg-[#EFECE6] p-8 border border-[#DCD9D0] rounded-xs">
              <Shield className="w-6 h-6 text-[#4A443B] mb-4" />
              <h3 className="font-display text-2xl uppercase tracking-wide text-[#171614] mb-3">
                QUIET SANCTUARY
              </h3>
              <p className="font-courier text-xs leading-[1.7] text-[#5C5852]">
                A tranquil, family-friendly sanctuary without commercial distractions. Every guest enjoys
                unhurried, protected personal space and deep restorative sleep.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-20 p-8 bg-[#4A443B] text-[#F9F8F6] rounded-xs flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl uppercase tracking-wide">Ready to Experience Quiet Luxury?</h3>
            <p className="font-courier text-xs text-[#D8D3C8] mt-1">
              Connect directly with our concierge team for seasonal availability and personalized suite recommendations.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/rooms/"
              className="px-5 py-2.5 border border-white/40 text-white font-display text-xs uppercase tracking-wider hover:bg-white hover:text-[#4A443B] transition-colors"
            >
              VIEW SUITES
            </Link>
            <a
              href={`tel:${RESORT_CONTACT.phoneTel}`}
              className="px-6 py-2.5 bg-white text-[#4A443B] font-display text-xs uppercase tracking-wider hover:bg-[#F2EFE9] transition-colors"
            >
              CALL +91 93857 93701
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
