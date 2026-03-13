import { Component, inject } from '@angular/core';
import {
  IonContent,
  IonSearchbar,
  IonList,
  IonLabel,
  IonItem,
} from '@ionic/angular/standalone';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonSearchbar, IonList, IonLabel, IonItem, RouterLink],
})
export class HomePage {
  public movieService = inject(MovieService);

  onSearch(event: any) {
    const query = event.target.value;

    if (query) {
      this.movieService.searchMovies(query);
    }
  }
}
