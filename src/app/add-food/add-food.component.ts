import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.css'
})
export class AddFoodComponent implements OnInit {
  apiUrl: string = "http://localhost:8080/";

  menuItems: any[] = [];
  newDishName: string = '';
  newDishType: string = '';
  newDishPrice: number = 0;

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
          image: `images/${item.image || 'default-image.jpg'}`
        }));
      },
      (error) => {
        console.error('Error fetching menu items:', error);
      }
    );
  }

  orderItem(item: any) {
    this.cartService.addToCart(item);
    alert("Item added to cart");
  }

  addDish() {
    const newDish = {
      dishName: this.newDishName,
      dishType: this.newDishType,
      dishPrice: this.newDishPrice
    };

    this.http.post(this.apiUrl + "add-dish", newDish).subscribe(
      (response) => {
        console.log('Dish added successfully:', response);

        this.fetchMenuItems();

        this.newDishName = '';
        this.newDishType = '';
        this.newDishPrice = 0;
      },
      (error) => {
        console.error('Error adding dish:', error);
      }
    );
  }
}
