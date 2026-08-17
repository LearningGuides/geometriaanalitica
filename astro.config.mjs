// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";

import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax/svg";

const processor = unified({
  remarkPlugins: [remarkMath],
  rehypePlugins: [
    [
      rehypeMathjax,
      {
        svg: {
          fontCache: "local",
        },
      },
    ],
  ],
});

export default defineConfig({
  integrations: [react(), mdx()],

  site: "https://learningguides.github.io",
  base: "",

  markdown: {
    processor,
  },
});