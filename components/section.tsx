'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  title?: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`scroll-mt-24 ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {title && (
        <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-8">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  )
}
