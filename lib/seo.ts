import type { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}

const siteConfig = {
  name: 'Daniel',
  title: 'Daniel - Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies. Building beautiful, performant, and accessible web experiences.',
  url: 'https://danielog.dev',
  ogImage: '/og.jpg',
  links: {
    twitter: 'https://twitter.com/danielog',
    github: 'https://github.com/danielog',
    linkedin: 'https://linkedin.com/in/danielog',
  },
}

export function createMetadata({
  title,
  description = siteConfig.description,
  path = '',
  image = siteConfig.ogImage,
  type = 'website',
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const url = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@danielog',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function createProjectMetadata(project: {
  title: string
  summary: string
  slug: string
  heroImage?: string
}): Metadata {
  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.heroImage || siteConfig.ogImage,
    type: 'article',
  })
}

export { siteConfig }
