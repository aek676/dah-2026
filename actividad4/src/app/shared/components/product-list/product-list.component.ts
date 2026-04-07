import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
} from '@ionic/angular/standalone';
import { Product } from '../../../core/models/products.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, IonList, IonItem, IonThumbnail, IonLabel],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() isClickable: boolean = false;
  @Input() emptyMessage: string = 'No products available.';
}