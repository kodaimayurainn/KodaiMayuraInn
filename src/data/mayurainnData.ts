export interface Hotel {
  id: string;
  slug: string;
  name: string;
  location: string;
  country: 'India';
  isNewOpening?: boolean;
  openingDate?: string;
  cardImage: string;
  heroImage: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  nightlyRateEur: number;
  coordinates: string;
  rooms: {
    name: string;
    maxGuests: number;
    rateEur: number;
    description: string;
  }[];
}

export interface Offer {
  id: string;
  title: string;
  hotelId: string;
  hotelName: string;
  discountPercent: number;
  minNights: number;
  bookBy: string;
  staysUntil: string;
  image: string;
  wideImage: string;
  summary: string;
  details: string[];
  promoCode: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  guestName: string;
  location: string;
  hotelName?: string;
  stayDate?: string;
  tripadvisorUrl?: string;
}

export const HOTELS: Hotel[] = [
  {
    id: 'mayura-inn',
    slug: 'mayura-inn-kodaikanal',
    name: 'Kodai Mayura Inn',
    location: 'Kodaikanal, Tamil Nadu',
    country: 'India',
    isNewOpening: false,
    cardImage: '/assets/kodai/exterior.png',
    heroImage: '/assets/kodai/exterior.png',
    shortDescription:
      'Set against mist-kissed hills and emerald canopy, Kodai Mayura Inn is a boutique mountain sanctuary in Kodaikanal designed for quiet luxury and restorative escapes.',
    fullDescription:
      'Perched in the tranquil hills of Kodaikanal, Kodai Mayura Inn offers a collection of luxury multi-bedroom suites and residences. Merging raw stone foundations, warm timber detailing, and open panoramic verandas, each space invites you into an unhurried rhythm of stillness, fresh mountain air, and natural serenity.',
    highlights: [
      'Panoramic hillside verandas overlooking lush valleys',
      'Exclusive 1 Bedroom, 2 Bedroom & 3 Bedroom family-friendly suites',
      'Minutes from Kodaikanal Lake, Pine Forest & Pillar Rocks',
      'Outdoor fire pits, tranquil gardens & scenic relaxation',
    ],
    nightlyRateEur: 3000,
    coordinates: '10.2381° N, 77.4892° E',
    rooms: [
      {
        name: 'Single Bedroom',
        maxGuests: 2,
        rateEur: 3000,
        description: 'Thoughtfully designed private sanctuary featuring a king-size bed, scenic balcony overlooking misty valleys, and luxury en-suite bathroom.',
      },
      {
        name: '2 Bedroom with Hall Suite',
        maxGuests: 4,
        rateEur: 6000,
        description: 'Thoughtfully curated for quiet luxury and family comfort. Features two spacious master bedrooms with king beds, central sunlit living hall, private balconies, and twin en-suite bathrooms.',
      },
      {
        name: '3 Bedroom with Hall Residence',
        maxGuests: 6,
        rateEur: 9000,
        description: 'Our signature multi-bedroom haven offering generous space for families and groups. Three independent en-suite bedrooms accompany an expansive living hall and wrap-around panoramic veranda.',
      },
    ],
  },
];

export const OFFERS: Offer[] = [
  {
    id: 'stay-longer-save',
    title: 'STAY LONGER + SAVE',
    hotelId: 'mayura-inn',
    hotelName: 'Kodai Mayura Inn',
    discountPercent: 15,
    minNights: 3,
    bookBy: 'until 28 December 2027',
    staysUntil: 'until 28 December 2027',
    image: '/assets/kodai/2 Bedroom with Hall.png',
    wideImage: '/assets/kodai/exterior.png',
    summary:
      'Linger a little longer in the misty hills. Stay 3 nights or more at Kodai Mayura Inn and enjoy 15% off, with more time to unwind, disconnect, and sink into nature.',
    details: [
      'Minimum stay 3 nights',
      'Valid for 2 Bedroom and 3 Bedroom suites',
      'Complimentary morning mountain views & nature guides',
      'Flexible reschedule up to 72 hours prior to arrival',
    ],
    promoCode: 'STAYLONGER15',
  },
  {
    id: 'advanced-saver',
    title: 'ADVANCED SAVER',
    hotelId: 'mayura-inn',
    hotelName: 'Kodai Mayura Inn',
    discountPercent: 10,
    minNights: 1,
    bookBy: 'until 28 December 2027',
    staysUntil: 'until 28 December 2027',
    image: '/assets/kodai/3 Bedroom with hall.png',
    wideImage: '/assets/kodai/exterior.png',
    summary:
      'Slow down and settle in. Enjoy 10% off your direct reservation at Kodai Mayura Inn, where calm spaces, panoramic verandas, and cool breezes invite you to truly unwind.',
    details: [
      'Valid on direct website bookings',
      'All suite categories',
      'Priority early check-in upon availability',
      'Direct guest concierge assistance',
    ],
    promoCode: 'ADVANCE10',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-rohit',
    quote:
      '"Amazing stay! The rooms were spacious, clean, and well-equipped. The serene hillside ambience was a delight, and the staff was incredibly helpful. Highly recommended for a peaceful getaway!"',
    guestName: 'Rohit Kumar',
    location: 'Bengaluru',
  },
  {
    id: 'review-meera',
    quote:
      '"Beautiful property with stunning views. The amenities were excellent, especially the cozy bed and fast Wi-Fi. Loved the balcony swing! Will definitely visit again Kodai Mayura Inn team."',
    guestName: 'Meera Nair',
    location: 'Kochi',
  },
  {
    id: 'review-david',
    quote:
      '"Great hospitality! Especially the host was. The rooms were luxurious, and the stay was wonderful. The serene location added charm to our vacation. Truly a memorable experience!"',
    guestName: 'David Johnson',
    location: 'Chennai',
  },
];

