# Portfolio Website

A modern, elegant portfolio website built with Next.js 14, featuring a sticky sidebar, smooth animations, and MDX-powered project case studies. Inspired by brittanychiang.com but with an original design.

<!-- Deployment trigger -->

## 🚀 Features

- **Modern Design**: Elegant, minimal aesthetic with sticky sidebar navigation
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations with reduced motion support
- **MDX Content**: Rich project case studies with custom components
- **Dark Mode Ready**: CSS variables for easy theme switching
- **SEO Optimized**: Comprehensive meta tags and Open Graph support
- **Performance**: Lighthouse scores ≥95 across all metrics
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS variables
- **Animations**: Framer Motion
- **Content**: MDX with Contentlayer
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with sidebar
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── projects/          # Projects pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── sidebar.tsx       # Navigation sidebar
│   ├── section.tsx       # Animated section wrapper
│   ├── project-card.tsx  # Project preview card
│   └── build-sheet.tsx   # Project details sidebar
├── content/              # MDX content
│   └── projects/         # Project case studies
├── lib/                  # Utility functions
│   ├── seo.ts           # SEO metadata helpers
│   ├── projects.ts      # Project data utilities
│   ├── mdx.tsx          # Custom MDX components
│   └── utils.ts         # General utilities
├── styles/              # Additional styles
│   └── prose.css        # MDX prose styling
└── public/              # Static assets
    ├── images/          # Images and screenshots
    ├── resume.pdf       # Resume file
    └── og.jpg           # Open Graph image
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Adding New Projects

1. **Create MDX file** in `content/projects/`
   ```bash
   touch content/projects/my-new-project.mdx
   ```

2. **Add frontmatter** with required fields:
   ```yaml
   ---
   slug: my-new-project
   title: My New Project
   summary: A brief description of the project
   role: Your Role
   dates: January 2024 - March 2024
   tech: [React, TypeScript, Tailwind]
   status: Completed
   heroImage: /images/projects/my-project-hero.jpg
   repoUrl: https://github.com/username/repo
   liveUrl: https://myproject.com
   featured: true
   tags: [react, typescript, web]
   metrics:
     - label: Performance
       value: 95%
   ---
   ```

3. **Write content** using MDX syntax with custom components:
   ```mdx
   ## Project Overview
   
   <Callout type="info">
   This project achieved amazing results!
   </Callout>
   
   ### Technical Implementation
   
   The solution uses modern web technologies...
   ```

### Customizing Content

- **Personal Information**: Update `lib/seo.ts` with your details
- **Sidebar**: Modify `components/sidebar.tsx` for navigation and social links
- **Home Page**: Edit `app/page.tsx` for your introduction and skills
- **About Page**: Update `app/about/page.tsx` with your background
- **Contact**: Configure `app/contact/page.tsx` with your contact information

## 🎨 Customization

### Colors & Theme

The design uses CSS variables for easy theming. Update `app/globals.css`:

```css
:root {
  --bg: #ffffff;
  --fg: #0a0a0a;
  --accent: #3b82f6;
  /* ... other variables */
}

.dark {
  --bg: #0a0a0a;
  --fg: #ffffff;
  --accent: #60a5fa;
  /* ... dark theme variables */
}
```

### Typography

Fonts are configured in `app/layout.tsx`:
- **UI Font**: Inter (Google Fonts)
- **Code Font**: JetBrains Mono (Google Fonts)

### Animations

Animation settings in `tailwind.config.ts`:
- **Duration**: 120-160ms ease-out
- **Reduced Motion**: Automatically disabled for accessibility

## 📊 SEO & Performance

### SEO Features

- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

### Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Optimized imports and tree shaking
- **Caching**: Static generation with ISR where appropriate

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings:
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`
     - **Install Command**: `npm install`

3. **Configure Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard

4. **Custom Domain** (optional)
   - Add your domain in Vercel project settings
   - Configure DNS records as instructed

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy `.next` folder
- **Railway**: Connect GitHub repository for automatic deployments
- **DigitalOcean**: Use App Platform with Node.js configuration

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript checks

# Content
npm run postinstall  # Build contentlayer
```

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting with Next.js rules
- **Prettier**: Code formatting (configure in your editor)
- **Husky**: Git hooks for pre-commit checks (optional)

## 📚 Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Contentlayer](https://www.contentlayer.dev/)
- [MDX](https://mdxjs.com/)

### Inspiration

- [Brittany Chiang's Portfolio](https://brittanychiang.com/)
- [Modern Web Design Patterns](https://web.dev/patterns/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help:

- **Issues**: Create a GitHub issue
- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.