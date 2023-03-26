import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string(),
    description: z.string(),
    publishDate: z.date().transform((str) => new Date(str)),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string(),
    description: z.string(),
    logo: z.string().optional(),
    video: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
