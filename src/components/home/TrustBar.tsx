export function TrustBar() {
  const technologies = [
    "React", "Next.js", "Node.js", "Python", "PostgreSQL",
    "MongoDB", "AWS", "Docker", "Android", "iOS",
  ];

  return (
    <section className="border-b border-gray-light bg-gray-light py-8">
      <div className="container-site">
        <p className="mb-6 text-center text-body-sm font-medium uppercase tracking-wider text-gray-medium">
          Trusted technology partner for startups, SMEs, and enterprises across East Africa
        </p>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "6+", label: "Years Experience" },
            { value: "30+", label: "Clients Served" },
            { value: "5", label: "Countries Reached" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-navy">{stat.value}</div>
              <div className="text-body-sm text-gray-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-medium/30 bg-white px-4 py-1.5 text-xs font-medium text-gray-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}