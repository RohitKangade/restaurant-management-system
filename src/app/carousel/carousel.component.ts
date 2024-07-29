import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  // Replace the URLs with your image paths
  images = [
    'images/t.jpg',
    'images/mm.jpg',
    'images/s.jpg',
    'images/ai.jpg',
    'images/p.jpg',
  ];
}
