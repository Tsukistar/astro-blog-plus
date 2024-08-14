import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = (await getCollection("zh-hans")).sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
      );
    return rss({
        title: 'SITE TITLE',
        description: 'site description',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            link: `/zh-hans/${post.slug}/`,
            ...post.data,
        })),
        customData:
        `
        <language>zh-hans</language>
        `
    });
}