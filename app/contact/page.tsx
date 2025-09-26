'use client'

import { useState } from 'react'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'
import { config } from '@/lib/config'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:${config.contact.email}?subject=${subject}&body=${body}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Reset form and show success message
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="py-16 lg:py-24 space-y-24">
      {/* Hero Section */}
      <Section id="hero" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Let&apos;s Work Together
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m always interested in new opportunities and exciting projects.
            Whether you have a question, want to collaborate, or just want to
            say hello, I&apos;d love to hear from you.
          </p>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section id="contact-form" title="Get In Touch">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-200 resize-none"
                />
              </div>
              
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <a
                  href={`mailto:${config.contact.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Mail size={20} />
                  {config.contact.email}
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Phone size={20} />
                  +1 (234) 567-8900
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={20} />
                  San Francisco, CA
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/danielog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/danielog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="card p-6 bg-accent/5 border-accent/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Response Time
              </h3>
              <p className="text-muted-foreground">
                I typically respond to emails within 24 hours. For urgent matters,
                feel free to reach out via LinkedIn or phone.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
