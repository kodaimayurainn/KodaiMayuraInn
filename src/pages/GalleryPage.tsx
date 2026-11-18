import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, Sparkles } from 'lucide-react';
import { Link } from '../router/Router';

interface GalleryItem {
  id: string;
  title: string;
  category: 'suites' | 'grounds' | 'nature';
  image: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-exterior',
    title: 'Highland Facade & Mountain Setting',
    category: 'grounds',
    image: '/assets/kodai/exterior.png',
    caption: 'Kodai Mayura Inn exterior architecture set against misty green hills.',
  },
  {
    id: 'g-2bed',
    title: '2 Bedroom with Hall Suite',
    category: 'suites',
    image: '/assets/kodai/2 Bedroom with Hall.png',
    caption: 'Spacious master bedroom with bespoke artisanal oak furnishings and scenic balcony.',
  },
  {
    id: 'g-3bed',
    title: '3 Bedroom with Hall Living Space',
    category: 'suites',
    image: '/assets/kodai/3 Bedroom with hall.png',
    caption: 'Sunlit living hall in our signature family residence with private mountain veranda.',
  },
  {
    id: 'g-single',
    title: 'Single Bedroom Suite',
    category: 'suites',
    image: '/assets/kodai/single bedroom.jpeg',
    caption: 'Cozy private retreat featuring king-size bedding and luxury en-suite bathroom.',
  },
  {
    id: 'g-lake',
    title: 'Kodaikanal Lake',
    category: 'nature',
    image: '/assets/attractions/lake.png',
    caption: 'The iconic star-shaped mountain lake located just 1.8 km from Kodai Mayura Inn.',
  },
  {
    id: 'g-pillar',
    title: 'Pillar Rocks Vista',
    category: 'nature',
    image: '/assets/attractions/pillar rock.png',
    caption: 'Three 400ft granite boulders overlooking deep Shola valleys and rolling clouds.',
  },
  {
    id: 'g-pine',
    title: 'Pine Forest Trail',
    category: 'nature',
    image: '/assets/attractions/pine forest.png',
    caption: 'Tall aromatic pine trees and soft needle-covered walking trails.',
  },
  {
    id: 'g-coakers',
    title: "Coaker's Walk Promenade",
    category: 'nature',
    image: '/assets/attractions/coakers walk.png',
    caption: 'Historic mountain walkway hovering high above the cloud line.',
  },
  {
    id: 'g-guna',
    title: 'Guna Caves & Shola Roots',
    category: 'nature',
    image: '/assets/attractions/gunacave.png',
    caption: 'Enigmatic rock chasms and sprawling exposed roots of ancient highland trees.',
  },
];

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'suites' | 'grounds' | 'nature'>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const displayed = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter);

  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-12 pb-24 text-[#171614]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Header Breadcrumb & Heading */}
        <div className="max-w-[840px] mb-12">
          <div className="flex items-center gap-2 font-courier text-xs uppercase tracking-[0.2em] text-[#828578] mb-3">
            <Link href="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>PHOTO GALLERY</span>
          </div>

          <h1 className="font-display text-[42px] sm:text-[54px] md:text-[62px] leading-[1.05] uppercase tracking-[0.02em] text-[#171614] mb-6">
            PHOTO GALLERY — KODAI MAYURA INN
          </h1>

          <p className="font-courier text-[15px] sm:text-[16px] leading-[1.7] text-[#5C5852]">
            Discover the visual atmosphere of Kodai Mayura Inn. Browse photographs of our luxury suites,
            sunlit living halls, private mountain-view balconies, and the timeless misty landscapes of Kodaikanal.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-[#DCD9D0]">
          {(['all', 'suites', 'grounds', 'nature'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 font-courier text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                filter === tab
                  ? 'bg-[#4A443B] text-white font-bold'
                  : 'bg-[#EFECE6] text-[#5C5852] hover:bg-[#E2DED6] hover:text-[#171614]'
              }`}
            >
              {tab === 'all' ? 'All Photographs' : tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayed.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group bg-[#EFECE6] border border-[#DCD9D0] overflow-hidden rounded-xs cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setActivePhoto(item)}
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-[#2D2924]">
                <img
                  src={item.image}
                  alt={item.title}
                  width="600"
                  height="450"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 bg-white/90 text-[#171614] rounded-full">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="font-courier text-[11px] uppercase tracking-wider text-[#828578] mb-1">
                  {item.category}
                </div>
                <h3 className="font-display text-lg uppercase tracking-wide text-[#171614]">
                  {item.title}
                </h3>
                <p className="mt-1 font-courier text-xs text-[#5C5852] line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-[900px] w-full bg-[#171614] text-white p-4 sm:p-6 rounded-xs relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo"
                className="absolute top-4 right-4 p-2 text-white/80 hover:text-white cursor-pointer z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-[16/10] overflow-hidden bg-black mb-4">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="px-2">
                <div className="font-courier text-xs text-white/60 uppercase tracking-widest mb-1">
                  {activePhoto.category}
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wide mb-1">
                  {activePhoto.title}
                </h3>
                <p className="font-courier text-xs text-white/80">
                  {activePhoto.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
