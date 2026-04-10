/**
 * Maps each filter tag (from project frontmatter) to a category for the projects page.
 * Tags not listed here appear under "Other".
 */
const TAG_CATEGORY: Record<string, string> = {
  // Web & platforms
  web: 'web-platforms',
  nextjs: 'web-platforms',
  react: 'web-platforms',
  typescript: 'web-platforms',
  tailwind: 'web-platforms',
  flutter: 'web-platforms',
  supabase: 'web-platforms',
  marketing: 'web-platforms',
  mdx: 'web-platforms',
  contentlayer: 'web-platforms',
  'framer-motion': 'web-platforms',
  vercel: 'web-platforms',

  // Games & graphics
  vr: 'games-graphics',
  unity: 'games-graphics',
  rimworld: 'games-graphics',
  csharp: 'games-graphics',
  modding: 'games-graphics',
  'game-development': 'games-graphics',
  opengl: 'games-graphics',
  glut: 'games-graphics',
  glsl: 'games-graphics',
  'computer-graphics': 'games-graphics',
  '3d-modeling': 'games-graphics',
  cpp: 'games-graphics',

  // Embedded & IoT
  'embedded-systems': 'embedded-iot',
  fpga: 'embedded-iot',
  verilog: 'embedded-iot',
  c: 'embedded-iot',
  'hardware-design': 'embedded-iot',
  'real-time-systems': 'embedded-iot',
  'raspberry-pi': 'embedded-iot',
  iot: 'embedded-iot',

  // AI, ML & learning
  ai: 'ai-learning',
  ml: 'ai-learning',
  accessibility: 'ai-learning',
  education: 'ai-learning',
  neurodivergence: 'ai-learning',

  // Media & tooling
  video: 'media-tools',
  'post-production': 'media-tools',
  ffmpeg: 'media-tools',
  workflow: 'media-tools',
}

const CATEGORY_ORDER = [
  'web-platforms',
  'games-graphics',
  'embedded-iot',
  'ai-learning',
  'media-tools',
  'other',
] as const

const CATEGORY_LABELS: Record<(typeof CATEGORY_ORDER)[number], string> = {
  'web-platforms': 'Web & platforms',
  'games-graphics': 'Games & graphics',
  'embedded-iot': 'Embedded & IoT',
  'ai-learning': 'AI, ML & learning',
  'media-tools': 'Media & tooling',
  other: 'Other',
}

export function groupFilterTags(tags: string[]): {
  id: string
  label: string
  tags: string[]
}[] {
  const buckets = new Map<string, string[]>()
  for (const id of CATEGORY_ORDER) {
    buckets.set(id, [])
  }

  for (const tag of tags) {
    const category = TAG_CATEGORY[tag] ?? 'other'
    const list = buckets.get(category) ?? buckets.get('other')!
    list.push(tag)
  }

  return CATEGORY_ORDER.map((id) => ({
    id,
    label: CATEGORY_LABELS[id],
    tags: (buckets.get(id) ?? []).sort((a, b) => a.localeCompare(b)),
  })).filter((group) => group.tags.length > 0)
}
