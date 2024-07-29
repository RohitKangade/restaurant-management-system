import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  cartItems: any[] = [];
  totalBill: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotalBill();
    });
  }

  orderItem(item: any) {
    this.cartService.addToCart(item);
    this.calculateTotalBill();
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
    this.calculateTotalBill();
  }

  increaseQuantity(index: number) {
    this.cartItems[index].quantity++;
    this.cartService.updateCart(this.cartItems);
    this.calculateTotalBill();
  }

  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.cartService.updateCart(this.cartItems);
      this.calculateTotalBill();
    }
  }

  calculateTotalBill() {
    this.totalBill = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  proceedToPay() {
    this.router.navigate(['/payment']);
  }
}
