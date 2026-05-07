import { BlogContent } from "@/components/blog/BlogContent";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <BlogContent post={post} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar categories={categories} activeCategory={post.category} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}