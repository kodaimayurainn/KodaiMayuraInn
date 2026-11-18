import React from 'react';
import { Phone, Instagram, MapPin, Globe, ExternalLink } from 'lucide-react';
import { RESORT_CONTACT } from '../data/mayurainnData';
import { FEATURED_ROOMS } from '../components/RoomsSection';

const AIRBNB_COLOR = '#FF5A5F';

export const QRContactPage: React.FC = () => {
  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=10.2446242,77.49171';
  const whatsappUrl = `https://wa.me/${RESORT_CONTACT.phoneTel.replace('+', '')}?text=Hello%20Kodai%20Mayura%20Inn%2C%20I%20saw%20your%20QR%20card%20and%20would%20like%20to%20enquire%20about%20a%20stay.`;

  return (
    <div className="min-h-screen bg-[#171614] text-[#F9F8F6] flex flex-col items-center px-4 py-10 pb-16">
      {/* Logo / Brand */}
      <div className="w-full max-w-md flex flex-col items-center mb-8">
        <img
          src="/assets/logo/logo-light.png"
          alt="Kodai Mayura Inn Logo"
          width="160"
          height="80"
          className="h-16 w-auto object-contain mb-5"
          onError={(e) => {
            // Fallback: hide the img and show text mark
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <h1 className="font-display text-[28px] sm:text-[34px] uppercase tracking-[0.06em] text-[#F9F8F6] text-center leading-tight">
          KODAI MAYURA INN
        </h1>
        <p className="font-courier text-xs text-[#828578] uppercase tracking-[0.2em] mt-1 text-center">
          Boutique Hillside Stay · Kodaikanal
        </p>
        <div className="mt-4 w-16 h-px bg-[#4A443B]" />
      </div>

      {/* Quick Contact Buttons */}
      <div className="w-full max-w-md space-y-3 mb-8">
        {/* Call */}
        <a
          href={`tel:${RESORT_CONTACT.phoneTel}`}
          className="flex items-center gap-4 w-full px-5 py-4 bg-[#2D2924] border border-[#3D3830] hover:border-[#828578] transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-[#4A443B] flex items-center justify-center shrink-0 group-hover:bg-[#5A5449] transition-colors">
            <Phone className="w-4.5 h-4.5 text-[#F9F8F6]" />
          </div>
          <div>
            <div className="font-courier text-[10px] uppercase tracking-[0.2em] text-[#828578]">Call Us</div>
            <div className="font-display text-[18px] text-[#F9F8F6] tracking-wide">
              {RESORT_CONTACT.phoneFormatted}
            </div>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 w-full px-5 py-4 bg-[#1A2E1E] border border-[#2A4A2E] hover:border-[#4CAF50] transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div>
            <div className="font-courier text-[10px] uppercase tracking-[0.2em] text-[#828578]">WhatsApp</div>
            <div className="font-display text-[18px] text-[#F9F8F6] tracking-wide">Message Us</div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-[#828578] ml-auto shrink-0" />
        </a>

        {/* Instagram */}
        <a
          href={RESORT_CONTACT.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 w-full px-5 py-4 bg-[#2D1A2A] border border-[#4A2A40] hover:border-[#C13584] transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#E1306C] flex items-center justify-center shrink-0">
            <Instagram className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <div className="font-courier text-[10px] uppercase tracking-[0.2em] text-[#828578]">Instagram</div>
            <div className="font-display text-[18px] text-[#F9F8F6] tracking-wide">
              {RESORT_CONTACT.instagramHandle}
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-[#828578] ml-auto shrink-0" />
        </a>

        {/* Google Maps */}
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 w-full px-5 py-4 bg-[#1A1E2D] border border-[#2A3050] hover:border-[#4A80E8] transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-[#4A80E8]/20 flex items-center justify-center shrink-0">
            <MapPin className="w-4.5 h-4.5 text-[#4A80E8]" />
          </div>
          <div>
            <div className="font-courier text-[10px] uppercase tracking-[0.2em] text-[#828578]">Location</div>
            <div className="font-display text-[16px] text-[#F9F8F6] tracking-wide">
              {RESORT_CONTACT.location}
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-[#828578] ml-auto shrink-0" />
        </a>

        {/* Website */}
        <a
          href={RESORT_CONTACT.websiteUrl}
          className="flex items-center gap-4 w-full px-5 py-4 bg-[#2D2924] border border-[#3D3830] hover:border-[#828578] transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-[#4A443B] flex items-center justify-center shrink-0">
            <Globe className="w-4.5 h-4.5 text-[#F9F8F6]" />
          </div>
          <div>
            <div className="font-courier text-[10px] uppercase tracking-[0.2em] text-[#828578]">Website</div>
            <div className="font-display text-[16px] text-[#F9F8F6] tracking-wide">
              {RESORT_CONTACT.website}
            </div>
          </div>
        </a>
      </div>

      {/* Divider */}
      <div className="w-full max-w-md mb-6">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-[#2D2924]" />
          <span className="font-courier text-[10px] uppercase tracking-[0.2em] text-[#4A443B]">Book Your Stay</span>
          <div className="flex-1 h-px bg-[#2D2924]" />
        </div>
      </div>

      {/* Airbnb Room Cards */}
      <div className="w-full max-w-md space-y-3 mb-8">
        {FEATURED_ROOMS.map((room) => (
          <a
            key={room.id}
            href={room.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full px-5 py-4 bg-[#2D2924] border border-[#3D3830] hover:border-[#FF5A5F] transition-colors group"
          >
            {/* Room Image Thumbnail */}
            <div className="w-14 h-14 shrink-0 overflow-hidden bg-[#1A1614]">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-courier text-[10px] uppercase tracking-[0.18em] text-[#828578] mb-0.5">
                {room.badge}
              </div>
              <div className="font-display text-[15px] text-[#F9F8F6] uppercase tracking-wide leading-tight truncate">
                {room.name}
              </div>
              <div className="font-courier text-[11px] text-[#828578] mt-0.5">
                Up to {room.maxGuests} guests · From ₹{room.rateEur.toLocaleString('en-IN')}/night
              </div>
            </div>
            <div
              className="shrink-0 px-3 py-1.5 text-white font-display text-[11px] uppercase tracking-wider"
              style={{ backgroundColor: AIRBNB_COLOR }}
            >
              Book
            </div>
          </a>
        ))}
        <p className="font-courier text-[10px] text-[#4A443B] text-center pt-1 tracking-wider">
          *Prices may vary based on demand and season
        </p>
      </div>

      {/* Footer */}
      <div className="w-full max-w-md text-center">
        <div className="w-full h-px bg-[#2D2924] mb-5" />
        <p className="font-courier text-[10px] text-[#4A443B] uppercase tracking-[0.2em]">
          Kodai Mayura Inn · Kodaikanal, Tamil Nadu 624101
        </p>
        <p className="font-courier text-[10px] text-[#2D2924] mt-1 tracking-wider">
          An independent boutique hillside retreat
        </p>
      </div>
    </div>
  );
};
