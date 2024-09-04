import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: AngularFirestore) { }

  // Get all products
  getProducts(): Observable<any[]> {
    return this.firestore.collection('products').valueChanges();
  }

  // Get a single product
  getProduct(id: string): Observable<any> {
    return this.firestore.collection('products').doc(id).valueChanges();
  }

  // Add a new product
  addProduct(product: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('products').doc(id).set(product);
  }

  // Update a product
  updateProduct(id: string, product: any): Promise<void> {
    return this.firestore.collection('products').doc(id).update(product);
  }

  // Delete a product
  deleteProduct(id: string): Promise<void> {
    return this.firestore.collection('products').doc(id).delete();
  }
}
