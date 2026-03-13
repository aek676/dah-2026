import { Component } from '@angular/core';
import { NavController } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

interface Reservation {
  id: number;
  clientName: string;
  service: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-reservations',
  templateUrl: 'reservations.page.html',
  styleUrls: ['reservations.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonButton],
})
export class ReservationsPage {

  constructor(private navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  reservations: Reservation[] = [
    { id: 1, clientName: 'John Doe', service: 'Haircut', date: '2024-03-15', time: '10:00 AM' },
    { id: 2, clientName: 'Jane Smith', service: 'Manicure', date: '2024-03-15', time: '2:00 PM' },
    { id: 3, clientName: 'Bob Johnson', service: 'Massage', date: '2024-03-16', time: '11:30 AM' },
    { id: 4, clientName: 'Alice Brown', service: 'Facial', date: '2024-03-16', time: '3:00 PM' },
    { id: 5, clientName: 'Charlie Wilson', service: 'Hair Color', date: '2024-03-17', time: '9:00 AM' },
  ];

  createReservation() {
    this.navCtrl.navigateForward('/tabs/reservations/create');
  }
}
