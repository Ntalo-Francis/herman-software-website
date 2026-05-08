import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  projectType: z.array(z.string()).optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().min(10, "Please provide at least 10 characters describing your project"),
  techPreferences: z.string().optional(),
  source: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type QuoteFormData = z.infer<typeof quoteFormSchema>;