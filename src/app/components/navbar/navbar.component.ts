import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false;


  constructor(private authService: AuthService,private router:Router) {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
  
    


  logout() {
    const confirmation = confirm("Do you want to logout?");
    
    if (confirmation) {
      this.authService.logout();
      this.router.navigate(['/welcome']);
      this.isLoggedIn = false; // Ensure isLoggedIn is updated
    }
  }
}
