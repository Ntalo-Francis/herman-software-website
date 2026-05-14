"use client";

import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ProjectFilters } from "@/components/portfolio/ProjectFilters";
import { getProjects } from "@/sanity/queries";

export function PortfolioContent() {
  const [projects, setProjects] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p className="text-center text-charcoal py-10">Loading projects...</p>;
  }

  const categories = ["All", ...Array.from(new Set(projects.map((p: any) => p.sector)))];
  const filtered = activeCategory === "All" ? projects : projects.filter((p: any) => p.sector === activeCategory);

  return (
    <>
      <ProjectFilters categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project: any) => (
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
      {filtered.length === 0 && <p className="mt-10 text-center text-charcoal">No projects found.</p>}
    </>
  );
}