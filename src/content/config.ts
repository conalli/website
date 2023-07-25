import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().default(true),
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
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().default(true),
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
