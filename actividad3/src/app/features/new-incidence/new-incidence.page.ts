import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-new-incidence',
  templateUrl: './new-incidence.page.html',
  styleUrls: ['./new-incidence.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewIncidencePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
