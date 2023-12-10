import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SecurityComponent } from './components/security/security.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';
import { BorrowbooksComponent } from './components/borrowbooks/borrowbooks.component';
import { DisplaybooksComponent } from './components/displaybooks/displaybooks.component';
import { ViewuseraccountComponent } from './components/viewuseraccount/viewuseraccount.component';

import { ReturnbookComponent } from './components/returnbook/returnbook.component';
import { SearchbookComponent } from './components/searchbook/searchbook.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ManagebooksComponent } from './components/managebooks/managebooks.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { AddusersComponent } from './components/addusers/addusers.component';
import { ManageusersComponent } from './components/manageusers/manageusers.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { GetAllMembersComponent } from './components/get-all-members/get-all-members.component';
import { FindbooksComponent } from './components/findbooks/findbooks.component';
import { AvailablebooksComponent } from './components/availablebooks/availablebooks.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:SecurityComponent},
  {path:'userlogin',component:UserloginComponent},
  {path: 'user-dashboard', component:UserdashboardComponent },
  {path:'userregister',component:UserregistrationComponent},
  {path: 'borrowbooks', component: BorrowbooksComponent },
  {path: 'displaybooks', component: DisplaybooksComponent },
  {path: 'viewuseraccount', component: ViewuseraccountComponent },
  {path:'findbooks/:booktitle',component:FindbooksComponent},
  {path:'returnbook',component:ReturnbookComponent},
  {path:'searchbook',component:SearchbookComponent},
  {path:'avilablebooks',component:AvailablebooksComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path: 'managebooks', component: ManagebooksComponent },
  {path:'welcome',component:WelcomeComponent},
  {path: 'userdashboard', component:UserdashboardComponent },
  {path:'addbook',component:AddbookComponent},
  {path: 'manageusers', component: ManageusersComponent },
  { path: 'addusers', component: AddusersComponent },
  {path:'get-all-books',component:GetAllBooksComponent},
  {path:'delete',component:DeleteBookComponent},
  {path:'displaybooks',component:DisplaybooksComponent},
  {path:'updatebook',component:UpdateBookComponent},
  {path:'search/:booktitle',component:SearchbookComponent},
  {path:'get-all-members',component:GetAllMembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
