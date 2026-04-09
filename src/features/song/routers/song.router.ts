import { SongRepository } from '../repositories';
import { SongService } from '../services';

const songRepository = new SongRepository();
const songService = new SongService(songRepository);

export const songRouter = {
  list: songService.list.route({ path: '/songs', method: 'GET' }),
  find: songService.find.route({ path: '/songs/:id', method: 'GET' }),
  create: songService.create.route({ path: '/songs', method: 'POST' }),
  update: songService.update.route({ path: '/songs/:id', method: 'PUT' }),
  delete: songService.delete.route({ path: '/songs/:id', method: 'DELETE' }),
};
