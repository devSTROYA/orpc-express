import { apiReference } from '@scalar/express-api-reference';
import express from 'express';
import { readFile } from 'fs';
import { join } from 'path';

import { Config } from './common';
import { serverConfig } from './config';
import { songRouter } from './features/song';
import { openApiGenerator, openapiMiddleware, rpcMiddleware } from './middlewares';

export const config = Config.register(serverConfig);

const app = express();
app.use(express.json());
app.use('/rpc', rpcMiddleware);
app.use('/api', openapiMiddleware);
app.get('/openapi.json', async (_req, res) => {
  const spec = await openApiGenerator.generate(
    { songs: songRouter },
    {
      info: { title: 'Songs API', version: '1.0.0' },
      servers: [{ url: 'https://api.song.io' }],
    },
  );
  res.type('application/json').send(spec);
});

readFile(join(process.cwd(), 'statics', 'scalar.css'), 'utf-8', (_err, customCss) => {
  app.get(
    '/docs',
    apiReference({
      url: '/openapi.json',
      theme: 'kepler',
      customCss,
      hideModels: true,
      hideTestRequestButton: true,
      hideClientButton: true,
      withDefaultFonts: true,
      documentDownloadType: 'none',
      defaultHttpClient: { targetKey: 'shell', clientKey: 'curl' },
      _integration: 'express',
    }),
  );
});

export const bootstrap = async () => {
  console.info(`Running on port ${config.APP_PORT}`);
  app.listen(config.APP_PORT);
};
