import { z } from 'zod';

export const SongSchema = z.object({
  id: z.string(),
  title: z.string(),
  artist: z.string(),
  album: z.string().optional(),
  durationInSeconds: z.int().min(0),
  releaseYear: z.string(),
});
