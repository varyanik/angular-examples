import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '../../store';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Song {
  id: number,
  name: string,
  listened: boolean,
  favourite: boolean
}

@Injectable()
export class SongsService {

  getPlaylist$: Observable<Song[]>;

  constructor(
    private http: HttpClient,
    private store: Store
  ) {
    this.getPlaylist$ = this.http
      .get('/api/playlist').pipe(
        tap(next => this.store.set('playlist', next))
      ) as Observable<Song[]>;
  }

  toggle(event: any) {
    this.http
      .put(`/api/playlist/${event.track.id}`, event.track)
      .subscribe((track: Song) => {
        const value = this.store.value.playlist;

        const playlist = value.map((song: Song) => {
          if (event.track.id === song.id) {
            return { ...song, ...event.track };
          } else {
            return song;
          }
        });

        this.store.set('playlist', playlist);

      });
  }

}