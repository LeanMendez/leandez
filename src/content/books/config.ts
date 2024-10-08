import { defineCollection, z } from "astro:content";

const books = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.number().optional(),
    image: z.string(),
    slug: z.string().optional(),
    current: z.boolean().optional().default(false),
  }),
});

export const collections = {
  books: books,
};
