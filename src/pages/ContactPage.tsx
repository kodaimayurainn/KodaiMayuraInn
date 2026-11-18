import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, MapPin, Clock, Calendar, Check, Send } from 'lucide-react';
import { Link } from '../router/Router';
import { RESORT_CONTACT } from '../data/mayurainnData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: '2-bedroom-with-hall',
    dates: '',
    guests: '2 Guests',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp pre-filled enquiry fallback
    const text = encodeURIComponent(
      `Hello Kodai Mayura Inn! I would like to inquire about a reservation:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Suite: ${formData.roomType}\n` +
      `• Dates: ${formData.dates}\n` +
      `• Guests: ${formData.guests}\n` +
      `• Notes: ${formData.message || 'None'}`
    );
    window.open(`https://wa.me/919385793701?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-12 pb-24 text-[#171614]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Header Breadcrumb & Heading */}
        <div className="max-w-[840px] mb-14">
          <div className="flex items-center gap-2 font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-3">
            <Link href="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>CONTACT & RESERVATIONS</span>
          </div>

          <h1 className="font-display text-[42px] sm:text-[54px] md:text-[62px] leading-[1.05] uppercase tracking-[0.02em] text-[#171614] mb-6">
            CONTACT OUR HILLSIDE CONCIERGE
          </h1>

          <p className="font-courier text-[15px] sm:text-[16px] leading-[1.7] text-[#5C5852]">
            For direct reservations, suite availability, or special family arrangements, reach out
            directly to the Kodai Mayura Inn team. We are dedicated to providing clear, personal,
            and unhurried hospitality.
          </p>
        </div>

        {/* Contact Info + Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#4A443B] text-[#F9F8F6] p-8 rounded-xs shadow-sm space-y-6">
              <div className="font-courier text-xs uppercase tracking-[0.2em] text-[#B2ABA0]">
                DIRECT RESERVATION LINE
              </div>

              <div>
                <a
                  href={`tel:${RESORT_CONTACT.phoneTel}`}
                  className="font-display text-3xl sm:text-4xl text-white hover:text-white/80 transition-colors flex items-center gap-3"
                >
                  <Phone className="w-6 h-6 text-[#D8D3C8]" />
                  <span>+91 93857 93701</span>
                </a>
                <p className="font-courier text-xs text-[#B2ABA0] mt-2">
                  Direct concierge available daily 8:00 AM – 9:00 PM IST.
                </p>
              </div>

              <div className="pt-4 border-t border-white/15">
                <a
                  href="https://wa.me/919385793701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-black font-display text-xs uppercase tracking-wider hover:bg-[#1ebc59] transition-colors rounded-xs font-bold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP CONCIERGE</span>
                </a>
              </div>
            </div>

            {/* Property Information Card */}
            <div className="bg-[#EFECE6] p-8 border border-[#DCD9D0] rounded-xs space-y-5 font-courier text-xs text-[#4A443B]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#828578] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#171614] mb-0.5">Physical Coordinates & Address:</strong>
                  <span>Latitude: 10.2446242° N, Longitude: 77.49171° E</span>
                  <div className="text-[#828578] mt-0.5">Kodaikanal, Tamil Nadu 624101, India</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#DCD9D0]">
                <Clock className="w-4 h-4 text-[#828578] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#171614] mb-0.5">Check-in / Check-out Times:</strong>
                  <span>Check-in: 12:00 PM (Noon)</span>
                  <span className="block">Check-out: 10:00 AM</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#DCD9D0]">
                <Calendar className="w-4 h-4 text-[#828578] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#171614] mb-0.5">Property Guidance:</strong>
                  <span>Quiet family-friendly suites. No commercial dining or banqueting facilities on-site to preserve peaceful rest.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Reservation Inquiry Form */}
          <div className="lg:col-span-7 bg-[#EFECE6] border border-[#DCD9D0] p-8 sm:p-10 rounded-xs shadow-sm">
            <div className="font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-2">
              ONLINE ENQUIRY
            </div>
            <h2 className="font-display text-3xl uppercase tracking-wide mb-6">
              SUBMIT A DIRECT RESERVATION ENQUIRY
            </h2>

            {submitted ? (
              <div className="p-6 bg-[#4A443B] text-white rounded-xs space-y-3 font-courier text-xs">
                <div className="flex items-center gap-2 text-green-400 font-bold uppercase tracking-wider">
                  <Check className="w-4 h-4" />
                  <span>Enquiry Initiated!</span>
                </div>
                <p>
                  Thank you! Your inquiry details have opened in WhatsApp. Our concierge will respond shortly with available dates and confirmed rates.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-white underline hover:text-white/80"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-courier text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#171614] mb-1.5 uppercase tracking-wider font-bold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Sharma"
                      className="w-full p-3 bg-white border border-[#DCD9D0] text-[#171614] focus:outline-none focus:border-[#4A443B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#171614] mb-1.5 uppercase tracking-wider font-bold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full p-3 bg-white border border-[#DCD9D0] text-[#171614] focus:outline-none focus:border-[#4A443B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#171614] mb-1.5 uppercase tracking-wider font-bold">
                      Preferred Suite *
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full p-3 bg-white border border-[#DCD9D0] text-[#171614] focus:outline-none focus:border-[#4A443B]"
                    >
                      <option value="Single Bedroom">Single Bedroom (₹3,000/night)</option>
                      <option value="2 Bedroom with Hall Suite">2 Bedroom with Hall Suite (₹6,000/night)</option>
                      <option value="3 Bedroom with Hall Residence">3 Bedroom with Hall Residence (₹9,000/night)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#171614] mb-1.5 uppercase tracking-wider font-bold">
                      Expected Travel Dates *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      placeholder="e.g. 15 Dec – 18 Dec 2026"
                      className="w-full p-3 bg-white border border-[#DCD9D0] text-[#171614] focus:outline-none focus:border-[#4A443B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#171614] mb-1.5 uppercase tracking-wider font-bold">
                    Additional Notes or Special Requests
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your arrival time, number of family members, or specific questions."
                    className="w-full p-3 bg-white border border-[#DCD9D0] text-[#171614] focus:outline-none focus:border-[#4A443B]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#4A443B] text-white font-display text-xs uppercase tracking-wider hover:bg-[#38332C] transition-colors flex items-center justify-center gap-2 cursor-pointer font-bold"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND DIRECT INQUIRY VIA WHATSAPP</span>
                  </button>
                  <div className="mt-2 text-[10.5px] text-[#828578]">
                    Submitting forwards your requested dates directly to our on-duty manager for immediate reply.
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
