export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "when-to-move-from-spreadsheets",
    title: "When to Move from Spreadsheets to a Custom System",
    date: "April 28, 2026",
    category: "Software Engineering",
    excerpt:
      "Spreadsheets are great — until they're not. Here are 5 clear signs your business has outgrown Excel and needs a custom software solution.",
    author: "HERMAN Engineering Team",
  },
  {
    slug: "evaluate-software-partner",
    title: "How to Evaluate a Software Partner: 7 Questions to Ask",
    date: "April 15, 2026",
    category: "IT Strategy",
    excerpt:
      "Choosing the wrong development partner can cost you time, money, and momentum. Use this practical checklist before signing any contract.",
    author: "HERMAN Engineering Team",
  },
  {
    slug: "website-vs-web-app",
    title: "Understanding the Difference Between a Website and a Web Application",
    date: "March 30, 2026",
    category: "Web Development",
    excerpt:
      "Clients often ask us: 'What's the difference?' The answer determines your budget, timeline, and technology choices. Let's break it down simply.",
    author: "HERMAN Engineering Team",
  },
];