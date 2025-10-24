import Link from 'next/link'
import Image from 'next/image'
import { Section } from '@/components/section'
import { ProjectCard } from '@/components/project-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Mail } from 'lucide-react'
import type { Project } from '@/lib/contentlayer-types'

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
          &quot;Knowledge is power, information is liberating, and education is the premise of progress&quot;
          </p>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              B.S. Software Engineering student at Grand Canyon University (Expected Apr 2026)
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate software engineer with a strong foundation in computer science and a passion for building innovative solutions.
            </p>
          </div>
          <div className="lg:order-first">
            <div className="aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Daniel - Software Engineer"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills & Technologies">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'Git/GitHub', 'AWS', 'Linux/Unix'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS Lambda', 'AWS S3', 'AWS RDS', 'CI/CD', 'Cloud Systems', 'API Design', 'Data Modeling'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Specialized</h3>
            <div className="flex flex-wrap gap-2">
              {['OpenGL', 'IoT', 'FPGA', 'Unity', 'C#', 'Concurrency', 'Parallel Programming', 'Agile/Scrum'].map((skill) => (
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