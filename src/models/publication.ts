import { z } from 'zod';
import { NonEmptyString } from './nonEmptyString';

export const BlogsCard = z.object({ content: NonEmptyString });

export type BlogsCard = z.infer<typeof BlogsCard>;
