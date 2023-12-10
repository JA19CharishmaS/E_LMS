import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  constructor(private router:Router,private bookService:BookService){}
 
addBook(data:Book){
  this.bookService.addBook(data)
  .subscribe((response)=> {
    console.log('Response from backend:', response);
    console.log("Book added sucessfully");
     alert("Book added sucessfully");
  },
  (error)=>{
    console.log("Something went wrong")});
    }
      goBack()
      {
        this.router.navigate(['/managebooks'])
      }
      publicationDate: string=''; 
      isInvalidPublicationDate(): boolean {
        const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in ISO format

        // Check if the publication date is in the future or today
        return !!this.publicationDate && this.publicationDate >= currentDate;
    }
      
}

