import Link from 'next/link'
import Image from 'next/image'
import { Section } from '@/components/section'
import { ProjectCard } from '@/components/project-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Mail, FileText } from 'lucide-react'
import type { Project } from '@/lib/types'
import { skillProfiles } from '@/lib/skills'

export interface HomeLayoutProps {
  /** Main hero title (e.g. "Hi, I'm Daniel") */
  title: string
  /** Optional part of title to highlight with accent color (e.g. "Daniel") */
  titleAccent?: string
  /** Hero subtitle (e.g. "Cloud Engineer" or a quote) */
  subtitle?: string
  /** Path to resume PDF for "View Resume" link. Omitted if not provided. */
  resumePath?: string
  /** Projects to show in the featured section */
  projects: Project[]
  /** When set, "View All Projects" links to /projects?skill={id} */
  skillProfileId?: string
}

export function HomeLayout({
  title,
  titleAccent,
  subtitle,
  resumePath,
  projects,
  skillProfileId,
}: HomeLayoutProps) {
  const renderTitle = () => {
    if (titleAccent && title.includes(titleAccent)) {
      const parts = title.split(titleAccent)
      return (
        <>
          {parts[0]}
          <span className="text-accent">{titleAccent}</span>
          {parts.slice(1).join(titleAccent)}
        </>
      )
    }
    return title
  }

  return (
    <div className="py-16 lg:py-24 space-y-24">
      {/* Hero Section */}
      <Section id="hero" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            {renderTitle()}
          </h1>
          {subtitle && (
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          {resumePath && (
            <Button asChild variant="outline" size="lg">
              <Link href={resumePath}>
                <FileText size={20} className="mr-2" />
                View Resume
              </Link>
            </Button>
          )}
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
            <h3 className="text-lg font-semibold text-foreground mb-4">Applied skills</h3>
            <div className="flex flex-wrap gap-2">
              {['OpenGL', 'IoT', 'FPGA', 'Unity', 'C#', 'Concurrency', 'Parallel Programming', 'Agile/Scrum'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Skill profiles (per-role home views) */}
      <Section id="skill-profiles" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillProfiles.map((profile) => (
            <Link
              key={profile.id}
              href={`/${profile.id}`}
              className="card p-5 hover:border-accent/60 transition-colors duration-200 focus-ring"
            >
              <h3 className="text-base font-semibold text-foreground mb-1">
                {profile.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                View skill profile
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link
              href={
                skillProfileId
                  ? `/projects?skill=${skillProfileId}`
                  : '/projects'
              }
            >
              View All Projects
            </Link>
          </Button>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let's Work Together" className="text-center">
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
