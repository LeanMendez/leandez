import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blog = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    slug: z.string().optional(),
    pubDate: z.date().transform((str) => new Date(str)),
    updatedDate: z.date().optional(),
    draft: z.boolean().optional().default(false),
    share: z
      .object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
      })
      .strict(),
  }),
});


export const collections = {
  blog: blog,
};
