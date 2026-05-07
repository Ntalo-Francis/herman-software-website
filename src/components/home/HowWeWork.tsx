import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business — requirements workshops, stakeholder interviews, and technical feasibility assessment.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "We create system architecture, wireframes, UI mockups, and data models. You see and approve the blueprint before we build.",
  },
  {
    number: "03",
    title: "Develop & Test",
    description:
      "Iterative sprints with continuous integration, automated testing, and regular client demos. You're never in the dark.",
  },
  {
    number: "04",
    title: "Deploy & Support",
    description:
      "Production deployment, monitoring, documentation, and ongoing maintenance with SLAs that guarantee uptime and responsiveness.",
  },
];

export function HowWeWork() {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-site">
        <SectionHeading
          title="How We Work"
          subtitle="A proven methodology that keeps your project on track, on budget, and aligned with your goals."
        />

        {/* Desktop: Horizontal Timeline */}
        <div className="relative hidden lg:block">
          {/* Connector Line */}
          <div className="absolute left-0 right-0 top-12 h-0.5 bg-gray-medium/30" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                {/* Number Circle */}
                <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
                  {step.number}
                </div>
                <h4 className="mb-2">{step.title}</h4>
                <p className="text-body-sm text-charcoal">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="space-y-8 lg:hidden">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                {step.number}
              </div>
              <div>
                <h4 className="mb-1">{step.title}</h4>
                <p className="text-body-sm text-charcoal">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}