import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Borrow } from 'src/app/model/borrow';
import { BorrowbooksService } from 'src/app/services/borrowbooks.service';

@Component({
  selector: 'app-get-all-members',
  templateUrl: './get-all-members.component.html',
  styleUrls: ['./get-all-members.component.css']
})
export class GetAllMembersComponent implements OnInit {
  memberList:Borrow[] = [];
  constructor(private router:Router,private borrowService:BorrowbooksService){}
  ngOnInit(): void {
   this.getAllMembers();
  }
  getAllMembers(){
    
    this.borrowService.getAll().subscribe( 
                              (list)=>{ 
                                this.memberList = list; 
                                 console.log(list);
                                 console.log(this.memberList);
                                alert("Displayed all members");
                              },
                              (error)=>{
                                console.log("Something went wrong")});
                            

}
deleteMember(memberid:number){
  this.borrowService.deleteMember(memberid).subscribe((msg) => {
   console.log("BorrowingID of member is deleted");
    
    alert("BorrowingID of Member is deleted");
  });}
  goBack()
  {
    this.router.navigate(['/manageusers'])
  }


}

