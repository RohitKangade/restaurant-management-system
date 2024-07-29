import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-food-item',
  templateUrl: './delete-food-item.component.html',
  styleUrls: ['./delete-food-item.component.css']
})
export class DeleteFoodItemComponent implements OnInit {
  apiUrl: string = "http://localhost:8080/";

  menuItems: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchMenuItems();
  }

  fetchMenuItems() {
    this.http.get<any[]>(this.apiUrl + "get-all-dish").subscribe(
      (data) => {
        this.menuItems = data.map(item => ({
          id: item.dishId,
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

  deleteDish(dishId: number) {
    console.log(`Deleting dish with ID: ${dishId}`); // Debug log
    this.http.delete(this.apiUrl + "delete-dish/" + dishId).subscribe(
      (response) => {
        console.log('Dish deleted successfully:', response);
        this.fetchMenuItems(); // Refresh the menu items list
      },
      (error) => {
        console.error('Error deleting dish:', error);
        alert('Error deleting dish. Please try again.'); // User-friendly error message
      }
    );
  }
}
