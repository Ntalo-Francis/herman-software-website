export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Herman Salim",
    role: "Founder & Lead Software Engineer",
    bio: "Full-stack developer with 8+ years of experience architecting and building software systems for businesses across East Africa. Passionate about clean code and practical solutions.",
  },
  {
    name: "Sarah Nakamya",
    role: "Senior Web Developer",
    bio: "Specializes in responsive web applications and UI/UX design. 6 years of experience turning complex requirements into intuitive, fast-loading web experiences.",
  },
  {
    name: "David Okello",
    role: "Mobile Development Lead",
    bio: "Android and iOS developer with a focus on cross-platform solutions. Has deployed 15+ apps to Google Play and the App Store serving over 50,000 users combined.",
  },
  {
    name: "Grace Atim",
    role: "IT Consultant & Systems Analyst",
    bio: "Former enterprise IT manager who bridges the gap between business needs and technical implementation. Expert in ERP systems, cloud migration, and cybersecurity planning.",
  },
  {
    name: "Patrick Mwangi",
    role: "Backend Engineer & DevOps",
    bio: "Database architect and cloud infrastructure specialist. Ensures every system we deploy is secure, scalable, and monitored around the clock.",
  },
  {
    name: "Faith Kisakye",
    role: "Project Manager & Client Relations",
    bio: "Certified Scrum Master who keeps projects on track and clients informed. Believes that clear communication is just as important as clean code.",
  },
];