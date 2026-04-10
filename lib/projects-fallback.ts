// Fallback project data for when contentlayer fails on Windows
export const fallbackProjects = [
  {
    slug: 'flappy-bird-embedded',
    title: 'Reaction-Time Flappy Bird Game (Embedded Systems)',
    summary: 'Real-time Flappy Bird-style game implemented on Terasic DE10-Standard SoC FPGA board, demonstrating embedded hardware/software co-design with C, Verilog, and AXI-Lite communication.',
    role: 'Embedded Systems Developer',
    dates: 'January 2024 – March 2024',
    tech: ['C (HPS)', 'Verilog', 'Quartus Prime', 'Platform Designer (Qsys)', 'GCC Toolchain', 'AXI-Lite', 'SPI Communication'],
    status: 'Completed',
    heroImage: '/images/projects/flappy-bird-embedded/FlappyBirdDE10LCDv1.jpg',
    heroGallery: [
      '/images/projects/flappy-bird-embedded/component_diagram.png',
    ],
    repoUrl: 'https://github.com/danielog/flappy-bird-embedded',
    featured: true,
    tags: ['embedded-systems', 'fpga', 'verilog', 'c', 'hardware-design', 'real-time-systems'],
    skills: ['iot'],
    url: '/projects/flappy-bird-embedded',
    body: {
      code: '<!-- MDX content would be here -->'
    }
  },
  {
    slug: 'phytopi-controlled-environment',
    title: 'Phytopi Controlled Environment System',
    summary: 'Advanced controlled environment agriculture system with automated climate control, nutrient management, and IoT monitoring for optimal plant growth.',
    role: 'Embedded Systems & IoT Developer',
    dates: 'March 2024 – May 2024',
    tech: ['Arduino', 'Python', 'React', 'MQTT', 'Docker', 'PostgreSQL', 'Grafana'],
    status: 'Completed',
    heroImage: '/images/projects/phytopi-controlled-environment/phytopi-dashboard.png',
    heroSlides: [
      {
        src: '/images/projects/phytopi-controlled-environment/phytopi-dashboard.png',
        caption: 'Web dashboard for live telemetry, charts, and device health.',
      },
      {
        src: '/images/projects/phytopi-controlled-environment/current-design-concept-prototype-render-v3.0.png',
        caption: 'v3.0 concept render of the controlled-environment enclosure.',
      },
      {
        src: '/images/projects/phytopi-controlled-environment/current-design-concept-electrical-schematic-v2.0.png',
        caption:
          'v2.0 electrical schematic for sensors, power distribution, and Raspberry Pi integration.',
      },
      {
        src: '/images/projects/phytopi-controlled-environment/current-design-concept-physical-prototype-v1.0.png',
        caption: 'v1.0 physical prototype of the enclosure assembly.',
      },
      {
        src: '/images/projects/phytopi-controlled-environment/capstone-picture-from-above.jpg',
        caption: 'Overhead view of the capstone grow setup and enclosure layout.',
      },
      {
        src: '/images/projects/phytopi-controlled-environment/capstone-front-view-inside.jpg',
        caption: 'Front interior view of the grow chamber with lighting and plants.',
      },
      {
        src: '/images/projects/phytopi-controlled-environment/capstone-enclosure-inside.jpg',
        caption: 'Interior of the enclosure showing plant placement and environment hardware.',
      },
      {
        src: '/images/projects/phytopi-controlled-environment/capstone-screen-close-view.jpg',
        caption: 'Close-up of the live dashboard display mounted on the system.',
      },
      {
        src: '/images/projects/phytopi-controlled-environment/capstone-poster.jpg',
        caption: 'Capstone poster summarizing PhytoPi goals, system architecture, and outcomes.',
      },
      {
        src: '/images/projects/phytopi-controlled-environment/capstone-team-picture.webp',
        caption: 'Capstone team photo.',
      },
    ],
    repoUrl: 'https://github.com/danielog/phytopi-system',
    featured: true,
    tags: ['iot', 'flutter', 'supabase', 'raspberry-pi', 'ml'],
    skills: ['iot', 'cloud', 'ai-automation'],
    url: '/projects/phytopi-controlled-environment',
    body: {
      code: '<!-- MDX content would be here -->'
    }
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    summary:
      'Personal portfolio with MDX case studies, project filtering, responsive layout, and polished motion.',
    role: 'Designer & Developer',
    dates: '2024 – Present',
    tech: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Contentlayer',
      'MDX',
      'Framer Motion',
    ],
    status: 'In Progress',
    heroImage: '/images/projects/portfolio-website/project-placeholder.svg',
    repoUrl: 'https://github.com/DanielAndi/portfolio-website',
    liveUrl: 'https://portfolio-website-jk9m.vercel.app/',
    featured: true,
    tags: [
      'web',
      'nextjs',
      'typescript',
      'tailwind',
      'react',
      'contentlayer',
      'mdx',
      'framer-motion',
      'vercel',
    ],
    skills: ['frontend', 'cloud'],
    url: '/projects/portfolio-website',
    body: {
      code: '<!-- MDX content would be here -->',
    },
  },
]

