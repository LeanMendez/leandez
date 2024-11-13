import { defineCollection } from "astro:content";
import { rssSchema } from "@astrojs/rss";

// 2. Define a `type` and `schema` for each collection
const blog = defineCollection({
  schema: rssSchema,
});


export const collections = {
  blog: blog,
};
