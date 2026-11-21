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
    title: 'PhytoPi Controlled Environment System',
    summary:
      'Raspberry Pi system that monitors and controls an indoor plant enclosure, with a C controller, SQLite, Supabase sync, Flutter kiosk, mobile and web apps, and an AI plant-health worker. I designed the system and wrote its software.',
    role: 'System design and all software (two-person capstone)',
    dates: 'GCU capstone project',
    tech: [
      'C',
      'Python',
      'TypeScript',
      'Raspberry Pi',
      'SQLite',
      'Supabase (PostgreSQL)',
      'Flutter / Dart',
      'Ollama',
      'Docker',
      'GitHub Actions',
    ],
    status: 'Completed capstone · presented at Capstone Showcase',
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
        src: '/images/projects/phytopi-controlled-environment/system-architecture.png',
        caption:
          'Design diagram: system architecture, with the services across the Raspberry Pi, its containers, and the cloud.',
      },
      {
        src: '/images/projects/phytopi-controlled-environment/device-data-flow.jpg',
        caption:
          'Design diagram: device data flow, showing how readings and images are captured, staged, and uploaded.',
      },
      {
        src: '/images/projects/phytopi-controlled-environment/firmware-flow.jpg',
        caption:
          'Design diagram: firmware flow, with the sensor-read loop, validation, publish and acknowledge, and command handling.',
      },
      {
        src: '/images/projects/phytopi-controlled-environment/module-uml.jpg',
        caption:
          'Design diagram: module UML, with the classes and boundaries of the device firmware components.',
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
    repoUrl: 'https://github.com/nolantuttle/PhytoPi',
    liveUrl: 'https://www.phytopi.com/',
    featured: true,
    tags: ['iot', 'flutter', 'supabase', 'raspberry-pi', 'python', 'c', 'sqlite', 'typescript'],
    skills: ['iot', 'cloud', 'ai-automation'],
    url: '/projects/phytopi-controlled-environment',
    body: {
      code: '<!-- MDX content would be here -->'
    }
  },
  {
    slug: 'continuity-hub',
    title: 'Continuity Hub · AWS Cloudathon 2026',
    summary:
      "Hackathon prototype for Circle the City's patient communication challenge, with an Amazon Connect call line, a serverless AWS backend, and a React staff web app that I built and deployed.",
    role: 'Prototype developer (four-person team)',
    dates: 'April 10–12, 2026',
    tech: [
      'AWS SAM',
      'AWS Lambda',
      'Python',
      'Amazon DynamoDB',
      'Amazon Cognito',
      'API Gateway (HTTP API)',
      'Amazon EventBridge',
      'Amazon Connect',
      'React',
      'TypeScript',
    ],
    status: 'Prototype · hackathon',
    heroImage: '/images/projects/continuity-hub/project-placeholder.svg',
    featured: true,
    tags: ['aws', 'serverless', 'python', 'react', 'typescript', 'prototype'],
    skills: ['cloud', 'frontend'],
    url: '/projects/continuity-hub',
    body: {
      code: '<!-- MDX content would be here -->',
    },
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

