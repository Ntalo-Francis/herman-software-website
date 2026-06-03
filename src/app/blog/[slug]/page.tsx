"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getBlogPost } from "@/sanity/queries";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SocialShare } from "@/components/shared/SocialShare";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { Button } from "@/components/shared/Button";
import { Skeleton } from "@/components/shared/Skeleton";
import { PortableText } from "@portabletext/react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getBlogPost(slug as string).then((data) => {
        setPost(data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <>
        <section className="bg-navy py-20">
          <div className="container-site">
            <Skeleton className="h-10 w-2/3 mb-4" />
            <Skeleton className="h-6 w-1/3" />
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container-site mx-auto max-w-3xl space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </section>
      </>
    );
  }

  if (!post) {
    return (
      <section className="section-padding bg-white text-center">
        <div className="container-site">
          <h1 className="mb-4">Article Not Found</h1>
          <p className="text-charcoal mb-6">The article you're looking for doesn't exist.</p>
          <Button href="/blog" variant="primary">Back to Blog</Button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <span className="inline-block rounded-full bg-teal/20 px-3 py-1 text-xs font-medium text-teal mb-4">
            {post.category}
          </span>
          <h1 className="text-white max-w-3xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-body-sm text-gray-medium">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            {/* Social Share */}
            <div className="mb-8 flex items-center justify-between">
              <SocialShare
                title={post.title}
                url={typeof window !== "undefined" ? window.location.href : ""}
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_200px]">
              {/* Article Body */}
              <div className="prose prose-lg max-w-none prose-headings:text-navy prose-a:text-teal prose-strong:text-navy dark:prose-headings:text-white dark:prose-strong:text-white dark:prose-p:text-charcoal">
                {post.body ? (
                  <PortableText value={post.body} />
                ) : (
                  <p>{post.excerpt}</p>
                )}
              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  <TableOfContents />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-light py-16 text-center">
        <div className="container-site">
          <h2>Enjoyed This Article?</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-charcoal">
            Subscribe to our newsletter for more insights on software engineering and technology.
          </p>
          <div className="mt-8">
            <Button href="/blog" variant="primary">Read More Articles</Button>
          </div>
        </div>
      </section>
    </>
  );
}