import { os } from '@orpc/server';
import { SongRepository } from '../repositories';
import { CreateSongRequestSchema } from '../usecases/create-song';
import { FindSongRequestSchema } from '../usecases/find-song';
import { GetSongsRequestSchema } from '../usecases/get-songs';
import { RemoveSongRequestSchema } from '../usecases/remove-song';
import { UpdateSongRequestSchema } from '../usecases/update-song';

export class SongService {
  constructor(readonly repository: SongRepository) {}

  get list() {
    return os.input(GetSongsRequestSchema).handler(async ({ input }) => {
      return await this.repository.getSongs(input);
    });
  }

  get find() {
    return os.input(FindSongRequestSchema).handler(async ({ input }) => {
      return await this.repository.findSong(input);
    });
  }

  get create() {
    return os.input(CreateSongRequestSchema).handler(async ({ input }) => {
      return await this.repository.createSong(input);
    });
  }

  get update() {
    return os.input(UpdateSongRequestSchema).handler(async ({ input }) => {
      return await this.repository.updateSong(input);
    });
  }

  get delete() {
    return os.input(RemoveSongRequestSchema).handler(async ({ input }) => {
      return await this.repository.deleteSong(input);
    });
  }
}
