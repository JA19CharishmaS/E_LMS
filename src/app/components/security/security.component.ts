import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/model/AuthRequest';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  
  response:any;
  token:any;
  isLoggedIn: boolean = false; 

  authRequest: AuthRequest = new AuthRequest();
  constructor(private jwtService:JwtClientService, private router: Router){}


  ngOnInit(): void {
    
    
  }


   readFormData(formData:any){

      this.authRequest.username = formData.form.value.username;
      this.authRequest.password = formData.form.value.password;

      this.getAccessToken(this.authRequest);

   }



  public getAccessToken(authRequest:any){

   let response =  this.jwtService.getGeneratedToken(authRequest);

      response.subscribe( (genToken)=> 
      {  this.token = genToken ;
        this.jwtService.storeToken(genToken);
        console.log(genToken);  
        this.accessApi(this.token) });

      

  }

  public accessApi(token:any){

   
      let response = this.jwtService. authorizationTest(token);
    
      response.subscribe(
        (responseData) => {
          this.response = responseData;
          console.log(responseData);
          console.log(token);
          if (responseData === true) {
            this.isLoggedIn = true;
            console.log(this.isLoggedIn);
            alert('Login successful'); 
            this.navigateToAdminDashboard();
          }
        }
      );
    }
    
    
    navigateToAdminDashboard() {
      this.router.navigate(['/admindashboard']);
    }


}

