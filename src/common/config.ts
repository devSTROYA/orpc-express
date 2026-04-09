import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({
  quiet: true,
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development.local',
});

export class Config {
  static register<T extends z.ZodObject>(config: T) {
    return config.parse(process.env);
  }
}
