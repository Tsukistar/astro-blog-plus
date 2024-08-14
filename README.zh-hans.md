# Astro-Blog-Plus

<div style="display: flex; align-items: center">
    <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTsukistar%2Fastro-blog-plus%2Ftree%2Fmain" target="_blank" rel="noopener noreferrer">
        <img src="https://vercel.com/button" alt="Vercel" tabindex="0" />
    </a>
</div>

![website](./readme_assets/image.png)

“Astro-Blog-Plus”是基于Astro官方[博客模板](https://github.com/withastro/templates/tree/main/templates/blog)构建的模板。它增加了许多新功能，并对移动端布局进行了优化。

您可以通过点击“Deploy”按钮，fork此仓库并将其部署到Vercel。

## ⭐ 特色功能:

- ✅ 包含原始“博客”模板的所有功能。
- ✅ 移动端布局优化。
- ✅ 支持Astro内置分页。
- ✅ 集成[Waline评论系统](https://waline.js.org/)。
- ✅ 支持黑暗模式。
- ✅ 国际化（i18n）路由支持。
- ✅ 添加了许多新页面，例如：友链、归档、标签、留言板等。

## 🚀 项目结构:

该模板包含以下文件夹和文件：

```yml
│   astro.config.mjs
│   package.json
│   tsconfig.json
└───src
    │   env.d.ts
    ├───components
    │       BaseHead.astro
    │       BlogPostLicense.astro 
    │       Footer.astro
    │       FormattedDate.astro
    │       Header.astro
    │       HeaderLink.astro
    │       LanguageSelector.astro
    │       MainBlogHead.astro
    │       MobileMenu.astro
    │       SinglePageHead.astro
    │       ThemeIcon.astro
    │       WalineComment.astro 
    ├───content
    │   │   config.ts
    │   ├───draft 
    │   └───{lang}
    ├───layouts
    │       BlogPost.astro
    ├───locales
    │   └───{lang}
    │           friends.json
    │           translation.json
    ├───pages
    │   │   index.astro
    │   ├───{lang}
    │   │   │   about.astro
    │   │   │   archives.astro
    │   │   │   friends.astro
    │   │   │   index.astro
    │   │   │   messageBoard.astro
    │   │   │   tags.astro
    │   │   │   [...slug].astro
    │   │   │   [page].astro
    │   │   └───tags 
    │   │           [tag].astro    
    │   └───rss
    │        └───{lang}.xml.js          
    └───styles
            global.css
            main-blog.css
            single-page.css
```

- Astro会在`src/pages/`目录中查找`.astro`或`.md`文件。每个文件根据其文件名生成一个路由。当启用i18n路由时，`astro.config.mjs`应配置如下：

```javascript
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: "zh-hans",
    locales: ["zh-hans", "zh-hant", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },
});
```

上述配置中，`prefixDefaultLocale`选项设置为`true`，这种情况下如果访问英文版网站，URL应为`https://astro-blog-plus.vercel.app/en`。`redirectToDefaultLocale`选项设置为`false`，即关闭重定向到默认语言主页，这时如果访问`https://astro-blog-plus.vercel.app`，您将看到`./pages`目录中的`index.astro`的内容。

- `components`文件夹包含了许多复用率高的组件。要开发新的组件，您可以在此文件夹中添加`.astro`文件，并在需要的地方导入它。

- 对于国际化，此模板默认支持三种语言：zh-hans（简体中文）、zh-hant（繁体中文）和en（英语）。要添加新的语言，例如日语，您需要在`astro.config.mjs`中`defineConfig - i18n - locales`下添加它：

```javascript
i18n: {
    defaultLocale: "zh-hans",
    locales: ["zh-hans", "zh-hant", "en", "jp"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },
```

然后，在`pages`、`content`和`locales`目录中创建一个名为"jp"的新文件夹。此外，在`src/pages/rss`中添加一个`jp.xml.js`文件。最后，在`/src/locales/jp`中添加`translation.json`和`friends.json`，并添加您的内容翻译。

- `src/content/`目录包含相关的Markdown和MDX文档的“集合”。Astro使用`getCollection()`从`src/content/blog/`中检索文章，并使用可选的模式进行前置数据的类型检查。有关更多详细信息，请参阅[Astro的内容集合文档](https://docs.astro.build/en/guides/content-collections/)。

- 任何静态资源，如字体和图像，应该放置在`public/`目录中。

## 致谢

此主题基于Astro的官方[博客模板](https://github.com/withastro/templates/tree/main/templates/blog)。在开发过程中，Astro的[官方文档](https://docs.astro.build/zh-cn/getting-started/)帮助我解决了许多问题。

---

<a href='https://ko-fi.com/A0A0T96C9' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>