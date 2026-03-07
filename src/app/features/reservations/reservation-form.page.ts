import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reservation-form',
  templateUrl: 'reservation-form.page.html',
  styleUrls: ['reservation-form.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton],
})
export class ReservationFormPage {
  constructor() {}
}