import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
