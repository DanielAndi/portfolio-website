import { Suspense } from 'react'
import { ProjectsPageClient } from '@/components/projects-page-client'
import { createMetadata } from '@/lib/seo'
import { getSkillProfileById } from '@/lib/skills'
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
  skill?: string | null
}

async function ProjectsContent({ skill }: ProjectsContentProps) {
  let projects: Project[] = []
  let tags: string[] = []
  let skillLabel: string | null = null

  try {
    const {
      getAllTags,
      getSortedProjects,
      getProjectsBySkillProfile,
    } = await import('@/lib/projects')

    if (skill && getSkillProfileById(skill)) {
      projects = getProjectsBySkillProfile(skill)
      tags = getTagsFromProjects(projects)
      skillLabel = getSkillProfileById(skill)!.label
    } else {
      projects = getSortedProjects()
      tags = getAllTags()
    }
  } catch {
    // Contentlayer not built yet, use empty arrays
  }

  const title = skillLabel
    ? `${skillLabel} – Projects`
    : 'Projects'
  const description = skillLabel
    ? `Projects in ${skillLabel}.`
    : "A collection of projects I've worked on, from web applications to mobile apps and everything in between. Each project represents a unique challenge and learning opportunity."

  const activeSkillId =
    skill && getSkillProfileById(skill) ? skill : null

  return (
    <div className="py-6 lg:py-8">
      <ProjectsPageClient
        pageTitle={title}
        pageDescription={description}
        projects={projects}
        tags={tags}
        activeSkillId={activeSkillId}
      />
    </div>
  )
}

interface ProjectsPageProps {
  searchParams: Promise<{ skill?: string }>
}

export async function generateMetadata({ searchParams }: ProjectsPageProps) {
  const { skill } = await searchParams
  const profile = skill ? getSkillProfileById(skill) : null
  if (profile) {
    return createMetadata({
      title: `${profile.label} – Projects`,
      description: `Projects in ${profile.label}.`,
      path: `/projects?skill=${profile.id}`,
    })
  }
  return defaultMetadata
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { skill } = await searchParams

  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsContent skill={skill ?? null} />
    </Suspense>
  )
}
