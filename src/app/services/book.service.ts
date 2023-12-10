import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';
import { JwtClientService } from './jwt-client.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor(private http: HttpClient,private jwtservice:JwtClientService){}
  baseURL: string = 'http://localhost:8181/api/librarymanagementsystem/book/';
  addBook(formData:Book ): Observable<Book> {
    console.log("add");
    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
      return this.http.post<Book>(this.baseURL + 'add',formData, { headers });
    } else {
      return new Observable<Book>();
    }

  }

  getAll():Observable<Book[]>{
    const token = this.jwtservice.getToken();
    if (token) 
    {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
      return this.http.get<Book[]>(this.baseURL+"findbooks",{ headers });
    }else {
      return new Observable<Book[]>();
    }
   
  }

  deleteBook(bookid:number):Observable<string>{
    const token = this.jwtservice.getToken();
    if (token) 
    {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      
      console.log(headers);
      return this.http.delete<string>(this.baseURL+`delete/${bookid}`,{headers});
    }else {
      return new Observable<string>();
    }
  }
    

  updateBook(bookObj:Book):Observable<Book>{
    const token = this.jwtservice.getToken();
    if (token) 
    {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      
      console.log(headers);
      console.log(bookObj);
      const updateURL = `${this.baseURL}update/${bookObj.bookid}`;
       return  this.http.put<Book>(updateURL, bookObj, { headers });
    }
    else {
      return new Observable<Book>();
    }
    
}
findBooksByTitle(data: string): Observable<Book[]> {
  const token = this.jwtservice.getToken();
  if (token) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    console.log('Headers:', headers);
    console.log('Data:', data);

    return this.http.get<Book[]>(this.baseURL+`getbybooktitle/${data}`, { headers });
  } else {
    return new Observable<Book[]>(); // Consider handling this case differently
  }
}

}
