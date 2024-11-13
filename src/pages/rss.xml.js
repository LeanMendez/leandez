import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('blog');
  return rss({
    title: 'Lean.Dez Blog',
    description: 'Blog personal de Leandro Méndez',
    site: context.site,
    items: blog.map((post) => ({
      link: `/posts/${post.slug}`,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.pubDate
    })),
    customData: `<language>es</language>`,
  });
}