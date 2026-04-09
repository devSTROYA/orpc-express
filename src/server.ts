import express from 'express';

import { Config } from './common';
import { serverConfig } from './config';
import { openapiMiddleware } from './middlewares';

export const config = Config.register(serverConfig);

const app = express();
app.use(express.json());
app.use('/api', openapiMiddleware);

export const bootstrap = async () => {
  console.info(`Running on port ${config.APP_PORT}`);
  app.listen(config.APP_PORT);
};
