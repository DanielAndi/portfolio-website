interface ProjectVideoProps {
  title: string
  url: string
  caption?: string
}

/** YouTube video id from a watch, share, or embed URL. */
function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  )
  return match ? match[1] : null
}

export function ProjectVideo({ title, url, caption }: ProjectVideoProps) {
  const id = getYouTubeId(url)
  if (!id) return null

  return (
    <div className="space-y-3">
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-muted/40">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={`${title} — demo video`}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {caption && (
        <p className="rounded-xl border border-border bg-muted/25 px-4 py-3 text-sm text-muted-foreground">
          {caption}
        </p>
      )}
    </div>
  )
}
