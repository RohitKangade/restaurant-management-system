import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(item: any) {
    const currentItems = this.cartItemsSubject.getValue();
    const existingItem = currentItems.find(i => i.name === item.name);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      item.quantity = 1;
      currentItems.push(item);
    }

    this.cartItemsSubject.next(currentItems);
  }

  removeFromCart(index: number) {
    const currentItems = this.cartItemsSubject.getValue();
    currentItems.splice(index, 1);
    this.cartItemsSubject.next(currentItems);
  }

  updateCart(items: any[]) {
    this.cartItemsSubject.next(items);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
}
