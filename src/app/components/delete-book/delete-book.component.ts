import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {
  

  constructor(private bookService:BookService){}
  onDelete(bookid:number) {
    this.bookService.deleteBook(bookid).subscribe( (msg)=>{ console.log("Deleted "+msg);
    confirm("Do You Want To Delete The Book ");
    alert("Book Deleted");
     },
     (error)=>{
       console.log("Something went wrong")});
     
 }
}
