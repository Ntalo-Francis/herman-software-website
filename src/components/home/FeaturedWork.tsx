import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { Button } from "@/components/shared/Button";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  // Show only the first 3 projects on the homepage
  const featured = projects.filter(function(p) { return p.slug === "mediavault-toolkit" || p.slug === "smartstock-inventory" || p.slug === "jinja-heights-booking"; });

  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <SectionHeading
          title="Selected Projects"
          subtitle="Real solutions we've delivered for real businesses — across retail, hospitality, agriculture, and more."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              sector={project.sector}
              challenge={project.challenge}
              result={project.result}
              href={`/our-work/${project.slug}`}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/our-work" variant="secondary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}