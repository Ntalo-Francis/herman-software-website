export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "Web Applications", href: "/services/web-applications" },
      { label: "Mobile Development", href: "/services/mobile-development" },
      { label: "IT Consulting", href: "/services/it-consulting" },
      { label: "Enterprise Systems", href: "/services/enterprise-systems" },
    ],
  },
  { label: "Our Work", href: "/our-work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;