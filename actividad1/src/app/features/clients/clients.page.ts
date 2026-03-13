import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.page.html',
  styleUrls: ['clients.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonLabel, RouterLink],
})
export class ClientsPage {
  clients: Client[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234 567 891' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 234 567 892' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', phone: '+1 234 567 893' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', phone: '+1 234 567 894' },
  ];

  constructor() {}
}