import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Customer {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  customer: Customer | null = null;
  errorMessage: string = '';

  apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient, private rout: Router) { }

  validateCredentials() {
    this.errorMessage = '';
    this.http.get<Customer>(this.apiUrl + "get-by-email/" + this.email).subscribe(
      success => {
        this.customer = success;
        if (this.customer) {
          if (this.customer.password === this.password) {

            this.customer = this.customer;
            this.rout.navigateByUrl("/")
          } else {
            this.errorMessage = 'Password does not match.';
          }
        } else {
          this.errorMessage = 'Customer with this email not found.';
        }
      },
      error => {
        console.error('Error fetching customer:', error);
        this.errorMessage = 'Error fetching customer data.';
      }
    );
  }
}
