'use client'

import { useCallback, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  AnimatedSlideImage,
  type SlideDirection,
} from '@/components/animated-slide-image'
import { cn } from '@/lib/utils'
import type { ProjectHeroSlideEntry } from '@/lib/project-media'
import { mediaIsSvg, mediaNeedsUnoptimized } from '@/lib/project-media'

interface ProjectHeroCarouselProps {
  title: string
  slides: ProjectHeroSlideEntry[]
  className?: string
}

export function ProjectHeroCarousel({
  title,
  slides,
  className,
}: ProjectHeroCarouselProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<SlideDirection>(1)
  const count = slides.length
  const current = slides[index] ?? slides[0]
  const hasMultiple = count > 1
  const currentSrc = current?.src ?? ''
  const currentCaption = current?.caption ?? ''
  const unoptimized = mediaNeedsUnoptimized(currentSrc)
  const allSvg = slides.length > 0 && slides.every((s) => mediaIsSvg(s.src))

  const goNext = useCallback(() => {
    setDirection(1)
    setIndex((i) => (i + 1) % count)
  }, [count])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setIndex((i) => (i - 1 + count) % count)
  }, [count])

  if (!currentSrc) return null

  const alt =
    currentCaption.trim().length > 0
      ? currentCaption
      : `${title} — visual ${index + 1} of ${count}`

  return (
    <div className={cn('space-y-3', className)}>
      <div className="group relative aspect-video rounded-2xl overflow-hidden border border-border bg-muted/40">
        <AnimatedSlideImage
          src={currentSrc}
          alt={alt}
          direction={direction}
          unoptimized={unoptimized}
          sizes="(max-width: 1024px) 100vw, min(896px, 90vw)"
          priority
          imageClassName={
            allSvg
              ? 'object-contain p-4 sm:p-6'
              : 'object-contain p-2 sm:p-4'
          }
        />

        {hasMultiple && (
          <>
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent"
              aria-hidden
            />
            <button
              type="button"
              onClick={goPrev}
              className={cn(
                'absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full',
                'border border-white/25 bg-black/45 text-white shadow-md backdrop-blur-sm',
                'opacity-90 transition-all duration-200',
                'scale-95 sm:scale-90 sm:group-hover:scale-105 sm:shadow-lg',
                'hover:bg-black/60 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              )}
              aria-label={`Previous image (${index + 1} of ${count})`}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              className={cn(
                'absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full',
                'border border-white/25 bg-black/45 text-white shadow-md backdrop-blur-sm',
                'opacity-90 transition-all duration-200',
                'scale-95 sm:scale-90 sm:group-hover:scale-105 sm:shadow-lg',
                'hover:bg-black/60 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              )}
              aria-label={`Next image (${index + 1} of ${count})`}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </>
        )}
      </div>

      {currentCaption.trim().length > 0 && (
        <AnimatedSlideCaption caption={currentCaption} direction={direction} />
      )}
    </div>
  )
}

function AnimatedSlideCaption({
  caption,
  direction,
}: {
  caption: string
  direction: SlideDirection
}) {
  const reduceMotion = useReducedMotion()
  const duration = reduceMotion ? 0 : 0.42

  const variants = {
    enter: (dir: SlideDirection) =>
      reduceMotion
        ? { opacity: 0 }
        : { x: dir === 1 ? 24 : -24, opacity: 0 },
    center: reduceMotion ? { opacity: 1 } : { x: 0, opacity: 1 },
    exit: (dir: SlideDirection) =>
      reduceMotion
        ? { opacity: 0 }
        : { x: dir === 1 ? -24 : 24, opacity: 0 },
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-muted/25 px-4 py-3">
      <AnimatePresence mode="sync" initial={false}>
        <motion.p
          key={caption}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm text-muted-foreground leading-relaxed"
        >
          {caption}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
