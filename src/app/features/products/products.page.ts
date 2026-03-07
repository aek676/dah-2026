import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-products',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonButton, NgFor],
})
export class ProductsPage {
  private router = inject(Router);

  products: Product[] = [
    { id: 1, name: 'Shampoo', price: 15.99, description: 'Professional hair shampoo' },
    { id: 2, name: 'Conditioner', price: 16.99, description: 'Deep conditioning treatment' },
    { id: 3, name: 'Hair Oil', price: 24.99, description: 'Argan oil for hair care' },
    { id: 4, name: 'Face Mask', price: 12.99, description: 'Hydrating facial treatment' },
    { id: 5, name: 'Body Lotion', price: 18.99, description: 'Moisturizing body lotion' },
  ];

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}