import { SongRepository } from '../repositories';
import { CreateSongRequest, CreateSongResponse } from '../usecases/create-song';
import { FindSongRequest, FindSongResponse } from '../usecases/find-song';
import { GetSongsRequest, GetSongsResponse } from '../usecases/get-songs';
import { RemoveSongRequest, RemoveSongResponse } from '../usecases/remove-song';
import { UpdateSongRequest, UpdateSongResponse } from '../usecases/update-song';

export class SongService {
  constructor(readonly repository: SongRepository) {}

  async listSongs(request: GetSongsRequest): Promise<GetSongsResponse> {
    return await this.repository.getSongs(request);
  }

  async findSong(request: FindSongRequest): Promise<FindSongResponse> {
    const data = await this.repository.findSong(request);
    return { data };
  }

  async createSong(request: CreateSongRequest): Promise<CreateSongResponse> {
    return await this.repository.createSong(request);
  }

  async updateSong(request: UpdateSongRequest): Promise<UpdateSongResponse> {
    return await this.repository.updateSong(request);
  }

  async deleteSong(request: RemoveSongRequest): Promise<RemoveSongResponse> {
    return await this.repository.deleteSong(request);
  }
}
