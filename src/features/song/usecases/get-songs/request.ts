import { z } from 'zod';

export const Schema = z.object({
  limit: z.number().int().min(1).max(100).optional(),
  cursor: z.string().optional(),
});

export type Request = z.infer<typeof Schema>;
