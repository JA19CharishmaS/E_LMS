import { Component } from '@angular/core';

@Component({
  selector: 'app-availablebooks',
  templateUrl: './availablebooks.component.html',
  styleUrls: ['./availablebooks.component.css']
})
export class AvailablebooksComponent {
  handleBorrowBooksClick(): void {
    alert('Please Signin or Signup To Borrow Books!');
  }
}
