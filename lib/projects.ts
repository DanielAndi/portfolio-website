// Dynamic import to handle contentlayer build issues
import { fallbackProjects } from './projects-fallback'
import type { Project } from './types'

let allProjects: Project[] = []

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const contentlayerTypes = require('./contentlayer-types')
  allProjects = contentlayerTypes.allProjects || []
} catch {
  // Fallback when contentlayer isn't built yet (common on Windows)
  allProjects = fallbackProjects
}

export function getFeaturedProjects(): Project[] {
  return allProjects.filter((project) => project.featured)
}


export function getAllTags(): string[] {
  const tags = allProjects
    .flatMap((project) => project.tags || [])
    .map((tag) => tag.toLowerCase())
  
  return Array.from(new Set(tags)).sort()
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug)
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = allProjects.findIndex((project) => project.slug === currentSlug)
  if (currentIndex === -1 || currentIndex === allProjects.length - 1) return undefined
  return allProjects[currentIndex + 1]
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  const currentIndex = allProjects.findIndex((project) => project.slug === currentSlug)
  if (currentIndex <= 0) return undefined
  return allProjects[currentIndex - 1]
}

export function getSortedProjects(): Project[] {
  return allProjects.sort((a, b) => {
    // Sort by featured first, then by date (newest first)
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    
    return new Date(b.dates).getTime() - new Date(a.dates).getTime()
  })
}

