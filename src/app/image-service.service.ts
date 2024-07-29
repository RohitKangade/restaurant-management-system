import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor() { }

  getImageUrl(name: string): string {
    const imageMap: { [key: string]: string } = {
      'Paneer Tikka': 'https://geekrobocook.com/wp-content/uploads/2021/03/6.-Paneer-Tikka.jpg',
      'Seekh Kabab': 'https://via.placeholder.com/150?text=Seekh+Kabab',
      'Hariyali Kabab': 'https://via.placeholder.com/150?text=Hariyali+Kabab',
      'Green Salad': 'https://via.placeholder.com/150?text=Green+Salad',
      'Cheese Pakoda': 'https://via.placeholder.com/150?text=Cheese+Pakoda',
      // Add more mappings as needed
    };
    return imageMap[name] || 'https://via.placeholder.com/150?text=No+Image';
  }
}
