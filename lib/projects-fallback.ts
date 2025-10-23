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
    heroImage: '/images/projects/flappy-bird-hero.jpg',
    repoUrl: 'https://github.com/danielog/flappy-bird-embedded',
    featured: true,
    tags: ['embedded', 'c', 'verilog', 'fpga', 'hardware'],
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
    heroImage: '/images/projects/phytopi-hero.jpg',
    repoUrl: 'https://github.com/danielog/phytopi-system',
    featured: true,
    tags: ['iot', 'agriculture', 'python', 'react', 'embedded'],
    url: '/projects/phytopi-controlled-environment',
    body: {
      code: '<!-- MDX content would be here -->'
    }
  }
]

