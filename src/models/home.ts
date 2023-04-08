import { z } from 'zod';
import legacyConfig from '../legacy-config';
import { ImageData } from './image';
import { NonEmptyString } from './nonEmptyString';

export const HomeData = z
  .object({
    title: NonEmptyString,
    description: NonEmptyString,
    favicon: ImageData,
    bannerPrimaryHeader: NonEmptyString,
    bannerSecondaryHeader: NonEmptyString,
    bannerContent: NonEmptyString,
    buttonText: NonEmptyString,
    downloadFile: NonEmptyString,
    profilePicture: ImageData,
    blogTitle: NonEmptyString,
    blogSubtitle: NonEmptyString,
    blogCards: z
      .array(
        z.object({
          title: NonEmptyString,
          description: NonEmptyString,
          thumbnail: ImageData,
          url: NonEmptyString,
        })
      )
      .default([]),
    publicationTitle: NonEmptyString,
    publicationSubtitle: NonEmptyString,
    publicationCards: z
      .array(
        z.object({
          title: NonEmptyString,
          description: NonEmptyString,
          thumbnail: ImageData,
          url: NonEmptyString,
        })
      )
      .default([]),
  })
  .default({
    title: legacyConfig.homePage.title,
    description: legacyConfig.homePage.description,
    favicon: { src: '/favicon.ico', alt: null },
    bannerPrimaryHeader: legacyConfig.homePage.banner.header1,
    bannerSecondaryHeader: legacyConfig.homePage.banner.header2,
    bannerContent: ``,
    buttonText: 'Curriculum Vitae',
    downloadFile: legacyConfig.homePage.resumeURL,
    profilePicture: {
      src: legacyConfig.homePage.banner.imageURL,
      alt: legacyConfig.homePage.banner.imageAlt,
    },
    blogTitle: legacyConfig.homePage.blogs.title,
    blogSubtitle: legacyConfig.homePage.blogs.subtitle,
    blogCards: [],
    publicationTitle: legacyConfig.homePage.publications.title,
    publicationSubtitle: legacyConfig.homePage.publications.subtitle,
    publicationCards: [],
  });

export type HomeData = z.infer<typeof HomeData>;
