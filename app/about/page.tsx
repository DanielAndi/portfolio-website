import { Section } from '@/components/section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'About',
  description: 'Learn more about my background, experience, and passion for development.',
  path: '/about',
})

const timeline = [
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    description: 'Leading development of scalable web applications and mentoring junior developers.',
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    description: 'Built and maintained multiple web applications using React, Node.js, and cloud technologies.',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Created responsive web interfaces and collaborated with design teams to deliver pixel-perfect implementations.',
  },
  {
    year: '2019',
    title: 'Software Developer',
    company: 'Local Tech Firm',
    description: 'Started my journey in web development, learning modern frameworks and best practices.',
  },
]

const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  backend: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Postman'],
  other: ['Leadership', 'Mentoring', 'Agile', 'Scrum', 'Technical Writing'],
}

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24 space-y-24">
      {/* Hero Section */}
      <Section id="hero" className="text-center">
        <div className="max-w-3xl mx-auto">
          <div className="aspect-square max-w-xs mx-auto bg-muted rounded-2xl flex items-center justify-center mb-8">
            <span className="text-6xl text-muted-foreground">👨‍💻</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m a passionate full-stack developer with over 5 years of experience
            building web applications that make a difference. I love solving complex
            problems and turning ideas into reality through code.
          </p>
        </div>
      </Section>

      {/* Background */}
      <Section id="background" title="My Background">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development began with a curiosity about how
              things work. What started as simple HTML pages has evolved into a
              passion for building scalable, performant applications that provide
              real value to users.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of technology to solve real-world problems
              and am always eager to learn new technologies and methodologies.
              When I&apos;m not coding, you can find me exploring new frameworks,
              contributing to open source, or sharing knowledge with the community.
            </p>
          </div>
          <div className="bg-muted rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Years of Experience</span>
                <span className="font-medium">5+</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Projects Completed</span>
                <span className="font-medium">50+</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Technologies</span>
                <span className="font-medium">20+</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Coffee Consumed</span>
                <span className="font-medium">∞</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section id="timeline" title="Career Timeline">
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold">
                  {item.year}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-accent font-medium mb-2">{item.company}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills & Expertise">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section id="connect" title="Let's Connect">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m always interested in new opportunities and exciting projects.
            Whether you have a question, want to collaborate, or just want to
            say hello, I&apos;d love to hear from you.
          </p>
          <Button asChild size="lg">
            <a href="mailto:your.email@example.com">
              <Mail size={20} className="mr-2" />
              Get In Touch
            </a>
          </Button>
        </div>
      </Section>
    </div>
  )
}
