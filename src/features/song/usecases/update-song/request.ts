import { z } from 'zod';
import { SongSchema } from '../../schemas';

export const Schema = SongSchema;

export type Request = z.infer<typeof Schema>;
