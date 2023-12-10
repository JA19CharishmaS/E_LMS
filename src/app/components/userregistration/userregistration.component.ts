import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  userRegistrationForm!: FormGroup;
  submitted = false;
  user: any = {};

  constructor(private fb: FormBuilder, private jwtClientService: JwtClientService,private router:Router) {}

  ngOnInit() {
    this.userRegistrationForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      accountstatus: ['', Validators.required]
    });
  }

  get f() {
    return this.userRegistrationForm.controls;
  }

  registerUser() {
    this.submitted = true;
    console.log('Form Valid:', this.userRegistrationForm.valid);
  console.log('Form Values:', this.userRegistrationForm.value);
  
  
    if (this.userRegistrationForm.valid) {
      this.jwtClientService.registerUser(this.userRegistrationForm.value).subscribe(
        (response: any) => {
          console.log('Registration successful:', response);
          alert('Registration successful');
          localStorage.setItem('token', response.token);
          this.router.navigate(['/userlogin']);
        },
        (error: any) => {
          console.error('Registration failed:', error);
          alert('Registration failed. Check console for details.');
        }
      );
    } else {
      console.error('Form invalid. Cannot submit.');
    }
  }
  
}
