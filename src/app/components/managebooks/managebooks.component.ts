import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managebooks',
  templateUrl: './managebooks.component.html',
  styleUrls: ['./managebooks.component.css']
})
export class ManagebooksComponent {
  constructor(private router:Router){}
  addBook() {
    this.router.navigate(['/addbook']); 
  }

  updateBook() {
    this.router.navigate(['/addbook']); 
  }

  deleteBook() {
    this.router.navigate(['/get-all-books']);
  }

  viewAllBooks() {
    this.router.navigate(['/get-all-books']);
  }

  searchData: string = '';

    

  findBooks(searchData:any){

    this.router.navigate(['/search/'+searchData.form.value.data])

    console.log(searchData.form.value.data);
    

}
goBack()
      {
        this.router.navigate(['/admindashboard'])
      }
}
