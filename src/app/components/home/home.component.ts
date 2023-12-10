import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedIn: boolean = false;


  constructor(private authService: AuthService,private router:Router) {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
  
    


  logout() {
    this.authService.logout();
    this.router.navigate(['/welcome']);
    this.isLoggedIn = false; // Ensure isLoggedIn is updated
  }
}
