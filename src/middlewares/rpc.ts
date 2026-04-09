import { RPCHandler } from '@orpc/server/node';
import { NextFunction, Request, Response } from 'express';
import { songRouter } from '../features/song';

const rpc = new RPCHandler({ songs: songRouter });

export const rpcMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { matched } = await rpc.handle(req, res, {
    prefix: '/rpc',
    context: { headers: req.headers },
  });

  if (matched) return;

  next();
};
