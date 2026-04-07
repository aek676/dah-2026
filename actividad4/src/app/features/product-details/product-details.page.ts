import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonThumbnail,
  IonLabel,
  IonItem,
} from '@ionic/angular/standalone';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/models/products.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    IonButtons,
    IonBackButton,
    IonThumbnail,
    IonLabel,
    IonItem,
  ],
})
export class ProductDetailsPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productsService = inject(ProductsService);

  product$!: Observable<Product | undefined>;

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product$ = this.productsService.getProductById(productId);
    } else {
      this.router.navigate(['/products']);
    }
  }
}