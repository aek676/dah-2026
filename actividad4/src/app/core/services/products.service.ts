import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  query,
  where,
} from 'firebase/firestore';
import { AuthService } from './auth.service';
import { collectionData } from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private productsCollection = collection(this.firestore, 'products');

  private products$ = this.authService.user$.pipe(
    switchMap((user) => {
      if (user) {
        const q = query(
          this.productsCollection,
          where('userId', '==', user.uid),
        );
        return collectionData(q, { idField: 'id' }) as Observable<Product[]>;
      }

      return of([]);
    }),
  );

  public products = toSignal(this.products$, { initialValue: [] });

  async addProduct(product: Product) {
    const uid = this.authService.getUID();
    if (!uid) throw new Error('No hay usuario autenticado');

    return addDoc(this.productsCollection, { ...product, userId: uid });
  }
}
