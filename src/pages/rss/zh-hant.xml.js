import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// 获取中文博客内容集合
export async function GET(context) {
    const posts = (await getCollection("zh-hant")).sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
      );
    return rss({
        title: '星河絮語',
        description: '浩瀚中的偉大，孤獨間的渺小',
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