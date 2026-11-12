import { Hotel, HOTELS, OFFERS } from '../data/mayurainnData';

export interface BookingDraft {
  hotelId: string;
  checkIn: string;
  checkOut: string;
  rooms: number;
  adults: number;
  promoCode: string;
}

export interface BookingValidationResult {
  valid: boolean;
  errorType?: 'missing_accommodation' | 'missing_dates' | 'invalid_date_range';
  errorTitle?: string;
  errorMessage?: string;
}

export interface PriceQuote {
  nights: number;
  baseNightlyRate: number;
  rooms: number;
  subtotal: number;
  discountPercent: number;
  discountAmount: number;
  totalEur: number;
  appliedOfferTitle?: string;
}

export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;
  const diffMs = end.getTime() - start.getTime();
  const nights = Math.round(diffMs / (1000 * 60 * 60 * 24));
  return nights > 0 ? nights : 0;
}

export function validateBookingDraft(draft: BookingDraft): BookingValidationResult {
  if (!draft.hotelId || !HOTELS.some((h) => h.id === draft.hotelId)) {
    return {
      valid: false,
      errorType: 'missing_accommodation',
      errorTitle: 'Select Accommodation',
      errorMessage: 'Please select a hotel from the list before continuing.',
    };
  }

  if (!draft.checkIn || !draft.checkOut) {
    return {
      valid: false,
      errorType: 'missing_dates',
      errorTitle: 'Select Dates',
      errorMessage: 'Please select check-in and check-out dates before continuing.',
    };
  }

  const nights = calculateNights(draft.checkIn, draft.checkOut);
  if (nights <= 0) {
    return {
      valid: false,
      errorType: 'invalid_date_range',
      errorTitle: 'Select Dates',
      errorMessage: 'Check-out date must be after your check-in date.',
    };
  }

  return { valid: true };
}

export function calculatePriceQuote(
  hotel: Hotel,
  roomRateEur: number,
  checkIn: string,
  checkOut: string,
  rooms: number,
  promoCode: string
): PriceQuote {
  const nights = Math.max(1, calculateNights(checkIn, checkOut));
  const safeRooms = Math.max(1, Math.min(5, rooms));
  const subtotal = roomRateEur * nights * safeRooms;

  const cleanPromo = promoCode.trim().toUpperCase();
  let discountPercent = 0;
  let appliedOfferTitle: string | undefined;

  // Match explicit promo codes or automatic direct-booking offers
  const matchedOffer = OFFERS.find((o) => o.promoCode.toUpperCase() === cleanPromo);
  if (matchedOffer && nights >= matchedOffer.minNights) {
    discountPercent = matchedOffer.discountPercent;
    appliedOfferTitle = matchedOffer.title;
  } else if (cleanPromo === 'MAYURAINN10' || cleanPromo === 'MAYURA10' || cleanPromo === 'DIRECT10') {
    discountPercent = 10;
    appliedOfferTitle = 'Direct Booking 10% Benefit';
  } else if (hotel.id === 'mayura-inn' && !cleanPromo) {
    if (nights >= 3) {
      discountPercent = 15;
      appliedOfferTitle = 'Stay Longer + Save (15% Off)';
    } else {
      discountPercent = 10;
      appliedOfferTitle = 'Kodai Mayura Inn Direct Booking 10% Off';
    }
  }

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const totalEur = subtotal - discountAmount;

  return {
    nights,
    baseNightlyRate: roomRateEur,
    rooms: safeRooms,
    subtotal,
    discountPercent,
    discountAmount,
    totalEur,
    appliedOfferTitle,
  };
}

export function formatShortDateRange(checkIn: string, checkOut: string): string {
  if (!checkIn || !checkOut) return 'CHECK IN - CHECK OUT';
  const start = new Date(checkIn + 'T00:00:00');
  const end = new Date(checkOut + 'T00:00:00');
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 'CHECK IN - CHECK OUT';
  }
  const fmt = (d: Date) =>
    d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }).toUpperCase();
  return `${fmt(start)} - ${fmt(end)}`;
}
