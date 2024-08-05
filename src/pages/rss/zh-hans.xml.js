import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// 获取中文博客内容集合
export async function GET(context) {
    const posts = (await getCollection("zh-hans")).sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
      );
    return rss({
        title: '星河絮语',
        description: '浩瀚中的伟大，孤独间的渺小',
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