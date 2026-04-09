import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-24 text-center space-y-6">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="text-3xl font-bold text-foreground tracking-tight">
        Page not found
      </h1>
      <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 focus-ring"
      >
        Back to home
      </Link>
    </div>
  )
}
