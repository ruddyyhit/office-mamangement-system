import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Roles } from 'src/app/model/roles.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//   role = 'Role List';
//   loginRole = 'Please select Role';
//   roles: Roles [] = [
//     {id: 1, name: 'CEO'},
//     {id: 2, name: 'Manager'},
//     {id: 3, name: 'Employee'}
//   ];
  private luserid: string;
  private lpassword: string;
  constructor(private router: Router) { }
  loginForm(logForm: NgForm) {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log('login' + this.luserid);
    console.log('login' + this.lpassword);
    console.log(user.role);
    console.log(user);
    if (this.luserid === user.email && this.lpassword === user.password) {

      console.log('ceohome');
      this.router.navigate(['ceohome']);
   //    let grade =  user.role;
   //    switch (grade) {
   // case 'CEO': {
   //    console.log('ceohome');
   //    this.router.navigate(['ceohome']);
   //    break;
   // } 

   // case 'Manager': {
   //    console.log('Good');
   //    this.router.navigate(['managerhome']);
   //    break;
   // }

   // case 'Employee': {
   //    console.log('Fair');
   //    this.router.navigate(['employeehome']);
   //    break;
   // }

   // default: {
   //    console.log('Invalid choice');
   //    alert('invalid login');
   //    this.router.navigate(['login']);
   //    break;
   // }
}
    }
    // console.log(user.password);
    // console.log(user.email);
    // console.log(user.role);

  ngOnInit() {
  }

}
