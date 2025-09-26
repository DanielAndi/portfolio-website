// Fallback project data for when contentlayer fails on Windows
export const fallbackProjects = [
  {
    slug: 'embedded-pid-controller',
    title: 'Embedded PID Controller System',
    summary: 'A real-time PID controller implementation for industrial automation with advanced tuning algorithms and web-based configuration interface.',
    role: 'Embedded Systems Developer & Firmware Engineer',
    dates: 'September 2023 - December 2023',
    tech: ['C', 'FreeRTOS', 'ARM Cortex-M4', 'WebSockets', 'Python', 'Flask', 'React'],
    status: 'Completed',
    heroImage: '/images/projects/pid-controller-hero.jpg',
    repoUrl: 'https://github.com/danielog/embedded-pid-controller',
    liveUrl: 'https://pid-controller-demo.vercel.app',
    featured: true,
    tags: ['embedded', 'c', 'freertos', 'python', 'react', 'control systems'],
    url: '/projects/embedded-pid-controller',
    body: {
      code: '<!-- MDX content would be here -->'
    }
  },
  {
    slug: 'ios-telemetry-app',
    title: 'iOS Telemetry Data Collection App',
    summary: 'A native iOS application for collecting and analyzing telemetry data from connected devices with advanced visualization and export capabilities.',
    role: 'iOS Developer & Mobile Engineer',
    dates: 'June 2023 - August 2023',
    tech: ['Swift', 'SwiftUI', 'Core Data', 'Combine', 'Charts', 'Bluetooth LE', 'CloudKit'],
    status: 'Completed',
    heroImage: '/images/projects/ios-telemetry-hero.jpg',
    repoUrl: 'https://github.com/danielog/ios-telemetry-app',
    liveUrl: 'https://apps.apple.com/app/telemetry-collector',
    featured: true,
    tags: ['ios', 'swift', 'swiftui', 'bluetooth', 'core data', 'charts'],
    url: '/projects/ios-telemetry-app',
    body: {
      code: '<!-- MDX content would be here -->'
    }
  },
  {
    slug: 'spring-boot-iot-dashboard',
    title: 'Spring Boot IoT Dashboard',
    summary: 'A comprehensive dashboard for monitoring IoT devices with real-time data visualization and alert management.',
    role: 'Full Stack Developer & DevOps Engineer',
    dates: 'January 2024 - March 2024',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'AWS', 'Grafana', 'InfluxDB'],
    status: 'Completed',
    heroImage: '/images/projects/iot-dashboard-hero.jpg',
    repoUrl: 'https://github.com/danielog/spring-boot-iot-dashboard',
    liveUrl: 'https://iot-dashboard-demo.vercel.app',
    featured: true,
    tags: ['spring boot', 'react', 'iot', 'aws', 'docker'],
    url: '/projects/spring-boot-iot-dashboard',
    body: {
      code: '<!-- MDX content would be here -->'
    }
  }
]

