import React from 'react';
import { motion } from 'motion/react';
import { Compass, CloudSun, Calendar, Check, MapPin, Sparkles } from 'lucide-react';
import { Link } from '../router/Router';
import { RESORT_CONTACT, NEARBY_ATTRACTIONS } from '../data/mayurainnData';

export const GuidePage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-12 pb-24 text-[#171614]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Header Breadcrumb & Heading */}
        <div className="max-w-[840px] mb-14">
          <div className="flex items-center gap-2 font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-3">
            <Link href="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>TRAVEL GUIDE</span>
          </div>

          <h1 className="font-display text-[42px] sm:text-[54px] md:text-[62px] leading-[1.05] uppercase tracking-[0.02em] text-[#171614] mb-6">
            THE ESSENTIAL KODAIKANAL TRAVEL GUIDE
          </h1>

          <p className="font-courier text-[15px] sm:text-[16px] leading-[1.7] text-[#5C5852]">
            Rising 2,133 meters above sea level in the Palani Hills of Tamil Nadu, Kodaikanal
            has earned its reputation as the “Princess of Hill Stations.” This curated guide,
            crafted by the concierge team at Kodai Mayura Inn, offers verified insights on weather,
            attractions, local trails, and travel tips.
          </p>
        </div>

        {/* Hero Travel Guide Image */}
        <div className="mb-16 aspect-[21/9] min-h-[300px] max-h-[520px] overflow-hidden rounded-xs border border-[#E0DCD4] shadow-sm bg-[#2D2924]">
          <img
            src="/assets/attractions/pillar rock.png"
            alt="Pillar Rocks Mountain Vista in Kodaikanal"
            width="1448"
            height="620"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Section 1: Best Time to Visit */}
        <div className="border-b border-[#DCD9D0] pb-16 mb-16">
          <div className="flex items-center gap-2 font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-3">
            <CloudSun className="w-4 h-4 text-[#828578]" />
            <span>SEASONAL WEATHER</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide mb-8">
            BEST SEASONS TO VISIT KODAIKANAL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#EFECE6] p-7 border border-[#DCD9D0] rounded-xs">
              <div className="font-courier text-xs uppercase tracking-wider text-[#828578] mb-2">MARCH – JUNE</div>
              <h3 className="font-display text-2xl uppercase tracking-wide mb-3">SUMMER RETREAT</h3>
              <p className="font-courier text-xs leading-[1.7] text-[#5C5852]">
                Daytime temperatures range between 20°C and 28°C. Perfect for escaping the plains heat,
                boating on Kodaikanal Lake, and exploring floral displays at Bryant Park. Clear blue skies
                make this the peak holiday season.
              </p>
            </div>

            <div className="bg-[#EFECE6] p-7 border border-[#DCD9D0] rounded-xs">
              <div className="font-courier text-xs uppercase tracking-wider text-[#828578] mb-2">JULY – SEPTEMBER</div>
              <h3 className="font-display text-2xl uppercase tracking-wide mb-3">MISTY MONSOON</h3>
              <p className="font-courier text-xs leading-[1.7] text-[#5C5852]">
                Rain transforms the hills into lush, emerald green sanctuaries. Waterfalls swell to full
                grandeur, and rolling fog blankets the verandas. Ideal for romantic getaways and slow
                travellers who cherish unhurried indoor warmth.
              </p>
            </div>

            <div className="bg-[#EFECE6] p-7 border border-[#DCD9D0] rounded-xs">
              <div className="font-courier text-xs uppercase tracking-wider text-[#828578] mb-2">OCTOBER – FEBRUARY</div>
              <h3 className="font-display text-2xl uppercase tracking-wide mb-3">CRISP WINTER</h3>
              <p className="font-courier text-xs leading-[1.7] text-[#5C5852]">
                Crisp mountain air with night temperatures dipping to 8°C–12°C. Clear starry nights and
                refreshing morning frost create a cozy European-style hillside atmosphere.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Must-Visit Landmarks */}
        <div className="border-b border-[#DCD9D0] pb-16 mb-16">
          <div className="flex items-center gap-2 font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-3">
            <MapPin className="w-4 h-4 text-[#828578]" />
            <span>TOP SIGHTS & ATTRACTIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide mb-8">
            ICONIC PLACES TO EXPLORE
          </h2>

          <div className="space-y-12">
            {NEARBY_ATTRACTIONS.map((attraction, idx) => (
              <div
                key={attraction.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#EFECE6] p-6 sm:p-8 rounded-xs border border-[#DCD9D0] ${
                  idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:col-start-8' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-xs bg-[#2D2924]">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      width="600"
                      height="450"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="font-courier text-xs uppercase tracking-wider text-[#828578] mb-1">
                    {attraction.distance}
                  </div>
                  <h3 className="font-display text-3xl uppercase tracking-wide mb-2">
                    {attraction.name}
                  </h3>
                  <div className="font-courier text-xs text-[#828578] uppercase mb-4">
                    {attraction.tagline}
                  </div>
                  <p className="font-courier text-sm leading-[1.7] text-[#4A443B] mb-5">
                    {attraction.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-courier text-[#171614]">
                    {attraction.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#828578]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: 2-Day Curated Itinerary */}
        <div className="border-b border-[#DCD9D0] pb-16 mb-16">
          <div className="font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-3">
            <Calendar className="w-4 h-4 text-[#828578]" />
            <span>ITINERARY SUGGESTIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide mb-8">
            CURATED TWO-DAY TRAVEL ITINERARY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#EFECE6] p-8 border border-[#DCD9D0] rounded-xs space-y-4 font-courier text-xs text-[#4A443B] leading-[1.7]">
              <div className="font-courier text-xs font-bold uppercase tracking-wider text-[#171614]">
                DAY 1 — LAKESIDE SERENITY & PROMENADES
              </div>
              <p>
                <strong className="text-[#171614]">09:00 AM:</strong> Start with calm morning mountain tea on your private veranda at Kodai Mayura Inn.
              </p>
              <p>
                <strong className="text-[#171614]">10:30 AM:</strong> Stroll down to Kodaikanal Lake (1.8 km). Rent a rowing or pedal boat or cycle the perimeter path.
              </p>
              <p>
                <strong className="text-[#171614]">02:30 PM:</strong> Visit Bryant Park and walk along Coaker’s Walk (2.6 km) for panoramic cliff-edge views of the cloud ocean.
              </p>
              <p>
                <strong className="text-[#171614]">06:00 PM:</strong> Return to Kodai Mayura Inn for an unhurried, quiet evening in your suite living hall.
              </p>
            </div>

            <div className="bg-[#EFECE6] p-8 border border-[#DCD9D0] rounded-xs space-y-4 font-courier text-xs text-[#4A443B] leading-[1.7]">
              <div className="font-courier text-xs font-bold uppercase tracking-wider text-[#171614]">
                DAY 2 — PINE TRAILS & GEOLOGICAL WONDERS
              </div>
              <p>
                <strong className="text-[#171614]">09:30 AM:</strong> Drive out to the aromatic Pine Forest (3.5 km). Take a peaceful forest bath along needle-covered paths.
              </p>
              <p>
                <strong className="text-[#171614]">11:30 AM:</strong> Continue to Guna Caves (5.0 km) to witness exposed Shola roots and deep rock chasms.
              </p>
              <p>
                <strong className="text-[#171614]">02:00 PM:</strong> Head up to Pillar Rocks (4.2 km) for dramatic 400ft vertical rock pillars piercing through highland fog.
              </p>
              <p>
                <strong className="text-[#171614]">05:00 PM:</strong> Browse local handmade chocolates and essential oils in the town center before heading back to the resort.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Accommodation Context & CTA */}
        <div className="p-8 md:p-12 bg-[#4A443B] text-[#F9F8F6] rounded-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-[680px]">
            <div className="font-courier text-xs uppercase tracking-[0.2em] text-[#D8D3C8] mb-2">
              WHERE TO STAY IN KODAIKANAL
            </div>
            <h3 className="font-display text-3xl uppercase tracking-wide">
              RESERVE YOUR STAY AT KODAI MAYURA INN
            </h3>
            <p className="font-courier text-xs text-[#D8D3C8] mt-2 leading-[1.7]">
              An independent hillside haven offering 1, 2, and 3-bedroom family suites with spacious living halls,
              panoramic private verandas, and quiet luxury.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/rooms/"
              className="px-6 py-3 border border-white/40 text-white font-display text-xs uppercase tracking-wider hover:bg-white hover:text-[#4A443B] transition-colors"
            >
              EXPLORE SUITES
            </Link>
            <Link
              href="/contact/"
              className="px-6 py-3 bg-white text-[#4A443B] font-display text-xs uppercase tracking-wider hover:bg-[#F2EFE9] transition-colors"
            >
              CONTACT CONCIERGE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
