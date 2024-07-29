import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;
  discount: number = 0; // Set a discount amount if applicable
  gstRate: number = 0.18; // Example GST rate
  cgstRate: number = 0.09; // Example CGST rate
  serviceCharge: number = 50; // Example service charge
  includeServiceCharge: boolean = true; // Default to include service charge

  gstAmount: number = 0;
  cgstAmount: number = 0;
  finalAmount: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotals();
    });
  }

  calculateTotals() {
    // Calculate total amount considering quantity
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Calculate GST and CGST amounts
    this.gstAmount = this.totalAmount * this.gstRate;
    this.cgstAmount = this.totalAmount * this.cgstRate;

    // Calculate final amount including GST, CGST, and service charge (if included)
    this.finalAmount = this.totalAmount + this.gstAmount + this.cgstAmount - this.discount;

    if (this.includeServiceCharge) {
      this.finalAmount += this.serviceCharge;
    }
  }

  updateFinalAmount() {
    this.calculateTotals();
  }

  confirmPayment() {
    // Add payment logic here
    alert('Payment successful!');
    // Clear the cart after payment
    this.cartService.clearCart();
    // Navigate back to the menu or a success page
    this.router.navigate(['/']);
  }
}
