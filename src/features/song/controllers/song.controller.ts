import { os } from '@orpc/server';
import { SongService } from '../services';
import { CreateSongRequestSchema } from '../usecases/create-song';
import { FindSongRequestSchema } from '../usecases/find-song';
import { GetSongsRequestSchema } from '../usecases/get-songs';
import { RemoveSongRequestSchema } from '../usecases/remove-song';
import { UpdateSongRequestSchema } from '../usecases/update-song';

export class SongController {
  constructor(readonly service: SongService) {}

  listSongs() {
    return os.input(GetSongsRequestSchema).handler(async ({ input }) => {
      return await this.service.listSongs(input);
    });
  }

  findSong() {
    return os.input(FindSongRequestSchema).handler(async ({ input }) => {
      return await this.service.findSong(input);
    });
  }

  createSong() {
    return os.input(CreateSongRequestSchema).handler(async ({ input }) => {
      return await this.service.createSong(input);
    });
  }

  updateSong() {
    return os.input(UpdateSongRequestSchema).handler(async ({ input }) => {
      return await this.service.updateSong(input);
    });
  }

  deleteSong() {
    return os.input(RemoveSongRequestSchema).handler(async ({ input }) => {
      return await this.service.deleteSong(input);
    });
  }
}
