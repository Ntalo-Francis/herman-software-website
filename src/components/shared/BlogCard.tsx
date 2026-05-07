interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  href: string;
}

export function BlogCard({ title, date, excerpt, category, href }: BlogCardProps) {
  return (
    <a
      href={href}
      className="card-base group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1"
    >
      {/* Thumbnail Placeholder */}
      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-navy/5 to-teal/5">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C2BA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-wider text-teal">{category}</span>
          <span className="text-xs text-gray-medium">{date}</span>
        </div>
        <h3 className="text-h4 leading-snug transition-colors group-hover:text-teal">{title}</h3>
        <p className="text-body-sm text-charcoal">{excerpt}</p>
        <span className="mt-auto text-body-sm font-medium text-teal group-hover:underline">
          Read article →
        </span>
      </div>
    </a>
  );
}