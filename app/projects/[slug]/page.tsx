import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { BuildSheet } from '@/components/build-sheet'
import { ProjectContent } from '@/components/project-content'
import { ProjectHeroCarousel } from '@/components/project-hero-carousel'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getProjectHeroSlideEntries } from '@/lib/project-media'
import { createProjectMetadata } from '@/lib/seo'
import { getProjectBySlug, getNextProject, getPreviousProject } from '@/lib/projects'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  // This will be populated by contentlayer
  return []
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return createProjectMetadata(project)
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    notFound()
  }

  const nextProject = getNextProject(slug)
  const previousProject = getPreviousProject(slug)
  const heroSlides = getProjectHeroSlideEntries(project)

  return (
    <article className="py-16 lg:py-24">
      {/* Header */}
      <div className="mb-12 lg:mb-16">
        <Link
          href="/projects"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>

        <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 gap-y-2 mb-5">
          <Badge
            variant={
              project.status.toLowerCase() === 'completed'
                ? 'default'
                : project.status.toLowerCase() === 'in progress'
                  ? 'secondary'
                  : 'outline'
            }
          >
            {project.status}
          </Badge>
          <span className="text-sm text-muted-foreground tabular-nums">
            {project.dates}
          </span>
        </div>

        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-10">
          {project.summary}
        </p>

        {/* Hero media (optional multi-slide for GIFs / extra shots) */}
        <div className="mt-10 pt-10 border-t border-border">
          <ProjectHeroCarousel title={project.title} slides={heroSlides} />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-14">
        {/* Article Content */}
        <div className="rounded-2xl border border-border bg-muted/25 p-6 sm:p-8 lg:p-10 min-w-0">
          <ProjectContent content={project.body.code} />
        </div>

        {/* Build Sheet Sidebar */}
        <div className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-2rem)] lg:overflow-auto lg:pr-1">
          <BuildSheet project={project} />
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          {previousProject && (
            <Button asChild variant="outline" className="flex-1">
              <Link href={previousProject.url}>
                <ArrowLeft size={16} className="mr-2" />
                {previousProject.title}
              </Link>
            </Button>
          )}
          
          {nextProject && (
            <Button asChild variant="outline" className="flex-1">
              <Link href={nextProject.url}>
                {nextProject.title}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
