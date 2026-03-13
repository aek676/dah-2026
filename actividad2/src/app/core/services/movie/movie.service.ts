import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OMDbMovie, OMDbSearchApiResponse } from '../../models/movies.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  private readonly API_URL = `https://www.omdbapi.com/?apikey=${environment.apikeyOMDb}`;

  private _movies = signal<OMDbMovie[]>([]);
  public movies = this._movies.asReadonly();

  private _currentMovie = signal<OMDbMovie | null>(null);
  public currentMovie = this._currentMovie.asReadonly();

  public totatResults = computed(() => this._movies().length);

  searchMovies(title: string) {
    this.http
      .get<OMDbSearchApiResponse>(`${this.API_URL}&s=${title}`)
      .subscribe((response) => {
        this._movies.set(response.Response === 'True' ? response.Search : []);
      });
  }

  getMovieDetails(id: string) {
    this.http.get<OMDbMovie>(`${this.API_URL}&i=${id}`).subscribe((movie) => {
      this._currentMovie.set(movie.Response === 'True' ? movie : null);
    });
  }
}
