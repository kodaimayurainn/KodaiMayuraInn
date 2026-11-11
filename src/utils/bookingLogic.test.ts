import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateNights,
  validateBookingDraft,
  calculatePriceQuote,
  formatShortDateRange,
} from './bookingLogic';
import { HOTELS } from '../data/mayurainnData';

test('calculateNights computes exact night count and handles invalid ranges', () => {
  assert.equal(calculateNights('2027-06-10', '2027-06-14'), 4);
  assert.equal(calculateNights('2027-06-14', '2027-06-10'), 0);
  assert.equal(calculateNights('', '2027-06-14'), 0);
});

test('validateBookingDraft enforces accommodation and date selection matching Mayura Inn dialogs', () => {
  const missingHotel = validateBookingDraft({
    hotelId: '',
    checkIn: '2027-06-10',
    checkOut: '2027-06-14',
    rooms: 1,
    adults: 2,
    promoCode: '',
  });
  assert.equal(missingHotel.valid, false);
  assert.equal(missingHotel.errorType, 'missing_accommodation');
  assert.equal(missingHotel.errorTitle, 'Select Accommodation');

  const missingDates = validateBookingDraft({
    hotelId: 'mayura-inn',
    checkIn: '',
    checkOut: '',
    rooms: 1,
    adults: 2,
    promoCode: '',
  });
  assert.equal(missingDates.valid, false);
  assert.equal(missingDates.errorType, 'missing_dates');
  assert.equal(missingDates.errorTitle, 'Select Dates');

  const validDraft = validateBookingDraft({
    hotelId: 'mayura-inn',
    checkIn: '2027-02-10',
    checkOut: '2027-02-14',
    rooms: 1,
    adults: 2,
    promoCode: '',
  });
  assert.equal(validDraft.valid, true);
});

test('calculatePriceQuote applies Stay Longer + Save 15% and Mayura Inn 10% direct discount', () => {
  const mayuraInn = HOTELS.find((h) => h.id === 'mayura-inn')!;
  const quote = calculatePriceQuote(
    mayuraInn,
    320,
    '2027-05-01',
    '2027-05-05',
    1,
    'STAYLONGER15'
  );
  assert.equal(quote.nights, 4);
  assert.equal(quote.subtotal, 1280);
  assert.equal(quote.discountPercent, 15);
  assert.equal(quote.totalEur, 1088);

  const directQuote = calculatePriceQuote(
    mayuraInn,
    320,
    '2027-01-10',
    '2027-01-12',
    2,
    ''
  );
  assert.equal(directQuote.nights, 2);
  assert.equal(directQuote.subtotal, 1280);
  assert.equal(directQuote.discountPercent, 10);
  assert.equal(directQuote.totalEur, 1152);
});

test('formatShortDateRange formats dates cleanly for the sticky booking bar', () => {
  assert.equal(formatShortDateRange('', ''), 'CHECK IN - CHECK OUT');
  assert.equal(formatShortDateRange('2027-06-10', '2027-06-15'), '10 JUN - 15 JUN');
});
