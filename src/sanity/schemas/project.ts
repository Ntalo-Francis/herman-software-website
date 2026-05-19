export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (rule: any) => rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule: any) => rule.required() },
    { name: "thumbnail", title: "Thumbnail", type: "image", options: { hotspot: true } },
    { name: "sector", title: "Sector", type: "string", options: { list: ["Retail", "Hospitality", "Agriculture / Fintech", "Education", "Logistics / Transport", "Entertainment / Media", "Technology", "Mobile Apps"] } },
    { name: "challenge", title: "The Challenge", type: "text", validation: (rule: any) => rule.required() },
    { name: "solution", title: "Our Approach", type: "text", validation: (rule: any) => rule.required() },
    { name: "result", title: "Results", type: "text", validation: (rule: any) => rule.required() },
    { name: "technologies", title: "Technologies Used", type: "array", of: [{ type: "string" }], options: { layout: "tags" } },
  ],
};
