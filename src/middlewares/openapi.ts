import { OpenAPIGenerator } from '@orpc/openapi';
import { OpenAPIHandler } from '@orpc/openapi/node';
import { ZodSmartCoercionPlugin, ZodToJsonSchemaConverter } from '@orpc/zod';
import { NextFunction, Request, Response } from 'express';
import { songRouter } from '../features/song';

const openapi = new OpenAPIHandler(
  { songs: songRouter },
  {
    plugins: [new ZodSmartCoercionPlugin()],
    customErrorResponseBodyEncoder(error) {
      return { error: { code: error.message } };
    },
  },
);

export const openapiMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { matched } = await openapi.handle(req, res, {
    prefix: '/api',
    context: { headers: req.headers },
  });

  if (matched) return;

  next();
};

export const openApiGenerator = new OpenAPIGenerator({
  schemaConverters: [new ZodToJsonSchemaConverter()],
});
