import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug of the project',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'A brief summary of the project',
      required: true,
    },
    role: {
      type: 'string',
      description: 'Your role in the project',
      required: true,
    },
    dates: {
      type: 'string',
      description: 'Project dates',
      required: true,
    },
    tech: {
      type: 'list',
      of: { type: 'string' },
      description: 'Technologies used',
      required: true,
    },
    status: {
      type: 'string',
      description: 'Project status',
      required: true,
    },
    heroImage: {
      type: 'string',
      description: 'Hero image path',
      required: true,
    },
    repoUrl: {
      type: 'string',
      description: 'Repository URL',
      required: false,
    },
    liveUrl: {
      type: 'string',
      description: 'Live demo URL',
      required: false,
    },
    metrics: {
      type: 'json',
      description: 'Project metrics',
      required: false,
    },
    screenshots: {
      type: 'json',
      description: 'Project screenshots',
      required: false,
    },
    featured: {
      type: 'boolean',
      description: 'Whether this project should be featured on the home page',
      required: false,
      default: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Project tags for filtering',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `/projects/${project.slug}`,
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project],
  disableImportAliasWarning: true,
  date: {
    timezone: 'UTC',
  },
})
