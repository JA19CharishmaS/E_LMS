import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Borrow } from 'src/app/model/borrow';
import { BorrowbooksService } from 'src/app/services/borrowbooks.service';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent {
  constructor(private borrowService: BorrowbooksService,private router: Router){}
  returnBook(data:Borrow) {
    this.borrowService.returnBook(data)
      .subscribe((response)=> {
        console.log('Response from backend:', response);
        alert("Book returned Sucessfully");
        
      });
    }
      goBack ()
      {
        this.router.navigate(['/userdashboard']); 
      }  
      returnDate: string=''; // Ensure dueDate matches the variable used in ngModel

    isInvalidReturnDate(): boolean {
        const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in ISO format

        // Check if the due date is in the past
        return !! this.returnDate && this.returnDate !== currentDate;
    }
}
