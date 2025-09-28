import Link from 'next/link'
import { Section } from '@/components/section'
import { ProjectCard } from '@/components/project-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Mail } from 'lucide-react'
import type { Project } from '@/lib/types'

export default function Home() {
  // Fallback for development when contentlayer isn&apos;t built yet
  let featuredProjects: Project[] = []
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { getFeaturedProjects } = require('@/lib/projects')
    featuredProjects = getFeaturedProjects()
  } catch {
    // Contentlayer not built yet, use empty array
  }

  return (
    <div className="py-16 lg:py-24 space-y-24">
      {/* Hero Section */}
      <Section id="hero" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Hi, I&apos;m{' '}
            <span className="text-accent">Daniel</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            I&apos;m a full-stack developer passionate about creating beautiful,
            performant, and accessible web experiences. I love building
            applications that make a difference.
          </p>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate full-stack developer with over 5 years of
              experience building web applications. I specialize in modern
              JavaScript frameworks and have a keen eye for design and user
              experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
          <div className="lg:order-first">
            <div className="aspect-square max-w-sm mx-auto bg-muted rounded-2xl flex items-center justify-center">
              <span className="text-4xl text-muted-foreground">👨‍💻</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills & Technologies">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'Docker', 'Figma', 'Vercel', 'Postman'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let's Work Together">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m always interested in new opportunities and exciting projects.
            Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>
          <Button asChild size="lg">
            <Link href="/contact#contact-form">
              <Mail size={20} className="mr-2" />
              Send me an email
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  )
}