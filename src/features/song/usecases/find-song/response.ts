import { z } from 'zod';
import { SongSchema } from '../../schemas';

export const Schema = z.object({
  data: SongSchema,
});

export type Response = z.infer<typeof Schema>;
