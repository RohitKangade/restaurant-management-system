import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Admin {
  email: string;
  password: string;
}
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  email: string = '';
  password: string = '';
  admin: Admin | null = null;
  errorMessage: string = '';

  apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient, private rout: Router) { }

  validateCredentials() {
    this.errorMessage = '';
    this.http.get<Admin>(this.apiUrl + "get-by-email-admin/" + this.email).subscribe(
      success => {
        this.admin = success;
        if (this.admin) {
          if (this.admin.password === this.password) {

            this.admin = this.admin;
            this.rout.navigateByUrl("/admincontrol")
          } else {
            this.errorMessage = 'Password does not match.';
          }
        } else {
          this.errorMessage = 'Admin with this email not found.';
        }
      },
      error => {
        console.error('Error fetching Admin:', error);
        this.errorMessage = 'Error fetching Admin data.';
      }
    );
  }
}