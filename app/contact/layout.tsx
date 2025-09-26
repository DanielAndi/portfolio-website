import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Get in touch with me for opportunities, collaborations, or just to say hello.',
  path: '/contact',
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

