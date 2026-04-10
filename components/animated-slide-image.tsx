'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

const ease = [0.22, 1, 0.36, 1] as const

/** 1 = forward (next): enter from right, exit to left. -1 = back (prev): opposite. */
export type SlideDirection = 1 | -1

interface AnimatedSlideImageProps {
  src: string
  alt: string
  /** Direction of the last navigation; drives slide-in / slide-out sides. */
  direction: SlideDirection
  unoptimized: boolean
  sizes: string
  priority?: boolean
  imageClassName: string
}

export function AnimatedSlideImage({
  src,
  alt,
  direction,
  unoptimized,
  sizes,
  priority,
  imageClassName,
}: AnimatedSlideImageProps) {
  const reduceMotion = useReducedMotion()
  const duration = reduceMotion ? 0 : 0.42

  const variants = {
    enter: (dir: SlideDirection) =>
      reduceMotion
        ? { opacity: 0 }
        : { x: dir === 1 ? '100%' : '-100%', opacity: 0 },
    center: reduceMotion
      ? { opacity: 1 }
      : { x: 0, opacity: 1 },
    exit: (dir: SlideDirection) =>
      reduceMotion
        ? { opacity: 0 }
        : { x: dir === 1 ? '-100%' : '100%', opacity: 0 },
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={src}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration, ease }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized={unoptimized}
            sizes={sizes}
            priority={priority}
            className={imageClassName}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
