import { SectionHeading } from "@/components/shared/SectionHeading";

const differentiators = [
  {
    title: "Architecture-Led Thinking",
    description:
      "We design systems with clean structure, version control, documentation, and testing — production-ready from day one. No shortcuts, no technical debt.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
      </svg>
    ),
  },
  {
    title: "Radical Transparency",
    description:
      "No black boxes. You get access to project boards, regular demos, and honest technical discussions throughout the engagement. We tell you what you need to hear, not what you want to hear.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Full Lifecycle Partnership",
    description:
      "From discovery and system design through development, deployment, and long-term maintenance — one accountable team. We don't build and walk away.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Grounded Innovation",
    description:
      "We match the right technology to your actual needs — never recommending complexity for its own sake. The simplest solution that solves your problem is always the best one.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-site">
        <SectionHeading
          title="Why Clients Choose Us"
          subtitle="Four principles that set us apart and keep our clients coming back."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="card-base flex gap-5 p-6 transition-all duration-300 hover:shadow-cardHover"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-navy/5 text-navy">
                {item.icon}
              </div>
              <div>
                <h3 className="mb-2 text-h4">{item.title}</h3>
                <p className="text-body-sm text-charcoal">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}