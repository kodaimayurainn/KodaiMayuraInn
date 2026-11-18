export interface PageSEO {
  path: string;
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogImageAlt: string;
  schema: Record<string, any>;
  h1: string;
}

export const SITE_URL = 'https://kodaimayurainn.com';

export const PAGES_SEO: Record<string, PageSEO> = {
  '/': {
    path: '/',
    title: 'Kodai Mayura Inn — Boutique Hillside Retreat in Kodaikanal',
    description:
      'Experience unhurried quiet luxury at Kodai Mayura Inn, Kodaikanal. Featuring 1, 2, and 3-bedroom family-friendly suites with panoramic mountain verandas.',
    canonicalUrl: `${SITE_URL}/`,
    ogTitle: 'Kodai Mayura Inn — Boutique Hillside Retreat in Kodaikanal',
    ogDescription:
      'Elevated escapes in the misty hills of Kodaikanal. Discover Kodai Mayura Inn\'s collection of boutique, design-led luxury suites and residences.',
    ogImage: `${SITE_URL}/assets/kodai/exterior.png`,
    ogImageAlt: 'Kodai Mayura Inn Exterior Architecture',
    h1: 'Kodai Mayura Inn – Boutique Hillside Stay in Kodaikanal',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Hotel',
          '@id': `${SITE_URL}/#hotel`,
          name: 'Kodai Mayura Inn',
          description:
            'Boutique hillside retreat in Kodaikanal featuring luxury family-friendly suites, private scenic balconies, and panoramic mountain vistas.',
          url: `${SITE_URL}/`,
          image: `${SITE_URL}/assets/kodai/exterior.png`,
          telephone: '+919385793701',
          priceRange: '₹3,000 - ₹9,000',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Kodai Mayura Inn, Near Lake & Forest View',
            addressLocality: 'Kodaikanal',
            addressRegion: 'Tamil Nadu',
            postalCode: '624101',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 10.2446242,
            longitude: 77.49171,
          },
          hasMap: 'https://www.google.com/maps/search/?api=1&query=10.2446242,77.49171',
          amenityFeature: [
            { '@type': 'LocationFeatureSpecification', name: 'High-Speed Wi-Fi', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Private Balcony with Mountain View', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Family Friendly Living Halls', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Quiet Hillside Sanctuary', value: true },
          ],
          checkinTime: '12:00',
          checkoutTime: '10:00',
          petsAllowed: false,
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: 'Kodai Mayura Inn',
          publisher: { '@id': `${SITE_URL}/#hotel` },
        },
      ],
    },
  },
  '/rooms/': {
    path: '/rooms/',
    title: 'Suites & Accommodations — Kodai Mayura Inn Kodaikanal',
    description:
      'Explore our curated collection of 1-Bedroom, 2-Bedroom with Hall, and 3-Bedroom with Hall suites. Private mountain view balconies and spacious living halls.',
    canonicalUrl: `${SITE_URL}/rooms/`,
    ogTitle: 'Luxury Hillside Suites & Residences — Kodai Mayura Inn',
    ogDescription:
      'Spacious multi-bedroom suites crafted for families and quiet relaxation in Kodaikanal. Featuring king beds, panoramic balconies, and sunlit living halls.',
    ogImage: `${SITE_URL}/assets/kodai/2%20Bedroom%20with%20Hall.png`,
    ogImageAlt: '2 Bedroom with Hall Suite at Kodai Mayura Inn',
    h1: 'Suites & Residences at Kodai Mayura Inn',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Hotel',
          '@id': `${SITE_URL}/#hotel`,
          name: 'Kodai Mayura Inn',
          url: `${SITE_URL}/`,
          containsPlace: [
            {
              '@type': 'HotelRoom',
              name: 'Single Bedroom Suite',
              description:
                'Cozy private hillside sanctuary featuring a king-size bed, private scenic balcony overlooking misty valleys, and luxury en-suite bathroom.',
              occupancy: { '@type': 'QuantitativeValue', maxValue: 2 },
              bed: { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'King' },
            },
            {
              '@type': 'HotelRoom',
              name: '2 Bedroom with Hall Suite',
              description:
                'Two master bedrooms with king beds, an expansive central living hall, private mountain view balconies, and twin en-suite bathrooms.',
              occupancy: { '@type': 'QuantitativeValue', maxValue: 4 },
              bed: { '@type': 'BedDetails', numberOfBeds: 2, typeOfBed: 'King' },
            },
            {
              '@type': 'HotelRoom',
              name: '3 Bedroom with Hall Residence',
              description:
                'Signature multi-bedroom haven featuring three independent en-suite bedrooms, open living hall, wrap-around panoramic veranda, and valley vistas.',
              occupancy: { '@type': 'QuantitativeValue', maxValue: 6 },
              bed: { '@type': 'BedDetails', numberOfBeds: 3, typeOfBed: 'King' },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Suites & Accommodations', item: `${SITE_URL}/rooms/` },
          ],
        },
      ],
    },
  },
  '/about/': {
    path: '/about/',
    title: 'About Our Hillside Sanctuary — Kodai Mayura Inn Kodaikanal',
    description:
      'Learn about Kodai Mayura Inn. An independent boutique mountain retreat in Kodaikanal created for quiet luxury, slow living, and restorative family stays.',
    canonicalUrl: `${SITE_URL}/about/`,
    ogTitle: 'About Kodai Mayura Inn — Quiet Hillside Luxury in Kodaikanal',
    ogDescription:
      'Perched in the tranquil hills of Kodaikanal, Kodai Mayura Inn merges raw stone foundations, warm timber detailing, and unhurried natural tranquility.',
    ogImage: `${SITE_URL}/assets/kodai/exterior.png`,
    ogImageAlt: 'Kodai Mayura Inn Exterior Architecture',
    h1: 'About Kodai Mayura Inn — Quiet Luxury in the Hills',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `${SITE_URL}/about/#page`,
          url: `${SITE_URL}/about/`,
          name: 'About Kodai Mayura Inn',
          description:
            'The founding vision, design philosophy, and boutique hospitality experience of Kodai Mayura Inn in Kodaikanal, Tamil Nadu.',
          mainEntity: { '@id': `${SITE_URL}/#hotel` },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about/` },
          ],
        },
      ],
    },
  },
  '/location/': {
    path: '/location/',
    title: 'Location, Map & Directions — Kodai Mayura Inn Kodaikanal',
    description:
      'Find Kodai Mayura Inn at coordinates 10.2446242, 77.49171 in Kodaikanal. Verified driving directions and distances to Kodaikanal Lake, Pillar Rocks, and Coaker\'s Walk.',
    canonicalUrl: `${SITE_URL}/location/`,
    ogTitle: 'Location & Nearby Attractions — Kodai Mayura Inn',
    ogDescription:
      'Tucked into the cool, elevated heights of Kodaikanal while remaining moments away from iconic sights and misty forest trails.',
    ogImage: `${SITE_URL}/assets/attractions/lake.png`,
    ogImageAlt: 'Kodaikanal Lake near Kodai Mayura Inn',
    h1: 'Location, Directions & Nearby Sights — Kodai Mayura Inn',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Place',
          '@id': `${SITE_URL}/location/#place`,
          name: 'Kodai Mayura Inn Location',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 10.2446242,
            longitude: 77.49171,
          },
          hasMap: 'https://www.google.com/maps/search/?api=1&query=10.2446242,77.49171',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kodaikanal',
            addressRegion: 'Tamil Nadu',
            postalCode: '624101',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Location & Directions', item: `${SITE_URL}/location/` },
          ],
        },
      ],
    },
  },
  '/gallery/': {
    path: '/gallery/',
    title: 'Photo Gallery — Kodai Mayura Inn Kodaikanal',
    description:
      'View photography of Kodai Mayura Inn: luxury suite interiors, private mountain view balconies, living halls, highland architecture, and nearby nature.',
    canonicalUrl: `${SITE_URL}/gallery/`,
    ogTitle: 'Photo Gallery — Kodai Mayura Inn Kodaikanal',
    ogDescription:
      'Explore high-resolution photographs of our accommodations, panoramic verandas, and surrounding hill station landscapes.',
    ogImage: `${SITE_URL}/assets/kodai/3%20Bedroom%20with%20hall.png`,
    ogImageAlt: 'Kodai Mayura Inn 3 Bedroom Residence Living Hall',
    h1: 'Photo Gallery — Kodai Mayura Inn',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ImageGallery',
          name: 'Kodai Mayura Inn Photo Showcase',
          url: `${SITE_URL}/gallery/`,
          description: 'Curated architectural and interior photography of Kodai Mayura Inn in Kodaikanal.',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${SITE_URL}/gallery/` },
          ],
        },
      ],
    },
  },
  '/kodaikanal-travel-guide/': {
    path: '/kodaikanal-travel-guide/',
    title: 'Kodaikanal Travel Guide — Sights, Weather & Travel Tips',
    description:
      'Curated travel guide for Kodaikanal, Tamil Nadu. Top attractions (Lake, Coaker\'s Walk, Pillar Rocks), best months to visit, packing tips, and local secrets.',
    canonicalUrl: `${SITE_URL}/kodaikanal-travel-guide/`,
    ogTitle: 'Kodaikanal Travel Guide — Sights, Weather & Tips | Kodai Mayura Inn',
    ogDescription:
      'Discover the Princess of Hill Stations. Comprehensive travel guide covering weather, must-see viewpoints, family itineraries, and local nature.',
    ogImage: `${SITE_URL}/assets/attractions/pillar%20rock.png`,
    ogImageAlt: 'Pillar Rocks in Kodaikanal',
    h1: 'The Essential Kodaikanal Travel Guide',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: 'The Essential Kodaikanal Travel Guide — Sights, Weather & Tips',
          description:
            'A curated destination guide to visiting Kodaikanal, featuring key attractions, weather advice, travel tips, and accommodation recommendations.',
          image: `${SITE_URL}/assets/attractions/pillar%20rock.png`,
          author: {
            '@type': 'Organization',
            name: 'Kodai Mayura Inn Concierge',
            url: `${SITE_URL}/`,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Kodai Mayura Inn',
            url: `${SITE_URL}/`,
          },
          mainEntityOfPage: `${SITE_URL}/kodaikanal-travel-guide/`,
          datePublished: '2026-11-18',
          dateModified: '2026-11-18',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Kodaikanal Travel Guide', item: `${SITE_URL}/kodaikanal-travel-guide/` },
          ],
        },
      ],
    },
  },
  '/contact/': {
    path: '/contact/',
    title: 'Contact & Reservations — Kodai Mayura Inn Kodaikanal',
    description:
      'Contact Kodai Mayura Inn for direct bookings and suite enquiries. Call +91 93857 93701 or message our direct concierge for personalized assistance.',
    canonicalUrl: `${SITE_URL}/contact/`,
    ogTitle: 'Contact & Direct Reservations — Kodai Mayura Inn',
    ogDescription:
      'Connect with our hillside concierge. Direct booking support, phone calls, WhatsApp inquiries, and check-in assistance.',
    ogImage: `${SITE_URL}/assets/kodai/exterior.png`,
    ogImageAlt: 'Kodai Mayura Inn Concierge and Reception',
    h1: 'Contact & Direct Reservations — Kodai Mayura Inn',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          '@id': `${SITE_URL}/contact/#page`,
          url: `${SITE_URL}/contact/`,
          name: 'Contact Kodai Mayura Inn',
          description: 'Official direct contact, reservation assistance, and concierge details for Kodai Mayura Inn.',
          mainEntity: {
            '@type': 'ContactPoint',
            telephone: '+919385793701',
            contactType: 'reservations',
            availableLanguage: ['English', 'Tamil', 'Hindi'],
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Contact & Reservations', item: `${SITE_URL}/contact/` },
          ],
        },
      ],
    },
  },
};
