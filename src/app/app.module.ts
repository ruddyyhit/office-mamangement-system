import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CeoComponent } from './registration/ceo/ceo.component';
import { SignupComponent } from './registration/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './Login/login/login.component';
import { ManagerComponent } from './Manager/manager/manager.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
@NgModule({
  declarations: [
    AppComponent,
    CeoComponent,
    SignupComponent,
    LoginComponent,
    ManagerComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
