import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { SignupComponent } from './registration/signup/signup.component';
import { CeoComponent } from './registration/ceo/ceo.component';
import { ManagerComponent } from './Manager/manager/manager.component';
import { EmployeeComponent } from './Employee/employee/employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'singup', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'singup', component: SignupComponent},
  {path: 'ceohome', component: CeoComponent},
  {path: 'managerhome', component: ManagerComponent},
  {path: 'employeehome', component: EmployeeComponent},
  {path: '**', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
