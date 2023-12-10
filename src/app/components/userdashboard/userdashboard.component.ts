import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {

  constructor(private router: Router) {}

  borrowBooks() {
   
   this.router.navigate(['/borrowbooks']);
  }

  returnBooks() {
    this.router.navigate(['/returnbook']);
  }

  viewAccount() {
    
     this.router.navigate(['/viewuseraccount']);
  }
  findBooks(searchData:any){

    this.router.navigate(['/findbooks/'+searchData.form.value.data])

    console.log(searchData.form.value.data);
    

}

  payFine() {
    
    this.router.navigate(['/fine']);
  }
  displayall()
  {
    this.router.navigate(['/displaybooks']);
  }
}
