import type { Project } from '@/lib/types'

export type ProjectHeroSlideEntry = { src: string; caption: string }

/** Paths that Next/Image should not optimize (SVG, animated GIF/WebP). */
export function mediaNeedsUnoptimized(src: string): boolean {
  const lower = src.split('?')[0]?.toLowerCase() ?? ''
  return (
    lower.endsWith('.svg') ||
    lower.endsWith('.gif') ||
    lower.endsWith('.webp')
  )
}

export function mediaIsSvg(src: string): boolean {
  const lower = src.split('?')[0]?.toLowerCase() ?? ''
  return lower.endsWith('.svg')
}

function isHeroSlideEntry(value: unknown): value is ProjectHeroSlideEntry {
  if (!value || typeof value !== 'object') return false
  const v = value as Record<string, unknown>
  return typeof v.src === 'string' && typeof v.caption === 'string'
}

/** Ordered hero slides with captions; falls back to heroImage + heroGallery with empty captions. */
export function getProjectHeroSlideEntries(project: Project): ProjectHeroSlideEntry[] {
  const fromStructured = (project.heroSlides ?? []).filter(isHeroSlideEntry)
  if (fromStructured.length > 0) return fromStructured

  const extra = project.heroGallery?.filter(Boolean) ?? []
  return [{ src: project.heroImage, caption: '' }, ...extra.map((src) => ({ src, caption: '' }))]
}

/** Ordered slide srcs for the project hero: primary image plus optional gallery. */
export function getProjectHeroSlides(project: Project): string[] {
  return getProjectHeroSlideEntries(project).map((s) => s.src)
}
