import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  apiUrl: string = "http://localhost:8080/";
  menuItems: any[] = [];
  filteredMenuItems: any[] = [];
  searchTerm: string = '';
  selectedFilter: string = '';

  constructor(private http: HttpClient, private cartService: CartService) { }

  ngOnInit() {
    this.fetchMenuItems();
  }

  fetchMenuItems() {
    this.http.get<any[]>(this.apiUrl + "get-all-dish").subscribe(
      (data) => {
        this.menuItems = data.map(item => ({
          name: item.dishName,
          description: item.dishType,
          price: item.dishPrice,
          quantity: 1 // Default quantity
        }));
        this.filteredMenuItems = [...this.menuItems];
      },
      (error) => {
        console.error('Error fetching menu items:', error);
      }
    );
  }

  filterMenuItems() {
    let tempItems = [...this.menuItems];

    if (this.searchTerm) {
      tempItems = tempItems.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.selectedFilter) {
      tempItems = tempItems.filter(item => item.description === this.selectedFilter);
    }

    this.filteredMenuItems = tempItems;
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  orderItem(item: any) {
    const orderItem = { ...item, quantity: item.quantity };
    this.cartService.addToCart(orderItem);
    alert(`${item.name} added to cart`);
  }
}
