import { Component, OnInit } from '@angular/core';

interface Order {
  id: number;
  status: string;
  details: string;
}

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  orders: Order[] = [
    { id: 1, status: 'Pending', details: 'Order details 1' },
    { id: 2, status: 'Cancelled', details: 'Order details 2' },
    { id: 3, status: 'Completed', details: 'Order details 3' },
    // Add more orders as needed
  ];

  searchText: string = '';
  filteredOrders: Order[] = [];

  ngOnInit(): void {
    this.filterOrders();
  }

  filterOrders(): void {
    this.filteredOrders = this.orders
      .filter(order => order.details.toLowerCase().includes(this.searchText.toLowerCase()))
      .sort((a, b) => {
        if (a.status === 'Pending') return -1;
        if (a.status === 'Cancelled' && b.status !== 'Pending') return -1;
        if (a.status === 'Completed' && b.status !== 'Pending' && b.status !== 'Cancelled') return -1;
        return 1;
      });
  }

  markAsDelivered(orderId: number): void {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = 'Completed';
      this.filterOrders();
    }
  }
}
