import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent {
  constructor(private bookService:BookService,private route:ActivatedRoute,private router:Router){}
  bookSearchList:Book[] =[];
  ngOnInit(): void {
     
    this.findBooks();
}
searchInput:string = '';
  findBooks() {
    this.route.params.subscribe((params) => {
      this.searchInput = params['booktitle']; // Assuming the parameter name is 'title'
    });
  
    this.bookService.findBooksByTitle(this.searchInput).subscribe(
      (list) => {
        this.bookSearchList = list; // Assuming 'bookSearchList' is the list of books
        console.log('Search results: ', list);
        console.log(this.bookSearchList);
      },
      (error) => {
        console.error('Error searching books: ', error);
      }
    );
  }
  goBack()
      {
        this.router.navigate(['/managebooks'])
      }
  
}
