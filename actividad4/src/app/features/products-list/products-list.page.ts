import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { ProductsService } from 'src/app/core/services/products.service';
import { ProductListComponent } from 'src/app/shared/components/product-list/product-list.component';

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
    IonButtons,
    IonBackButton,
    ProductListComponent,
  ],
})
export class ProductsListPage {
  public productsService = inject(ProductsService);

  constructor() {}
}
