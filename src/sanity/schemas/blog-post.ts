export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "HERMAN Engineering Team",
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "date",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Software Engineering",
          "Web Development",
          "Mobile Development",
          "IT Strategy",
          "Business Systems",
        ],
      },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};