import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  useTransform,
} from 'motion/react';

interface AnimationLoaderProps {
  brandName?: string;
  duration?: number;
  textColor?: string;
  background?: string;
  onComplete?: () => void;
}

const CRITICAL_IMAGES = [
  '/assets/text.png',
  '/assets/kodai/exterior.png',
  '/assets/kodai/single bedroom.jpeg',
  '/assets/kodai/2 Bedroom with Hall.png',
  '/assets/kodai/3 Bedroom with hall.png',
  '/assets/attractions/lake.png',
];

const CRITICAL_VIDEOS = ['/assets/kodai/hero.mp4'];

/**
 * Editorial Animation Loader that synchronizes with the actual loading
 * of all page content (images, hero video, fonts, and window load event).
 */
export const AnimationLoader: React.FC<AnimationLoaderProps> = ({
  brandName = 'KODAI MAYURA INN',
  duration = 2.0,
  textColor = '#171614',
  background = '#F9F8F6',
  onComplete,
}) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 32,
    stiffness: 90,
  });
  const progressRatio = useTransform(springValue, [0, 100], [0, 1]);

  useMotionValueEvent(springValue, 'change', (latest) => {
    const val = Math.min(100, Math.round(latest));
    setDisplayCount(val);
  });

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let isCancelled = false;
    let loadedItems = 0;
    const totalItems =
      CRITICAL_IMAGES.length +
      CRITICAL_VIDEOS.length +
      1 + // document / window load
      1; // fonts ready

    const startTime = Date.now();
    const minDurationMs = duration * 1000;

    const updateProgress = () => {
      if (isCancelled) return;
      const rawPercent = Math.round((loadedItems / totalItems) * 100);
      motionValue.set(Math.min(95, rawPercent));
    };

    const markItemLoaded = () => {
      loadedItems += 1;
      updateProgress();
      if (loadedItems >= totalItems) {
        finishLoading();
      }
    };

    let exitTimeout: ReturnType<typeof setTimeout> | null = null;
    let finishTimeout: ReturnType<typeof setTimeout> | null = null;
    let safetyTimeout: ReturnType<typeof setTimeout> | null = null;
    let hasFinished = false;

    const finishLoading = () => {
      if (hasFinished) return;
      hasFinished = true;

      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minDurationMs - elapsed);

      setTimeout(() => {
        if (isCancelled) return;
        // Reach 100%
        motionValue.set(100);

        // Small pause at 100% for user satisfaction before slide up
        exitTimeout = setTimeout(() => {
          if (isCancelled) return;
          setIsExiting(true);

          finishTimeout = setTimeout(() => {
            if (isCancelled) return;
            setIsFinished(true);
            if (onCompleteRef.current) {
              onCompleteRef.current();
            }
          }, 850);
        }, 300);
      }, remainingTime);
    };

    // 1. Preload critical images
    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.onload = markItemLoaded;
      img.onerror = markItemLoaded;
      img.src = src;
    });

    // 2. Preload/buffer critical hero video
    CRITICAL_VIDEOS.forEach((src) => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.muted = true;

      const handleVideoReady = () => {
        video.removeEventListener('loadeddata', handleVideoReady);
        video.removeEventListener('error', handleVideoReady);
        markItemLoaded();
      };

      video.addEventListener('loadeddata', handleVideoReady);
      video.addEventListener('error', handleVideoReady);
      video.src = src;
      video.load();
    });

    // 3. Fonts ready check
    if ('fonts' in document) {
      document.fonts.ready
        .then(() => markItemLoaded())
        .catch(() => markItemLoaded());
    } else {
      markItemLoaded();
    }

    // 4. Window / DOM complete check
    if (document.readyState === 'complete') {
      markItemLoaded();
    } else {
      const handleWindowLoad = () => {
        window.removeEventListener('load', handleWindowLoad);
        markItemLoaded();
      };
      window.addEventListener('load', handleWindowLoad);
    }

    // Safety fallback: Never keep the user waiting more than 6.5s even if network stalls
    safetyTimeout = setTimeout(() => {
      if (!hasFinished) {
        finishLoading();
      }
    }, 6500);

    return () => {
      isCancelled = true;
      if (exitTimeout) clearTimeout(exitTimeout);
      if (finishTimeout) clearTimeout(finishTimeout);
      if (safetyTimeout) clearTimeout(safetyTimeout);
    };
  }, [duration, motionValue]);

  if (isFinished) return null;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="framer-animation-loader"
          initial={{ y: '0%' }}
          animate={
            isExiting
              ? {
                  y: '-100%',
                  borderBottomLeftRadius: '35vw',
                  borderBottomRightRadius: '35vw',
                }
              : {
                  y: '0%',
                  borderBottomLeftRadius: '0vw',
                  borderBottomRightRadius: '0vw',
                }
          }
          transition={{
            duration: 0.85,
            ease: [0.77, 0.02, 0.24, 1.02],
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden pointer-events-auto select-none will-change-transform shadow-2xl"
          style={{
            backgroundColor: background,
            color: textColor,
          }}
        >
          {/* Top Block: Brand Name with Character Appear Effect */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center overflow-hidden">
              <span className="font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.16em] font-medium flex">
                {brandName.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.6,
                      delay: 0.08 + index * 0.035,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-courier text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#828578]"
            >
              HILLSIDE RESIDENCE
            </motion.div>
          </div>

          {/* Middle Block: Horizontal Progress Line */}
          <div className="w-full my-auto py-10">
            <div className="w-full h-[1.5px] bg-black/10 overflow-hidden relative">
              <motion.div
                style={{
                  transformOrigin: '0% 50%',
                  scaleX: progressRatio,
                }}
                className="absolute inset-0 bg-[#171614]"
              />
            </div>
          </div>

          {/* Bottom Block: Huge Counter */}
          <div className="flex items-baseline justify-end w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-baseline font-display font-light leading-none tracking-tight"
              style={{
                fontSize: 'clamp(5rem, 18vw, 20rem)',
                lineHeight: 0.78,
                color: textColor,
              }}
            >
              <span className="tabular-nums font-light">{displayCount}</span>
              <span
                className="font-light ml-1"
                style={{
                  fontSize: '0.38em',
                  color: textColor,
                  opacity: 0.75,
                }}
              >
                %
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
