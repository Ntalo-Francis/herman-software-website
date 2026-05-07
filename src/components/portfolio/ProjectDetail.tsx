import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import type { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article>
      {/* Hero */}
      <section className="bg-navy py-20 text-center">
        <div className="container-site">
          <Badge className="mb-4 inline-block">{project.sector}</Badge>
          <h1 className="text-white">{project.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-site mx-auto max-w-3xl">
          {/* The Challenge */}
          <div className="mb-10">
            <h2 className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-error/10 text-error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </span>
              The Challenge
            </h2>
            <p className="text-body text-charcoal">{project.challenge}</p>
          </div>

          {/* Our Approach */}
          <div className="mb-10">
            <h2 className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-info/10 text-info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </span>
              Our Approach
            </h2>
            <p className="text-body text-charcoal">{project.solution}</p>
          </div>

          {/* The Results */}
          <div className="mb-10 rounded-card border border-teal/20 bg-teal/5 p-6">
            <h2 className="mb-2 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Results
            </h2>
            <p className="text-body-lg font-semibold text-teal">{project.result}</p>
          </div>

          {/* Technologies Used */}
          <div className="mb-10">
            <h3 className="mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-navy/5 px-4 py-1.5 text-sm font-medium text-navy"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-gray-light pt-10 text-center">
            <h3 className="mb-4">Want Similar Results for Your Business?</h3>
            <Button href="/get-quote" variant="primary">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}