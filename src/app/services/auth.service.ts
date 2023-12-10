import { Injectable } from '@angular/core';
import { JwtClientService } from './jwt-client.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey: string = 'jwtToken';
  
  constructor(private jwtService: JwtClientService, private router: Router,private http: HttpClient) {}

  private isLoggedIn: boolean = false;

  isAuthenticated(): boolean {
    // Logic to check if the user is authenticated, maybe using tokens or stored data
    return this.isLoggedIn;
  }

  login(username: string, password: string): void {
    if (username === 'sita' && password === 'Sita45')
    this.isLoggedIn = true;
  }

  logout(): void {
    // Logic to log out the user, maybe clearing tokens or stored data
    // If logout succeeds, set isLoggedIn to false
    this.isLoggedIn = false;
  }

  
 
 
}
