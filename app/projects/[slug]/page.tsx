import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { BuildSheet } from '@/components/build-sheet'
import { ProjectContent } from '@/components/project-content'
import { Button } from '@/components/ui/button'
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

  return (
    <article className="py-16 lg:py-24">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/projects"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
        
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {project.title}
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          {project.summary}
        </p>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-[1fr_320px] gap-12">
        {/* Article Content */}
        <ProjectContent content={project.body.code} />

        {/* Build Sheet Sidebar */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
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
