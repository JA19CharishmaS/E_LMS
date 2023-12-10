import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Borrow } from 'src/app/model/borrow';
import { BorrowbooksService } from 'src/app/services/borrowbooks.service';
import { JwtClientService } from 'src/app/services/jwt-client.service';
import { UserService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-borrowbooks',
  templateUrl: './borrowbooks.component.html',
  styleUrls: ['./borrowbooks.component.css']
})
export class BorrowbooksComponent {
 
  dueDate: string=''; // Assuming dueDate is a string in ISO format (yyyy-MM-dd)

  constructor(private borrowService: BorrowbooksService,private router: Router) {}

  submitForm(data:Borrow) {
    this.borrowService.addBorrowing(data)
      .subscribe((response)=> {
        console.log('Response from backend:', response);
        alert("Book Borrowed Sucessfully");
        
      });
    }
      goBack ()
      {
        this.router.navigate(['/userdashboard']); 
      }  

    

 
    

      isInvalidDueDate(): boolean {
          const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in ISO format
  
          // Check if the due date is in the past
          return !!this.dueDate && this.dueDate < currentDate;
      }
  
    
  
  

  
}
