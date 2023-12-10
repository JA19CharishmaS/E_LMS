import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.css']
})
export class GetAllBooksComponent  implements OnInit{
  bookList:Book[] = [];
  constructor(private router:Router,private bookService:BookService){}
  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks(){
    
    this.bookService.getAll().subscribe( 
                              (list)=>{ 
                                this.bookList = list; 
                                 console.log(list);
                                alert("Displayed all books");
                              },
                              (error)=>{
                                console.log("Something went wrong")});
                                

        

}
deleteBook(bookid: number) {
  this.bookService.deleteBook(bookid).subscribe(
    () => {
      console.log("Book is deleted");
      alert("Book is deleted");
    },
    (error) => {
      if (error.status === 200) {
        console.log("Book is deleted");
        alert("Book is deleted");
      } else {
        console.error("Error deleting book:", error);
        alert("Failed to delete book");
      }
    }
  );
}

updateBook(bookid:number){
 this.router.navigate(['/updatebook']);
}
goBack()
      {
        this.router.navigate(['/managebooks'])
      }
}

