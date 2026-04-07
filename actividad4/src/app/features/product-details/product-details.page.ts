import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonThumbnail,
  IonLabel,
  IonItem,
  IonButton,
  IonIcon,
  ToastController,
} from '@ionic/angular/standalone';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/models/products.model';
import { Observable } from 'rxjs';
import { trashOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

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
    IonButton,
    IonIcon,
  ],
})
export class ProductDetailsPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productsService = inject(ProductsService);
  private alertController = inject(AlertController);
  private toastController = inject(ToastController);

  product$!: Observable<Product | undefined>;
  private productId: string | null = null;

  constructor() {
    addIcons({ trashOutline });
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.product$ = this.productsService.getProductById(this.productId);
    } else {
      this.router.navigate(['/products']);
    }
  }

  async confirmDelete() {
    if (!this.productId) return;

    const alert = await this.alertController.create({
      header: 'Delete Product',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => this.deleteProduct(),
        },
      ],
    });

    await alert.present();
  }

  async deleteProduct() {
    if (!this.productId) return;

    try {
      await this.productsService.deleteProduct(this.productId);
      this.showToast('Product deleted');
      this.router.navigate(['/products']);
    } catch (error) {
      this.showToast('Error deleting product', 'danger');
    }
  }

  async showToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color,
    });
    await toast.present();
  }
}