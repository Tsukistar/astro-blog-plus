import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  top: z.number().optional(),
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.date(),
  updatedDate: z.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const zhHansCollection = defineCollection({
  schema: blogSchema,
  type: 'content', // 使用 'content' 类型
});

const zhHantCollection = defineCollection({
  schema: blogSchema,
  type: 'content', // 使用 'content' 类型
});

const enCollection = defineCollection({
  schema: blogSchema,
  type: 'content', // 使用 'content' 类型
});

export const collections = {
  'zh-hans': zhHansCollection,
  'zh-hant': zhHantCollection,
  'en': enCollection,
};
