import { BlogList } from "@/components/blog/BlogList";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { getBlogPosts } from "@/sanity/queries";

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  const categories: string[] = Array.from(new Set(blogPosts.map((p: any) => p.category as string)));

  return (
    <>
      <section className="bg-navy py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">Technical Insights & Practical Guides</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            We share what we learn about software engineering, digital transformation, and technology decision-making.
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BlogList posts={blogPosts} />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar categories={categories} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}