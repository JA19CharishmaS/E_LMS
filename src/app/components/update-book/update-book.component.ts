import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
   constructor(private bookService:BookService,private router:Router){}

   updateBook(data: Book) {
    console.log('Updating data for book: ' + data.booktitle);
  
    this.bookService.updateBook(data).subscribe(
      (updatedBook) => {
        console.log('Book updated: ', updatedBook);
        alert("Book got updated");
      },
      (error) => {
        console.error('Error updating book:', error);
       
      }
    );
}
goBack()
      {
        this.router.navigate(['/managebooks'])
      }
}
