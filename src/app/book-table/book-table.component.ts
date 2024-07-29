import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})
export class BookTableComponent {
  tableForm!: FormGroup;



  backEndUrl: string = "http://localhost:8080/"
  records: any = []

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
    this.tableForm = new FormGroup(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        mobno: new FormControl('', [
          Validators.maxLength(10),
          Validators.required,
          Validators.pattern('^[0-9]{10}$'),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        NumberOfPersons: new FormControl('', [
          Validators.min(1), Validators.max(50),
          Validators.required,
        ]),

      },

    );


  }


  get firstName(): any {
    return this.tableForm.get('firstName');
  }

  get forlastName(): any {
    return this.tableForm.get('lastName');
  }
  get forMob(): any {
    return this.tableForm.get('mobno');
  }
  get forEmail(): any {
    return this.tableForm.get('email');
  }
  get forNumberOfperson(): any {
    return this.tableForm.get('password');
  }



  handleSubmit() {
    if (this.tableForm.invalid) {
      if (this.firstName.errors?.required) {
        alert('First Name is required');
      }
      if (this.forlastName.errors?.required) {
        alert('Last Name is required');
      }
      if (this.forMob.errors?.maxlength || this.forMob.errors?.pattern) {
        alert('Mobile number must have exactly 10 digits');
      } else if (this.forMob.errors?.required) {
        alert('Mobile number is required');
      }
      if (this.forEmail.errors?.required || this.forEmail.errors?.email) {
        alert('Email is required and must be in a valid format');
      }
      if (this.forNumberOfperson.errors?.min) {
        alert('At least 1 Person is requred');
      }
      else if (this.forNumberOfperson.errors.max) {
        alert('max 50 Person only');
      } else if (this.forNumberOfperson.errors?.required) {
        alert('number of person is requred.');
      }


    } else {
      // api connection.
      this.http.post(this.backEndUrl + "add-table-book", this.tableForm.value).subscribe(
        success => {
          alert("Registration Successfull")
          this.tableForm.reset()
          this.router.navigateByUrl("/login")
        }, error => {
          console.log(error);
          alert("Data Not Submited")
        }
      )
      this.router.navigate(['/login']);
    }
  }
}
