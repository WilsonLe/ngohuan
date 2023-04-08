import { z } from 'zod';
import legacyConfig from '../legacy-config';
import { ImageData } from './image';
import { NonEmptyString } from './nonEmptyString';
import { BlogsCard } from './publication';
export const PersonalBlogsMainData = z
  .object({
    title: NonEmptyString,
    subtitle: NonEmptyString,
    bannerImage: ImageData,
    blogs: z.array(BlogsCard).default([]),
  })
  .default({
    title: legacyConfig.personalBlogs.banner.title,
    subtitle: legacyConfig.personalBlogs.banner.subtitle,
    bannerImage: {
      src: legacyConfig.personalBlogs.banner.imageURL,
      alt: legacyConfig.personalBlogs.banner.imageAlt,
    },
    blogs: [],
  });

export type PersonalBlogsMainData = z.infer<typeof PersonalBlogsMainData>;
