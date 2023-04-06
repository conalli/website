import { z, defineCollection, image } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string(),
    description: z.string(),
    publishDate: z.date().transform((str) => new Date(str)),
    image: z
      .object({
        src: image(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
    repositories: z.array(
      z.object({ name: z.string(), url: z.string().url() })
    ),
    logo: image().optional(),
    video: z.string().url().optional(),
    image: z
      .object({
        src: image(),
        alt: z.string(),
      })
      .optional(),
    stack: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
