import { z } from 'zod';
import legacyConfig from '../legacy-config';
import { ImageData } from './image';
import { LinkData } from './link';

export const HeaderData = z
  .object({
    logo: ImageData,
    navigations: z.array(LinkData),
  })
  .default({
    logo: {
      src: legacyConfig.navBar.logo.url,
      alt: legacyConfig.navBar.logo.alt,
    },
    navigations: legacyConfig.navBar.buttons,
  });

export type HeaderData = z.infer<typeof HeaderData>;
