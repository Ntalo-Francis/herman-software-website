export default {
  name: "project",
  title: "Project",
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
      name: "sector",
      title: "Sector",
      type: "string",
      options: {
        list: [
          "Retail",
          "Hospitality",
          "Agriculture / Fintech",
          "Education",
          "Logistics / Transport",
        ],
      },
    },
    {
      name: "challenge",
      title: "The Challenge",
      type: "text",
    },
    {
      name: "solution",
      title: "Our Approach",
      type: "text",
    },
    {
      name: "result",
      title: "Results",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
  ],
};