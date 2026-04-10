import Link from 'next/link'
import Image from 'next/image'
import { Section } from '@/components/section'
import { ProjectCard } from '@/components/project-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Mail, FileText } from 'lucide-react'
import type { Project } from '@/lib/types'

export interface HomeLayoutProps {
  /** Main hero title (e.g. "Hi, I'm Daniel") */
  title: string
  /** Optional part of title to highlight with accent color (e.g. "Daniel") */
  titleAccent?: string
  /** Shown in the About section above the resume button (e.g. a quote or tagline) */
  subtitle?: string
  /** Path to resume PDF for "View Resume" link. Omitted if not provided. */
  resumePath?: string
  /** Projects to show in the featured section */
  projects: Project[]
}

export function HomeLayout({
  title,
  titleAccent,
  subtitle,
  resumePath,
  projects,
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
    <div className="pt-8 sm:pt-10 lg:pt-12 pb-16 lg:pb-24 space-y-24">
      <div className="space-y-12 lg:space-y-16">
        {/* Hero Section */}
        <Section id="hero" className="text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              {renderTitle()}
            </h1>
          </div>
        </Section>

        {/* About Section */}
        <Section id="about">
          <div className="grid gap-6 lg:gap-8 items-start lg:grid-cols-[minmax(0,24rem)_1fr] max-w-6xl mx-auto">
            <figure className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-start">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Daniel Andre Grijalva"
                  width={464}
                  height={600}
                  className="w-full h-auto"
                  sizes="(min-width: 1024px) 384px, 100vw"
                />
              </div>
              <figcaption className="mt-3 text-center lg:text-left text-sm italic text-muted-foreground">
                Daniel Andre Grijalva
              </figcaption>
            </figure>
            <div className="min-w-0 max-w-3xl lg:max-w-none text-left">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">About me</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  B.S. Software Engineering student at Grand Canyon University (Expected Apr 2026)
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m a software engineer with a strong foundation in computer science who enjoys turning ideas into reliable, useful systems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Technology has been part of my life for as long as I can remember. Video games were what first made me wonder how things really worked under the hood. At the time, it felt like magic. Today, with enough time and focus, I get to shape that same sense of possibility in a concrete way: building software that helps people and leaves the world a little better than I found it.
                </p>
              </div>
              {subtitle && (
                <p className="text-xl text-muted-foreground mt-10 pt-8 mb-6 leading-relaxed">
                  {subtitle}
                </p>
              )}
              {resumePath && (
                <div className={subtitle ? '' : 'mt-10 pt-8'}>
                  <Button asChild variant="outline" size="lg">
                    <Link href={resumePath}>
                      <FileText size={20} className="mr-2" />
                      View Resume
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Section>
      </div>

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

      {/* Featured Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Let's Work Together"
        className="text-center"
      >
        <div className="min-h-[min(75dvh,52rem)] flex flex-col justify-center items-center px-2">
          <div className="max-w-2xl mx-auto text-center w-full">
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 sm:mb-12 leading-relaxed">
              I&apos;m always interested in new opportunities and exciting projects.
              Let&apos;s discuss how we can work together to bring your ideas to life.
            </p>
            <Button asChild size="lg" className="text-base px-8 py-6 h-auto">
              <Link href="/contact#contact-form">
                <Mail size={20} className="mr-2" />
                Send me an email
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
