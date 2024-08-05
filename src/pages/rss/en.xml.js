import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// 获取中文博客内容集合
export async function GET(context) {
    const posts = (await getCollection("en")).sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
      );
    return rss({
        title: "Tsukistar's Freetalk",
        description: 'Coding for the wonderful world.',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            link: `/en/${post.slug}/`,
            ...post.data,
        })),
        customData:
        `
        <language>en</language>
        `
    });
}