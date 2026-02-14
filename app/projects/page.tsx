import { Suspense } from 'react'
import { ProjectsPageClient } from '@/components/projects-page-client'
import { createMetadata } from '@/lib/seo'
import { getSpecializationById } from '@/lib/specializations'
import type { Project } from '@/lib/types'

const defaultMetadata = createMetadata({
  title: 'Projects',
  description: 'A collection of my recent projects and case studies.',
  path: '/projects',
})

function getTagsFromProjects(projects: Project[]): string[] {
  return Array.from(
    new Set(
      projects
        .flatMap((p) => p.tags ?? [])
        .map((t) => t.toLowerCase())
    )
  ).sort()
}

interface ProjectsContentProps {
  specialization?: string | null
}

async function ProjectsContent({ specialization }: ProjectsContentProps) {
  let projects: Project[] = []
  let tags: string[] = []
  let specializationLabel: string | null = null

  try {
    const {
      getAllTags,
      getSortedProjects,
      getProjectsBySpecialization,
    } = await import('@/lib/projects')

    if (specialization && getSpecializationById(specialization)) {
      projects = getProjectsBySpecialization(specialization)
      tags = getTagsFromProjects(projects)
      specializationLabel = getSpecializationById(specialization)!.label
    } else {
      projects = getSortedProjects()
      tags = getAllTags()
    }
  } catch {
    // Contentlayer not built yet, use empty arrays
  }

  const title = specializationLabel
    ? `${specializationLabel} – Projects`
    : 'Projects'
  const description = specializationLabel
    ? `Projects in ${specializationLabel}.`
    : "A collection of projects I've worked on, from web applications to mobile apps and everything in between. Each project represents a unique challenge and learning opportunity."

  return (
    <div className="py-16 lg:py-24">
      <div className="mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      </div>

      <ProjectsPageClient projects={projects} tags={tags} />
    </div>
  )
}

interface ProjectsPageProps {
  searchParams: Promise<{ specialization?: string }>
}

export async function generateMetadata({ searchParams }: ProjectsPageProps) {
  const { specialization } = await searchParams
  const spec = specialization ? getSpecializationById(specialization) : null
  if (spec) {
    return createMetadata({
      title: `${spec.label} – Projects`,
      description: `Projects in ${spec.label}.`,
      path: `/projects?specialization=${spec.id}`,
    })
  }
  return defaultMetadata
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { specialization } = await searchParams

  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsContent specialization={specialization ?? null} />
    </Suspense>
  )
}
