import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent {

  constructor(private router:Router){}
  addUsers() {
    this.router.navigate(['/addusers']);
  }
viewAllUsers(){
  this.router.navigate(['/get-all-members']);
}
goBack()
      {
        this.router.navigate(['/admindashboard'])
      }
}
