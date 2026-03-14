import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonSearchbar,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { MovieCardPage } from '../movie-card/movie-card.page';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { addIcons } from 'ionicons';
import { star, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonSearchbar,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    MovieCardPage,
  ],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;
  public movieService = inject(MovieService);

  constructor() {
    addIcons({ star, closeOutline });
  }

  onSearch(event: any) {
    const query = event.target.value;

    if (query) {
      this.movieService.searchMovies(query);
    }
  }

  closeModal() {
    this.modal.dismiss();
  }
}
