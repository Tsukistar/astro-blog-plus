import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = (await getCollection("zh-hant")).sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
      );
    return rss({
        title: 'SITE TITLE',
        description: 'site description',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            link: `/zh-hant/${post.slug}/`,
            ...post.data,
        })),
        customData:
        `
        <language>zh-hant</language>
        `
    });
}