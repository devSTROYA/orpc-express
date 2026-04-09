import { SongController } from '../controllers';
import { SongRepository } from '../repositories';
import { SongService } from '../services';

const repository = new SongRepository();
const service = new SongService(repository);
const controller = new SongController(service);

export const songRouter = {
  list: controller.listSongs().route({ path: '/songs', method: 'GET', summary: 'List songs' }),
  find: controller.findSong().route({ path: '/songs/:id', method: 'GET', summary: 'Find song' }),
  create: controller.createSong().route({ path: '/songs', method: 'POST', summary: 'Create song' }),
  update: controller
    .updateSong()
    .route({ path: '/songs/:id', method: 'PUT', summary: 'Update song' }),
  delete: controller
    .deleteSong()
    .route({ path: '/songs/:id', method: 'DELETE', summary: 'Delete song' }),
};
