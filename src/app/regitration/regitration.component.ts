import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regitration',
  templateUrl: './regitration.component.html',
  styleUrl: './regitration.component.css'
})
export class RegitrationComponent {
  regForm!: FormGroup;



  backEndUrl: string = "http://localhost:8080/"
  records: any = []

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
    this.regForm = new FormGroup(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        mobno: new FormControl('', [
          Validators.maxLength(10),
          Validators.required,
          Validators.pattern('^[0-9]{10}$'),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.minLength(8),
          Validators.required,
        ]),
        conformpassword: new FormControl('', [
          Validators.minLength(8),
          Validators.required,
        ]),

      },
      { validators: this.passwordMatchValidator }
    );


  }

  private passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('conformpassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value
      ? null
      : { passwordMismatch: true };
  };

  get firstName(): any {
    return this.regForm.get('firstName');
  }

  get forlastName(): any {
    return this.regForm.get('lastName');
  }
  get forMob(): any {
    return this.regForm.get('mobno');
  }
  get forEmail(): any {
    return this.regForm.get('email');
  }
  get forPassword(): any {
    return this.regForm.get('password');
  }
  get forConformpass(): any {
    return this.regForm.get('conformpassword');
  }


  handleSubmit() {
    if (this.regForm.invalid) {
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
      if (this.forPassword.errors?.minlength) {
        alert('Password should be at least 8 characters long');
      } else if (this.forPassword.errors?.required) {
        alert('Password is required');
      }
      if (this.forConformpass.errors?.minlength) {
        alert('Confirm Password should be at least 8 characters long');
      } else if (this.forConformpass.errors?.required) {
        alert('Confirm Password is required');
      }
      if (this.regForm.hasError('passwordMismatch')) {
        alert('Password and Confirm Password must match');
      }

    } else {
      // api connection.
      this.http.post(this.backEndUrl + "add-customer", this.regForm.value).subscribe(
        success => {
          alert("Registration Successfull")
          this.regForm.reset()
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
