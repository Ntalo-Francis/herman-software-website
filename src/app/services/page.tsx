import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { services } from "@/data/services";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Software Development Services — Custom, Web, Mobile & Enterprise",
  description: "Explore HERMAN's full-service software capabilities: custom development, web and cloud apps, mobile development, IT consulting, and enterprise systems. Based in Jinja, Uganda.",
  path: "/services",
});
const detailedServices = [
  {
    title: "Custom Software Engineering",
    label: "Systems That Fit Your Operations",
    description:
      "Off-the-shelf software forces you to change how you work. We build systems that adapt to you — whether it's inventory management, logistics tracking, HR platforms, or bespoke internal tools. Every solution is designed around your unique workflows, not the other way around.",
    approach:
      "We conduct requirements workshops, design the data model and system architecture, and develop iteratively with your feedback at every sprint review.",
    stack: "Python/Django, Node.js, Laravel, PostgreSQL, React, Docker",
    href: "/services/custom-software",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Web & Cloud Applications",
    label: "High-Performance Web Solutions",
    description:
      "From corporate websites that convert visitors into clients, to complex web applications handling thousands of transactions — we build for speed, security, and scale. Every web application we deliver is responsive, accessible, optimized for search engines, and deployed on reliable cloud infrastructure.",
    approach:
      "Responsive design, server-side rendering where needed, REST or GraphQL APIs, cloud deployment on AWS/Google Cloud with CI/CD pipelines.",
    stack: "Next.js, React, Tailwind CSS, Node.js, MongoDB, PostgreSQL, Vercel/AWS",
    href: "/services/web-applications",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Mobile Development",
    label: "Applications in Your Users' Hands",
    description:
      "Native and cross-platform mobile apps for Android and iOS. We handle everything from UI/UX design to App Store and Google Play publishing. Whether you need a customer-facing app or an internal field-force tool, we build mobile experiences that users love.",
    approach:
      "We evaluate whether your use case needs native performance or cross-platform efficiency (React Native/Flutter), then build with offline capability, push notifications, and secure API integration.",
    stack: "Kotlin, Swift, React Native, Flutter, Firebase",
    href: "/services/mobile-development",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "IT Strategy & Consulting",
    label: "Honest Technical Advisory",
    description:
      "Not sure what technology you need? Planning a digital transformation or cloud migration? We provide architecture assessments, vendor evaluations, cybersecurity reviews, and technology roadmaps. Our advice is always independent — we recommend what's right for you, not what earns us the highest margin.",
    approach:
      "We deliver technical audit reports, system architecture documents, cloud migration plans, and security gap analyses — all in plain language your stakeholders can understand.",
    stack: "Cloud Architecture (AWS, GCP, Azure), Cybersecurity Frameworks, ITIL, TOGAF",
    href: "/services/it-consulting",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    title: "Enterprise Systems",
    label: "Serious Tools for Serious Operations",
    description:
      "We configure, customize, and deploy enterprise platforms — ERP, CRM, and POS systems — tailored to your industry and workflows. No bloated features, no unnecessary complexity. We adapt the system to your processes, not the other way around.",
    approach:
      "We assess your processes, recommend the right platform (custom or off-the-shelf), handle data migration, training, and ongoing support with guaranteed SLAs.",
    stack: "Odoo, ERPNext, Custom ERP Solutions, PostgreSQL, Docker, Linux",
    href: "/services/enterprise-systems",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
];

// Process steps (same as homepage)
const processSteps = [
  { number: "01", title: "Discover", description: "Requirements workshops, stakeholder interviews, technical feasibility assessment." },
  { number: "02", title: "Design & Prototype", description: "System architecture, wireframes, UI mockups, data models." },
  { number: "03", title: "Develop & Test", description: "Iterative sprints, continuous integration, automated testing, client demos." },
  { number: "04", title: "Deploy & Support", description: "Production deployment, monitoring, documentation, ongoing maintenance SLA." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">What We Build — And How We Build It</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            Every project starts with understanding your problem, not pushing a solution. Explore our capabilities below.
          </p>
        </div>
      </section>

      {/* Service Detail Blocks */}
      {detailedServices.map((service, index) => (
        <section
          key={service.title}
          className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-gray-light"}`}
        >
          <div className="container-site">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Text Side */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-teal/10 text-teal">
                  {service.icon}
                </div>
                <p className="text-overline mb-2">{service.label}</p>
                <h2 className="mb-4">{service.title}</h2>
                <p className="mb-4 text-body text-charcoal">{service.description}</p>
                <div className="mb-4 rounded-card border border-gray-light bg-white p-4">
                  <p className="text-body-sm font-semibold text-navy">Technical Approach</p>
                  <p className="text-body-sm text-charcoal">{service.approach}</p>
                </div>
                <div className="mb-6 rounded-card border border-gray-light bg-white p-4">
                  <p className="text-body-sm font-semibold text-navy">Typical Stack</p>
                  <p className="text-body-sm text-charcoal">{service.stack}</p>
                </div>
                <Button href={service.href} variant="primary">
                  Learn More About {service.title}
                </Button>
              </div>

              {/* Visual Side (placeholder) */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex h-64 items-center justify-center rounded-card bg-navy/5 lg:h-80">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-navy/10 text-navy">
                      {service.icon}
                    </div>
                    <p className="text-body-sm font-medium text-navy">{service.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How We Work */}
      <section className="section-padding bg-navy text-white">
        <div className="container-site">
          <SectionHeading
            title="Our Delivery Methodology"
            subtitle="A proven process that keeps your project on track and aligned with your goals."
            className="[&_h2]:text-white [&_p]:text-gray-medium"
          />

          {/* Desktop Timeline */}
          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-12 h-0.5 bg-gray-medium/20" />
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.number} className="relative text-center">
                  <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-lg font-bold text-white">
                    {step.number}
                  </div>
                  <h4 className="mb-2 text-white">{step.title}</h4>
                  <p className="text-body-sm text-gray-medium">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Stack */}
          <div className="space-y-8 lg:hidden">
            {processSteps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                  {step.number}
                </div>
                <div>
                  <h4 className="mb-1 text-white">{step.title}</h4>
                  <p className="text-body-sm text-gray-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center">
        <div className="container-site">
          <h2>Not Sure Which Service Fits Your Needs?</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-charcoal">
            Tell us about your project and we&apos;ll recommend the right approach — honestly.
          </p>
          <div className="mt-8">
            <Button href="/get-quote" variant="primary">
              Tell Us About Your Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}