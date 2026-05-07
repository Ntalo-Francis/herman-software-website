interface BlogSidebarProps {
  categories: string[];
  activeCategory?: string;
}

export function BlogSidebar({ categories, activeCategory }: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div>
        <h4 className="mb-4 text-body-sm font-semibold uppercase tracking-wider text-charcoal">
          Categories
        </h4>
        <ul className="space-y-2">
          <li>
            <a
              href="/blog"
              className={`text-body-sm transition-colors hover:text-teal ${
                !activeCategory ? "font-medium text-teal" : "text-charcoal"
              }`}
            >
              All Posts
            </a>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <a
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-body-sm transition-colors hover:text-teal ${
                  activeCategory === category ? "font-medium text-teal" : "text-charcoal"
                }`}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="rounded-card bg-navy p-6 text-center">
        <h4 className="mb-2 text-white">Need a Software Partner?</h4>
        <p className="mb-4 text-body-sm text-gray-medium">
          Let&apos;s discuss your project — free consultation.
        </p>
        <a
          href="/get-quote"
          className="inline-block rounded-md bg-teal px-4 py-2 text-body-sm font-semibold text-white hover:bg-teal-dark transition-colors"
        >
          Get a Quote
        </a>
      </div>
    </aside>
  );
}