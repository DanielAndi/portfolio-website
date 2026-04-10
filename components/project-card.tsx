'use client'

import { useCallback, useState, type MouseEvent } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AnimatedSlideImage,
  type SlideDirection,
} from '@/components/animated-slide-image'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  getProjectHeroSlideEntries,
  mediaIsSvg,
  mediaNeedsUnoptimized,
} from '@/lib/project-media'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const slides = getProjectHeroSlideEntries(project)
  const [slideIndex, setSlideIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<SlideDirection>(1)
  const current = slides[slideIndex] ?? slides[0]
  const currentSrc = current?.src ?? project.heroImage
  const currentCaption = current?.caption ?? ''
  const slideIsSvg = mediaIsSvg(currentSrc)
  const slideUnoptimized = mediaNeedsUnoptimized(currentSrc)
  const hasMultipleSlides = slides.length > 1

  const goSlide = useCallback(
    (delta: number) => (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setSlideDirection(delta > 0 ? 1 : -1)
      setSlideIndex((i) => (i + delta + slides.length) % slides.length)
    },
    [slides.length]
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        if (hasMultipleSlides) {
          setSlideDirection(1)
          setSlideIndex(0)
        }
      }}
    >
      <div className="card overflow-hidden transition-all duration-300 hover:shadow-lg">
        {/* Image — link fills frame; arrows sit above for gallery projects */}
        <div className="relative aspect-video overflow-hidden bg-muted/40 group/card-img">
          <Link
            href={project.url}
            className="absolute inset-0 z-0 block"
            aria-label={`View project: ${project.title}`}
          >
            <AnimatedSlideImage
              src={currentSrc}
              alt={`${project.title} — preview ${slideIndex + 1} of ${slides.length}`}
              direction={slideDirection}
              unoptimized={slideUnoptimized}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              imageClassName={cn(
                slideIsSvg
                  ? 'object-contain p-3 transition-transform duration-300'
                  : 'object-cover transition-transform duration-300',
                !slideIsSvg && isHovered && 'scale-105'
              )}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          {currentCaption.trim().length > 0 && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
              <div
                className={cn(
                  'px-3 py-2 text-xs leading-snug text-white/95',
                  'bg-gradient-to-t from-black/70 via-black/25 to-transparent'
                )}
              >
                <p className="line-clamp-2">{currentCaption}</p>
              </div>
            </div>
          )}

          {hasMultipleSlides && (
            <>
              <button
                type="button"
                onClick={goSlide(-1)}
                aria-label="Previous preview image"
                className={cn(
                  'absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full',
                  'border border-white/25 bg-black/45 text-white shadow-md backdrop-blur-sm',
                  'opacity-90 transition-all duration-200 sm:opacity-0 sm:group-hover:opacity-100',
                  'scale-95 sm:scale-90 sm:group-hover/card-img:scale-125 sm:group-hover/card-img:shadow-lg',
                  'hover:bg-black/60 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                )}
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2.25} aria-hidden />
              </button>
              <button
                type="button"
                onClick={goSlide(1)}
                aria-label="Next preview image"
                className={cn(
                  'absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full',
                  'border border-white/25 bg-black/45 text-white shadow-md backdrop-blur-sm',
                  'opacity-90 transition-all duration-200 sm:opacity-0 sm:group-hover:opacity-100',
                  'scale-95 sm:scale-90 sm:group-hover/card-img:scale-125 sm:group-hover/card-img:shadow-lg',
                  'hover:bg-black/60 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                )}
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2.25} aria-hidden />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <Link href={project.url}>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200 hover:underline">
                {project.title}
              </h3>
            </Link>
            <div className="flex space-x-2 ml-4">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
                  aria-label="View repository"
                >
                  <Github size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
                  aria-label="View live demo"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="text-muted-foreground mb-4 line-clamp-2">
            {project.summary}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.tech.length - 4} more
              </Badge>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
