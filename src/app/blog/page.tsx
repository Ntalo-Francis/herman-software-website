import { BlogList } from "@/components/blog/BlogList";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Technical Insights & Articles — HERMAN Software Solutions Blog",
  description: "Read our technical blog covering software engineering, web development, IT strategy, and digital transformation in East Africa.",
  path: "/blog",
});
export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">Technical Insights & Practical Guides</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            We share what we learn about software engineering, digital transformation, and
            technology decision-making.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <BlogList posts={blogPosts} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar categories={categories} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}