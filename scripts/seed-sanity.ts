import { createClient } from "@sanity/client";
import { blogPosts } from "../src/data/blog-posts";
import { projects } from "../src/data/projects";

const client = createClient({
  projectId: "epwpso4i",
  dataset: "production",
  apiVersion: "2026-05-14",
  token: process.env.SANITY_SEED_TOKEN,
  useCdn: false,
});

async function seed() {
  console.log("Seeding blog posts...");
  for (const post of blogPosts) {
    await client.createIfNotExists({
      _id: `blog-${post.slug}`,
      _type: "blogPost",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      author: post.author,
      publishedAt: post.date,
      category: post.category,
      excerpt: post.excerpt,
    });
    console.log(`  OK ${post.title}`);
  }

  console.log("Seeding projects...");
  for (const project of projects) {
    await client.createIfNotExists({
      _id: `project-${project.slug}`,
      _type: "project",
      title: project.title,
      slug: { _type: "slug", current: project.slug },
      sector: project.sector,
      challenge: project.challenge,
      solution: project.solution,
      result: project.result,
      technologies: project.technologies,
    });
    console.log(`  OK ${project.title}`);
  }

  console.log("Done!");
}

seed().catch(console.error);
