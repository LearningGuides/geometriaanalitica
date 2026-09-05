import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import {z} from "astro/zod";

const lecciones = defineCollection({
  loader: glob({
    base: "./src/content/lecciones",
    pattern: "**/*.{md,mdx}",
  }),

  schema: z.object({
    titulo: z.string(),
    numero: z.number(),
  }),
});

export const collections = {
  lecciones,
};