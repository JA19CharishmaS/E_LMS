import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/model/AuthRequest';
import { JwtClientService } from 'src/app/services/jwt-client.service';
import { UserService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  response: any;
  token: any;
  authRequest: AuthRequest = new AuthRequest();
  isLoggedIn: boolean = false; 

  constructor(private userService:UserService, private router: Router,private jwtService:JwtClientService) {}

  readFormData(formData: any) {
    this.authRequest.username = formData.form.value.username;
    this.authRequest.password = formData.form.value.password;
    
    this.getAccessToken(this.authRequest);
  }

  getAccessToken(authRequest: any) {
    let response = this.userService.getGeneratedToken(authRequest);

    response.subscribe((genToken) => {
      this.token = genToken;
     
      this.jwtService.storeToken(genToken);
      console.log(genToken);
      this.accessApi(this.token);
    });
  }

  accessApi(token: any) {
    let response = this.userService.authorizationTestForUser(token);
  
    response.subscribe(
      (responseData) => {
        this.response = responseData;
        console.log(responseData);
        console.log(token);
        if (responseData === true) {
          this.isLoggedIn = true;
          console.log(this.isLoggedIn);
          alert('Login successful'); 
          this.navigateToUserDashboard();
        }
      }
    );
  }



navigateToUserDashboard() {
  this.router.navigate(['/user-dashboard']);
}
logout() {
  console.log('Logout button clicked'); 
  this.isLoggedIn = false; 
  console.log('isLoggedIn:', this.isLoggedIn); 

  
  this.router.navigate(['/welcome']); 
}
}
