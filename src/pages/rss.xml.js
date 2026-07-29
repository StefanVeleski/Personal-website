import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site.ts';

export async function GET(context) {
  const posts = (await getCollection('posts'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: `${site.name} — Blog`,
    description: 'Home automation, personal finance, side-project apps, and whatever else I’m tinkering with.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
