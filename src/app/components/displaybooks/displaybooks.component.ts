import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';
import { BorrowbooksService } from 'src/app/services/borrowbooks.service';
import { UserService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.css']
})
export class DisplaybooksComponent implements OnInit {
  bookList: Book[] = []; 
  

  constructor(private bookService: BookService,private router:Router,private borrowbookService:BorrowbooksService) {}
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
borrowBook(bookid:number){
  this.router.navigate(['/borrowbooks'])
}
goBack()
{
  this.router.navigate(['/userdashboard']);
}
}

