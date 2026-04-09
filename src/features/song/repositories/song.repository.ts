import { randomUUID } from 'crypto';
import { Song } from '../models/song';
import { CreateSongRequest, CreateSongResponse } from '../usecases/create-song';
import { FindSongRequest } from '../usecases/find-song';
import { GetSongsRequest, GetSongsResponse } from '../usecases/get-songs';
import { RemoveSongRequest, RemoveSongResponse } from '../usecases/remove-song';
import { UpdateSongRequest, UpdateSongResponse } from '../usecases/update-song';

export class Repository {
  private songs: Map<string, Song> = new Map();

  constructor() {}

  async getSongs(request: GetSongsRequest): Promise<GetSongsResponse> {
    const { limit, cursor } = request;
    let songs = Array.from(this.songs.values());

    if (cursor) {
      songs = songs.filter((song) => song.id > cursor);
    }
    if (limit) {
      songs = songs.slice(0, limit);
    }
    return { data: songs };
  }

  async findSong(request: FindSongRequest): Promise<Song | null> {
    return this.songs.get(request.id) ?? null;
  }

  async createSong(request: CreateSongRequest): Promise<CreateSongResponse> {
    const id = randomUUID();
    this.songs.set(id, { id, ...request });
  }

  async updateSong(request: UpdateSongRequest): Promise<UpdateSongResponse> {
    this.songs.set(request.id, request);
  }

  async deleteSong(request: RemoveSongRequest): Promise<RemoveSongResponse> {
    this.songs.delete(request.id);
  }
}
