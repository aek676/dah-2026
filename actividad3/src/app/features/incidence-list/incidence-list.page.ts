import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonText,
  ToastController,
} from '@ionic/angular/standalone';
import { IncidenceService } from '../../core/services/incidence.service';
import { Incidence } from '../../core/models/incidence.model';

const SAMPLE_INCIDENCES: Incidence[] = [
  {
    id: '1',
    photoUri: 'https://via.placeholder.com/150',
    latitude: 37.3891,
    longitude: -5.9845,
    timestamp: Date.now() - 86400000,
  },
  {
    id: '2',
    photoUri: 'https://via.placeholder.com/150',
    latitude: 40.4168,
    longitude: -3.7038,
    timestamp: Date.now() - 172800000,
  },
  {
    id: '3',
    photoUri: 'https://via.placeholder.com/150',
    latitude: 41.3874,
    longitude: 2.1686,
    timestamp: Date.now() - 259200000,
  },
];

@Component({
  selector: 'app-incidence-list',
  templateUrl: './incidence-list.page.html',
  styleUrls: ['./incidence-list.page.scss'],
  standalone: true,
  imports: [
    DatePipe,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonText,
  ],
})
export class IncidenceListPage implements OnInit {
  public incidences: Incidence[] = [];

  private incidenceService = inject(IncidenceService);
  private toastController = inject(ToastController);

  ngOnInit() {
    const saved = this.incidenceService.getAll();
    this.incidences = saved.length > 0 ? saved : SAMPLE_INCIDENCES;
  }

  async showUnderConstruction(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'En construcción',
      duration: 2000,
      color: 'warning',
    });
    await toast.present();
  }
}
