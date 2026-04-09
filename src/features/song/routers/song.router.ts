import { SongController } from '../controllers';
import { SongRepository } from '../repositories';
import { SongService } from '../services';

const repository = new SongRepository();
const service = new SongService(repository);
const controller = new SongController(service);

export const songRouter = {
  list: controller.listSongs().route({ path: '/songs', method: 'GET' }),
  find: controller.findSong().route({ path: '/songs/:id', method: 'GET' }),
  create: controller.createSong().route({ path: '/songs', method: 'POST' }),
  update: controller.updateSong().route({ path: '/songs/:id', method: 'PUT' }),
  delete: controller.deleteSong().route({ path: '/songs/:id', method: 'DELETE' }),
};
