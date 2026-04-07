import { Component, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonButtons,
} from '@ionic/angular/standalone';
import { ProductsService } from 'src/app/core/services/products.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { add, logOutOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ProductListComponent } from 'src/app/shared/components/product-list/product-list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
    IonButtons,
    ProductListComponent,
  ],
})
export class ProductsPage {
  public productService = inject(ProductsService);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    addIcons({ add, logOutOutline });
  }

  goToAddProduct() {
    this.router.navigate(['/add-product']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}