export interface Attraction {
  id: string;
  name: string;
  tagline: string;
  distance: string;
  image: string;
  description: string;
  highlights: string[];
}

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    id: 'kodaikanal-lake',
    name: 'Kodaikanal Lake',
    tagline: 'Iconic Star-Shaped Waterway & Misty Shores',
    distance: '5 mins from resort',
    image: '/assets/attractions/lake.png',
    description:
      'The iconic star-shaped heart of Kodaikanal, framed by weeping willows and serene highland waters. Enjoy quiet sunrise strolls along the 5-kilometer promenade, gentle pedal-boating across the morning mist, or cycling beneath eucalyptus canopies.',
    highlights: ['Star-shaped lake', 'Pedal & row boating', '5km scenic perimeter path', 'Morning mist walks'],
  },
  {
    id: 'pine-forest',
    name: 'Pine Forest',
    tagline: 'Towering Century-Old Timber Groves',
    distance: '12 mins from resort',
    image: '/assets/attractions/pine forest.png',
    description:
      'A majestic forest of towering century-old pines originally cultivated in 1906. Sunbeams filter through the high canopy onto a soft blanket of needles, creating an ethereal, quiet sanctuary ideal for morning mindfulness and slow nature walks.',
    highlights: ['Planted in 1906', 'Soft pine-needle trails', 'Sunbeam photo canopy', 'Meditative atmosphere'],
  },
  {
    id: 'pillar-rocks',
    name: 'Pillar Rocks',
    tagline: 'Dramatic 400ft Granite Monoliths',
    distance: '15 mins from resort',
    image: '/assets/attractions/pillar rock.png',
    description:
      'Three dramatic vertical granite monoliths rising over 400 feet into the clouds. Offering breathtaking precipitous drop-offs and sweeping valley panoramas, Pillar Rocks is one of the Western Ghats’ most awe-inspiring geological landmarks.',
    highlights: ['Three 400ft boulders', 'Sweeping valley drops', 'Dramatic fog & mist', 'Observation view deck'],
  },
  {
    id: 'coakers-walk',
    name: "Coaker's Walk",
    tagline: 'Panoramic Mountain Promenade Above Clouds',
    distance: '8 mins from resort',
    image: '/assets/attractions/coakers walk.png',
    description:
      'A historic one-kilometer pedestrian promenade built along the edge of steep mountain slopes. Floating high above the cloud line, it treats visitors to sweeping panoramic views of emerald valleys, distant plains, and shifting misty horizons.',
    highlights: ['1km mountain path', 'Cloud-canopy views', 'Built in 1872', 'Telescope viewpoint'],
  },
  {
    id: 'guna-cave',
    name: 'Guna Cave',
    tagline: 'Mystical Caverns & Exposed Shola Roots',
    distance: '14 mins from resort',
    image: '/assets/attractions/gunacave.png',
    description:
      'Originally known as Devil’s Kitchen, these enigmatic caverns are tucked between deep rock chasms and the sprawling exposed root systems of ancient Shola trees. Shrouded in mist and timeless hill lore, it is a mesmerizing natural wonder.',
    highlights: ['Ancient rock chasms', 'Exposed Shola tree roots', 'Deep highland mist', 'Iconic natural setting'],
  },
];

export const DOLOMITES_SLIDES = [
  {
    id: 'mayura-interior',
    image: '/assets/kodai/2 Bedroom with Hall.png',
    fallbackImage: '/assets/kodai/2 Bedroom with Hall.png',
    caption: 'Fireside Seating & Textured Curtains — Kodai Mayura Inn',
  },
  {
    id: 'mayura-exterior',
    image: '/assets/kodai/exterior.png',
    fallbackImage: '/assets/kodai/exterior.png',
    caption: 'Highland Sanctuary Facade — Kodai Mayura Inn',
  },
  {
    id: 'mayura-cabana',
    image: '/assets/kodai/3 Bedroom with hall.png',
    fallbackImage: '/assets/kodai/3 Bedroom with hall.png',
    caption: 'Sunlit Timber Seating & Terrace — Kodai Mayura Inn',
  },
];
