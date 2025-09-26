import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { cn } from './utils'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: ({ src, alt, ...props }) => (
      <div className="my-6">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={600}
          className="rounded-lg shadow-sm w-full h-auto"
          {...props}
        />
        {alt && (
          <p className="text-sm text-muted-foreground mt-2 text-center">
            {alt}
          </p>
        )}
      </div>
    ),
    a: ({ href, children, ...props }) => (
      <a
        href={href}
        className="text-accent hover:text-accent/80 underline underline-offset-4 transition-colors duration-200"
        {...props}
      >
        {children}
      </a>
    ),
    code: ({ className, children, ...props }) => (
      <code
        className={cn(
          'bg-muted text-foreground px-2 py-1 rounded-md text-sm font-mono',
          className
        )}
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="bg-muted rounded-lg p-4 overflow-x-auto my-6"
        {...props}
      >
        {children}
      </pre>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-accent pl-6 italic text-muted-foreground my-6"
        {...props}
      >
        {children}
      </blockquote>
    ),
    h1: ({ children, ...props }) => (
      <h1
        className="text-3xl lg:text-4xl font-semibold text-foreground mt-8 mb-4 leading-tight"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="text-2xl lg:text-3xl font-semibold text-foreground mt-8 mb-4 leading-tight"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="text-xl lg:text-2xl font-semibold text-foreground mt-6 mb-3 leading-tight"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="text-lg lg:text-xl font-semibold text-foreground mt-6 mb-3 leading-tight"
        {...props}
      >
        {children}
      </h4>
    ),
    p: ({ children, ...props }) => (
      <p
        className="mb-6 text-muted-foreground leading-relaxed"
        {...props}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="mb-6 pl-6 space-y-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="mb-6 pl-6 space-y-2" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="text-muted-foreground" {...props}>
        {children}
      </li>
    ),
    hr: ({ ...props }) => (
      <hr className="border-border my-8" {...props} />
    ),
    ...components,
  }
}

// Custom MDX components
export function Callout({
  children,
  type = 'info',
  ...props
}: {
  children: React.ReactNode
  type?: 'info' | 'warning' | 'error'
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'bg-muted border border-border rounded-lg p-4 my-6',
        type === 'info' && 'border-accent bg-accent/5',
        type === 'warning' && 'border-yellow-500 bg-yellow-500/5',
        type === 'error' && 'border-red-500 bg-red-500/5'
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function ImageWithCaption({
  src,
  alt,
  caption,
  ...props
}: {
  src: string
  alt: string
  caption?: string
} & React.ComponentProps<typeof Image>) {
  return (
    <div className="my-6">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="rounded-lg shadow-sm w-full h-auto"
        {...props}
      />
      {caption && (
        <p className="text-sm text-muted-foreground mt-2 text-center">
          {caption}
        </p>
      )}
    </div>
  )
}
