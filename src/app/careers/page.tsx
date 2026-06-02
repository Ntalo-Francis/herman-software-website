import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Careers — Join Our Team",
  description: "Join HERMAN Software Solutions and build world-class software from Jinja, Uganda. We're always looking for talented engineers, designers, and consultants.",
  path: "/careers",
});

const openings = [
  {
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    location: "Jinja, Uganda (Hybrid)",
    description: "We're looking for an experienced full-stack developer to lead client projects and mentor junior team members.",
  },
  {
    title: "Mobile Developer (React Native)",
    type: "Full-time",
    location: "Jinja, Uganda (Remote possible)",
    description: "Join our mobile team building cross-platform apps for Android and iOS serving thousands of users.",
  },
  {
    title: "UI/UX Designer",
    type: "Part-time / Contract",
    location: "Remote",
    description: "Help us create intuitive, beautiful interfaces for web and mobile applications.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-navy py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">Join Our Team</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            Build world-class software from Jinja, Uganda — and make an impact across East Africa.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeading
            title="Why Work at HERMAN?"
            subtitle="We invest in our people as much as our code."
          />
          <div className="mx-auto max-w-3xl grid gap-6 sm:grid-cols-3 mb-16">
            {[
              { title: "Growth", desc: "Learning budget, mentorship, and real responsibility from day one." },
              { title: "Flexibility", desc: "Hybrid working, flexible hours, and a results-focused culture." },
              { title: "Impact", desc: "Your work directly affects businesses and communities across East Africa." },
            ].map((item) => (
              <div key={item.title} className="card-base p-6 text-center">
                <h3 className="mb-2 text-h4">{item.title}</h3>
                <p className="text-body-sm text-charcoal">{item.desc}</p>
              </div>
            ))}
          </div>

          <SectionHeading title="Open Positions" subtitle="Current opportunities to join our team." />
          
          {openings.length > 0 ? (
            <div className="mx-auto max-w-3xl space-y-4">
              {openings.map((job) => (
                <div key={job.title} className="card-base p-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-h4">{job.title}</h3>
                    <p className="text-body-sm text-charcoal mt-1">{job.description}</p>
                    <div className="flex gap-3 mt-2">
                      <span className="text-xs text-teal bg-teal/10 px-2 py-0.5 rounded-full">{job.type}</span>
                      <span className="text-xs text-gray-medium">{job.location}</span>
                    </div>
                  </div>
                  <Button href={`mailto:infohermansoftware@gmail.com?subject=Application: ${job.title}`} variant="primary" className="flex-shrink-0">
                    Apply
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-3xl text-center py-10">
              <p className="text-charcoal mb-4">No open positions right now, but we&apos;re always open to meeting talented people.</p>
              <Button href="mailto:infohermansoftware@gmail.com" variant="secondary">Send Speculative Application</Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}