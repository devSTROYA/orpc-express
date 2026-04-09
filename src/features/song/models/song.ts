import { z } from 'zod';
import { SongSchema } from '../schemas';

export type Song = z.infer<typeof SongSchema>;
