import { Suspense } from 'react'
import { ProjectsPageClient } from '@/components/projects-page-client'
import { createMetadata } from '@/lib/seo'
import type { Project } from '@/lib/types'

export const metadata = createMetadata({
  title: 'Projects',
  description: 'A collection of my recent projects and case studies.',
  path: '/projects',
})

function ProjectsContent() {
  // Fallback for development when contentlayer isn&apos;t built yet
  let projects: Project[] = []
  let tags: string[] = []
  
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { getAllTags, getSortedProjects } = require('@/lib/projects')
    projects = getSortedProjects()
    tags = getAllTags()
  } catch {
    // Contentlayer not built yet, use empty arrays
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of projects I&apos;ve worked on, from web applications to
          mobile apps and everything in between. Each project represents a
          unique challenge and learning opportunity.
        </p>
      </div>

      <ProjectsPageClient 
        projects={projects} 
        tags={tags} 
      />
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  )
}
