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

  private _favorites = signal<OMDbMovie[]>([]);
  public favorites = this._favorites.asReadonly();

  public totalResults = computed(() => this._movies().length);
  public favoritesCount = computed(() => this._favorites().length);

  public toggleFavorite(movie: OMDbMovie) {
    const currentFavorites = this._favorites();
    const isAlreadyFavorite = currentFavorites.some(m => m.imdbID === movie.imdbID);

    if (isAlreadyFavorite) {
      this._favorites.set(currentFavorites.filter(m => m.imdbID !== movie.imdbID));
    } else {
      this._favorites.set([...currentFavorites, movie]);
    }
  }

  public isFavorite(imdbID: string): boolean {
    return this._favorites().some(m => m.imdbID === imdbID);
  }

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
