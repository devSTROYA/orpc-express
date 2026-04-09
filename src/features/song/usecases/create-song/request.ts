import { z } from 'zod';
import { SongSchema } from '../../schemas';

export const Schema = SongSchema.omit({ id: true });

export type Request = z.infer<typeof Schema>;
