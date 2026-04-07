import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonThumbnail,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    IonList,
    IonThumbnail,
    IonItem,
    IonLabel,
  ],
})
export class ProductsListPage {
  public productsService = inject(ProductsService);

  constructor() {}
}
