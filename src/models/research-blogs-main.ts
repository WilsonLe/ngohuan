import { z } from 'zod';
import legacyConfig from '../legacy-config';
import { ImageData } from './image';
import { NonEmptyString } from './nonEmptyString';
import { BlogsCard } from './publication';
export const ResearchBlogsMainData = z
  .object({
    title: NonEmptyString,
    subtitle: NonEmptyString,
    bannerImage: ImageData,
    blogs: z.array(BlogsCard).default([]),
  })
  .default({
    title: legacyConfig.researchBlogs.banner.title,
    subtitle: legacyConfig.researchBlogs.banner.subtitle,
    bannerImage: {
      src: legacyConfig.researchBlogs.banner.imageURL,
      alt: legacyConfig.researchBlogs.banner.imageAlt,
    },
    blogs: [],
  });

export type ResearchBlogsMainData = z.infer<typeof ResearchBlogsMainData>;
