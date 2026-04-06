import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  LoadingController,
  ToastController,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonTextarea,
} from '@ionic/angular/standalone';
import { ProductsService } from 'src/app/core/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
    IonTextarea,
  ],
})
export class AddProductPage {
  private productService = inject(ProductsService);
  private router = inject(Router);
  private loadingController = inject(LoadingController);
  private toastController = inject(ToastController);

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
  });

  async addProduct() {
    if (this.productForm.invalid) return;

    const loading = await this.loadingController.create({
      message: 'Saving...',
    });

    await loading.present();

    try {
      await this.productService.addProduct(this.productForm.value as any);

      this.showToast('Product added');
      this.router.navigate(['/products']);
    } catch (error) {
      this.showToast('Error to save', 'danger');
    } finally {
      loading.dismiss();
    }
  }

  async showToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
    });

    toast.present();
  }
}
