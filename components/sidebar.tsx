'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Github, Linkedin, Mail, FileText, Menu, X, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '#hero', fallback: '/', icon: Home },
  { name: 'About', href: '#about', fallback: '/#about' },
  { name: 'Skills', href: '#skills', fallback: '/#skills' },
  { name: 'Projects', href: '#projects', fallback: '/#projects' },
  { name: 'Contact', href: '#contact', fallback: '/#contact' },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-background border border-border focus-ring"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          'fixed lg:sticky top-0 left-0 h-screen w-80 bg-background border-r border-border z-50 transform transition-transform duration-300 lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Daniel
            </h1>
            <p className="text-muted-foreground mb-1">Full Stack Developer</p>
            <p className="text-sm text-muted-foreground">Based in Phoenix, AZ</p>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  {pathname?.startsWith('/projects') || pathname === '/contact' ? (
                    item.fallback ? (
                      <Link
                        href={item.name === 'Home' ? '/' : item.fallback}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200 focus-ring"
                      >
                        {item.icon && <item.icon size={18} />}
                        {item.name}
                      </Link>
                    ) : null
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200 focus-ring"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/DanielAndi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200 focus-ring"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200 focus-ring"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <Link
                href="/contact#contact-form"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200 focus-ring"
                aria-label="Contact"
              >
                <Mail size={20} />
              </Link>
            </div>

            <Button asChild className="w-full">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={16} className="mr-2" />
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}