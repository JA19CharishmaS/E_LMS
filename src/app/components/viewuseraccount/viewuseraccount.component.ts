import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-viewuseraccount',
  templateUrl: './viewuseraccount.component.html',
  styleUrls: ['./viewuseraccount.component.css']
})
export class ViewuseraccountComponent {
   constructor(private router:Router){}
   users:User[]=[];
editUser()
{
 
}
deleteUser(){}

goBack ()
      {
        this.router.navigate(['/userdashboard']); 
      }  
    }