export interface Service {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Custom Software Engineering",
    description:
      "We architect and build secure, scalable systems tailored precisely to your operational requirements — from inventory to HR.",
    href: "/services/custom-software",
    icon: "code",
  },
  {
    title: "Web & Cloud Applications",
    description:
      "High-performance, responsive web applications and corporate sites built with modern stacks, optimized for speed and conversion.",
    href: "/services/web-applications",
    icon: "globe",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for Android and iOS, designed for reliability and seamless user experience.",
    href: "/services/mobile-development",
    icon: "smartphone",
  },
  {
    title: "IT Strategy & Consulting",
    description:
      "Technical advisory on infrastructure, cybersecurity, cloud migration, and digital transformation — pragmatic advice, never over-engineered.",
    href: "/services/it-consulting",
    icon: "lightbulb",
  },
  {
    title: "Enterprise Systems",
    description:
      "Deployment and customization of POS, ERP, and CRM platforms — configured to fit your business, not the other way around.",
    href: "/services/enterprise-systems",
    icon: "server",
  },
];