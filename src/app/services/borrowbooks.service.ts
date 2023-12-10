import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtClientService } from './jwt-client.service';
import { Borrow } from '../model/borrow';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowbooksService {

  constructor(private http: HttpClient,private jwtservice:JwtClientService) {}
  baseURL: string = 'http://localhost:8181/api/librarymanagementsystem/borrowing/';

  addBorrowing(formData:Borrow ): Observable<Borrow> {
    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
      return this.http.post<Borrow>(this.baseURL + 'add',formData, { headers });
    } else {
      return new Observable<Borrow>();
    }

  }
  getAll():Observable<Borrow[]>{
    const token = this.jwtservice.getToken();
    if (token) 
    {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
      return this.http.get<Borrow[]>(this.baseURL+"getall",{ headers });
    }else {
      return new Observable<Borrow[]>();
    }
   
  }

  deleteMember(borrowingid:number):Observable<string>{
    const token = this.jwtservice.getToken();
    if (token) 
    {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      
      console.log(headers);
      return this.http.delete<string>(this.baseURL+`delete/${borrowingid}`,{headers});
    }else {
      return new Observable<string>();
    }
  }

  returnBook(formData:Borrow ): Observable<Borrow> {
    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
      return this.http.put<Borrow>(this.baseURL + 'return',formData, { headers });
    } else {
      return new Observable<Borrow>();
    }
  }
}
