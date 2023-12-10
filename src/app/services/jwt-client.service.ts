import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  private tokenKey: string = 'jwtToken';
  constructor(private http:HttpClient) { }
  baseURL:string = 'http://localhost:8181/api/';
  
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  

  setLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  get isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }


    getGeneratedToken(requestBody: any):Observable<string>{

        return this.http.post<string>(this.baseURL+"login/adminlogin",requestBody,{responseType: 'text' as 'json'});

    }
    storeToken(token: string): void {
      localStorage.setItem(this.tokenKey,token);
    }
   
  
    getToken(): string | null {
      return localStorage.getItem(this.tokenKey);
    }
  
    clearToken(): void {
      localStorage.removeItem(this.tokenKey);
    }
    registerUser(requestBody:any)
   {
   return this.http.post(this.baseURL+"librarymanagementsystem/member/add",requestBody,{responseType:'text'as 'json'})
    }
    
   
    
    

    authorizationTest(token:any){

      const userAuthorized = !!token; // For demonstration, considers any non-empty token as authorized

      return of(userAuthorized);

    }
}
