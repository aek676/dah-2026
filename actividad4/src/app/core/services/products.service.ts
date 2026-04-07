import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  docData,
  Firestore,
  query,
  where,
  collectionData,
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
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
    if (!uid) throw new Error('No authenticated user');

    return addDoc(this.productsCollection, { ...product, userId: uid });
  }

  public allProducts = toSignal(this.getAllProducts(), { initialValue: [] });

  getAllProducts() {
    return collectionData(this.productsCollection, {
      idField: 'id',
    }) as Observable<Product[]>;
  }

  getProductById(id: string): Observable<Product | undefined> {
    const productDoc = doc(this.firestore, `products/${id}`);
    return docData(productDoc, { idField: 'id' }) as Observable<Product | undefined>;
  }

  async deleteProduct(id: string) {
    const productDoc = doc(this.firestore, `products/${id}`);
    return deleteDoc(productDoc);
  }
}
