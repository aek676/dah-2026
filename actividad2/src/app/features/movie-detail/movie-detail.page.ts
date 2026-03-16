import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonImg,
  IonGrid,
  IonCol,
  IonRow,
  IonCard,
  IonCardContent,
  IonButton,
  IonBadge,
} from '@ionic/angular/standalone';
import { MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: 'movie-detail.page.html',
  styleUrls: ['movie-detail.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonBackButton,
    IonButtons,
    IonImg,
    IonGrid,
    IonCol,
    IonRow,
    IonCard,
    IonCardContent,
    IonButton,
    IonBadge,
  ],
})
export class MovieDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  public movieService = inject(MovieService);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieDetails(id);
    }
  }

  toggleFavorite() {
    const movie = this.movieService.currentMovie();
    if (movie) {
      this.movieService.toggleFavorite(movie);
    }
  }

  isFavorite(): boolean {
    const movie = this.movieService.currentMovie();
    return movie ? this.movieService.isFavorite(movie.imdbID) : false;
  }
}
