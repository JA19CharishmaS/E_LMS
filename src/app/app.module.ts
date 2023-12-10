import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityComponent } from './components/security/security.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
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
import { ManageusersComponent } from './components/manageusers/manageusers.component';
import { AddusersComponent } from './components/addusers/addusers.component';
import { SearchuserComponent } from './components/searchuser/searchuser.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { GetAllMembersComponent } from './components/get-all-members/get-all-members.component';
import { FindbooksComponent } from './components/findbooks/findbooks.component';
import { AvailablebooksComponent } from './components/availablebooks/availablebooks.component';
import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    WelcomeComponent,
  
    UserloginComponent,
    UserdashboardComponent,
   
    UserregistrationComponent,
        BorrowbooksComponent,
        DisplaybooksComponent,
        ViewuseraccountComponent,
       
        ReturnbookComponent,
        SearchbookComponent,
        AdmindashboardComponent,
       
        ManagebooksComponent,
                AddbookComponent,
                ManageusersComponent,
                AddusersComponent,
                SearchuserComponent,
                GetAllBooksComponent,
                DeleteBookComponent,
                UpdateBookComponent,
                GetAllMembersComponent,
                FindbooksComponent,
                AvailablebooksComponent,
                NavbarComponent
                
               
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
