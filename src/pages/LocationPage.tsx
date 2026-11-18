import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, ExternalLink, Phone, Car, Mountain } from 'lucide-react';
import { Link } from '../router/Router';
import { RESORT_CONTACT, NEARBY_ATTRACTIONS } from '../data/mayurainnData';

export const LocationPage: React.FC = () => {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=10.2446242,77.49171';

  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-12 pb-24 text-[#171614]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Header Breadcrumb & Heading */}
        <div className="max-w-[840px] mb-14">
          <div className="flex items-center gap-2 font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-3">
            <Link href="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>LOCATION & DIRECTIONS</span>
          </div>

          <h1 className="font-display text-[42px] sm:text-[54px] md:text-[62px] leading-[1.05] uppercase tracking-[0.02em] text-[#171614] mb-6">
            LOCATION, MAP & DIRECTIONS — KODAI MAYURA INN
          </h1>

          <p className="font-courier text-[15px] sm:text-[16px] leading-[1.7] text-[#5C5852]">
            Kodai Mayura Inn is perched high in the serene hills of Kodaikanal at coordinates{' '}
            <span className="font-bold text-[#171614]">10.2446242° N, 77.49171° E</span>. Our hillside
            setting offers peaceful sanctuary while remaining just minutes from Kodaikanal Lake,
            scenic promenades, and timeless pine forests.
          </p>
        </div>

        {/* Map & Distance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Interactive Google Map Frame */}
          <div className="lg:col-span-8 bg-[#EFECE6] border border-[#D3CFC7] p-3 shadow-md rounded-sm overflow-hidden flex flex-col">
            <div className="w-full h-[420px] sm:h-[480px] md:h-[540px] relative rounded-xs overflow-hidden">
              <iframe
                title="Kodai Mayura Inn Physical Location Map"
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
                {RESORT_CONTACT.address} · Latitude 10.2446242, Longitude 77.49171
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
          </div>

          {/* Quick Distance Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 bg-[#4A443B] text-[#F9F8F6] p-7 md:p-8 rounded-sm shadow-md">
            <div>
              <div className="font-courier text-[11px] uppercase tracking-[0.22em] text-[#B2ABA0] mb-2">
                VERIFIED DISTANCES TO ATTRACTIONS
              </div>
              <h2 className="font-display text-2xl uppercase tracking-wide mb-6">
                NEARBY LANDMARKS
              </h2>

              <div className="space-y-4 font-courier text-xs">
                {NEARBY_ATTRACTIONS.map((attraction) => (
                  <div key={attraction.id} className="flex items-center justify-between pb-3 border-b border-white/15">
                    <span className="text-[#E8E4DD] font-medium">{attraction.name}</span>
                    <span className="text-[#B2ABA0]">{attraction.distance}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <span className="text-[#E8E4DD] font-medium">Bryant Park</span>
                  <span className="text-[#B2ABA0]">2.2 km from resort</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <span className="text-[#E8E4DD] font-medium">Kodaikanal Bus Stand</span>
                  <span className="text-[#B2ABA0]">2.4 km from resort</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15">
              <div className="font-courier text-xs text-[#B2ABA0] mb-1">Direct Assistance</div>
              <a
                href={`tel:${RESORT_CONTACT.phoneTel}`}
                className="font-display text-lg text-white hover:underline flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>+91 93857 93701</span>
              </a>
            </div>
          </div>
        </div>

        {/* How to Reach Guide */}
        <div className="border-t border-[#DCD9D0] pt-16">
          <div className="font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-4">
            TRANSPORTATION & ACCESS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide mb-10">
            HOW TO REACH KODAI MAYURA INN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#EFECE6] p-7 border border-[#DCD9D0] rounded-xs">
              <div className="font-courier text-xs uppercase tracking-wider text-[#828578] mb-2">BY AIR (AIRPORTS)</div>
              <h3 className="font-display text-2xl uppercase tracking-wide mb-3">NEAREST AIRPORTS</h3>
              <ul className="space-y-3 font-courier text-xs text-[#5C5852]">
                <li><strong className="text-[#171614]">Madurai Airport (IXM):</strong> ~120 km (approx. 3 to 3.5 hours scenic drive through the Ghat road).</li>
                <li><strong className="text-[#171614]">Coimbatore Airport (CJB):</strong> ~175 km (approx. 4.5 hours drive).</li>
                <li><strong className="text-[#171614]">Trichy Airport (TRZ):</strong> ~195 km (approx. 4.5 to 5 hours drive).</li>
              </ul>
            </div>

            <div className="bg-[#EFECE6] p-7 border border-[#DCD9D0] rounded-xs">
              <div className="font-courier text-xs uppercase tracking-wider text-[#828578] mb-2">BY RAIL</div>
              <h3 className="font-display text-2xl uppercase tracking-wide mb-3">RAILWAY STATIONS</h3>
              <ul className="space-y-3 font-courier text-xs text-[#5C5852]">
                <li><strong className="text-[#171614]">Kodai Road (KQN):</strong> ~80 km (approx. 2.5 hours by taxi). The most common railhead for visiting Kodaikanal.</li>
                <li><strong className="text-[#171614]">Dindigul Junction (DG):</strong> ~90 km (major junction with direct connectivity to Chennai, Bengaluru, and Kerala).</li>
              </ul>
            </div>

            <div className="bg-[#EFECE6] p-7 border border-[#DCD9D0] rounded-xs">
              <div className="font-courier text-xs uppercase tracking-wider text-[#828578] mb-2">BY ROAD</div>
              <h3 className="font-display text-2xl uppercase tracking-wide mb-3">SCENIC GHAT DRIVE</h3>
              <ul className="space-y-3 font-courier text-xs text-[#5C5852]">
                <li><strong className="text-[#171614]">From Bengaluru:</strong> ~465 km via NH44 (Salem – Dindigul – Batlagundu – Kodai Ghat Road). Approx. 8 hours.</li>
                <li><strong className="text-[#171614]">From Chennai:</strong> ~525 km via NH45 / NH83. Approx. 9 hours.</li>
                <li><strong className="text-[#171614]">From Kochi:</strong> ~275 km via Munnar or Theni. Approx. 6.5 hours.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
