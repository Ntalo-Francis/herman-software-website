import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "epwpso4i",
  dataset: "production",
  apiVersion: "2026-05-14",
  useCdn: true,
});
