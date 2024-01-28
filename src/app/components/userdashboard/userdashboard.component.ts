import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/model/member';
import { UserService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {

  constructor(private router: Router,private userService:UserService,private route: ActivatedRoute) {}
  
  user: Member | undefined;

  ngOnInit(): void {
    // Subscribe to route params to get the user ID
    this.route.params.subscribe((params) => {
      const userId = +params['id'];
  
      // Check if userId is a valid number
      if (isNaN(userId)) {
        console.error('Invalid user ID:', userId);
        return;
      }
  
      // Fetch user details based on the user ID using the UserService
      this.userService.getUserById(userId).subscribe(
        (user: Member | undefined) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    });
  }
  
  
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
