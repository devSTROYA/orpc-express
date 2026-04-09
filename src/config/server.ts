import { z } from 'zod';

export const config = z.object({
  APP_PORT: z.coerce.number('APP_PORT is required'),
  NODE_ENV: z.string('NODE_ENV is required'),
  JWT_SECRET: z.string('JWT_SECRET is required'),
});
