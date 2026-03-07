import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-client-detail',
  templateUrl: 'client-detail.page.html',
  styleUrls: ['client-detail.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon],
})
export class ClientDetailPage implements OnInit {
  @Input() id?: string;

  private route = inject(ActivatedRoute);

  constructor() {
    addIcons({ arrowBack });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? undefined;
  }

  goBack() {
    window.history.back();
  }
}