import React, { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from 'motion/react';

interface AnimationLoaderProps {
  brandName?: string;
  duration?: number;
  textColor?: string;
  background?: string;
  onComplete?: () => void;
}

/**
 * High-performance, exact implementation of the Framer Animation Loader
 * (https://framer.com/m/Animation-loader-eHagKV.js@ijRh61gfd3rmanud1uxr)
 *
 * Features:
 * - Staggered letter reveal with blur & drift for the brand title
 * - Smooth cubic spring counter counting from 0% to 100%
 * - Minimalist horizontal expansion progress line
 * - Fluid curved mask slide-up reveal exit transition
 */
export const AnimationLoader: React.FC<AnimationLoaderProps> = ({
  brandName = 'KODAI MAYURA INN',
  duration = 2.4,
  textColor = '#171614',
  background = '#F9F8F6',
  onComplete,
}) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useMotionValueEvent(springValue, 'change', (latest) => {
    const val = Math.min(100, Math.round(latest));
    setDisplayCount(val);
  });

  useEffect(() => {
    // Start counting to 100
    motionValue.set(100);

    // When the counter reaches 100, trigger the exit transition
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, duration * 1000 + 150);

    // After exit animation completes, unmount and call onComplete
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, duration * 1000 + 1050);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [duration, motionValue, onComplete]);

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
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ transformOrigin: '0% 50%' }}
                transition={{
                  duration: duration,
                  ease: [0.12, 0.23, 0.5, 1],
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
