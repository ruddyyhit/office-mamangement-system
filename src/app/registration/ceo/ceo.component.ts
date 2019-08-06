import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/model/signup.model';
import { Roles } from 'src/app/model/roles.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ceo',
  templateUrl: './ceo.component.html',
  styleUrls: ['./ceo.component.css']
})
export class CeoComponent implements OnInit {

  role = 'Role List';
  loginRole = 'Please select Role';
  roles: Roles [] = [
    {id: 1, name: 'CEO'},
    {id: 2, name: 'Manager'},
    {id: 3, name: 'Employee'}
  ];
   firstname: string;
   lastname: string;
   gender: string;
   photoPath ?: string = 'assets/images/mark.png';
   email: string;
   roleD: string;
   data: any;

  // lastname: string = this.data.lname;
  // gender: string = this.data.gender;
  // photoPath: string = this.data.photoPath;
  // email: string = this.data.email;
  // role: string =  this.data.role;
  constructor(private router: Router) {
    this.data = JSON.parse(localStorage.getItem('user'));

    this.firstname = this.data.fname;
    this.lastname = this.data.lname;
    this.gender = this.data.gender;
    this.email = this.data.email;
    this.roleD =  this.data.role;
  }
  managerData() {
    this.router.navigate(['managerhome']);
  }
  employeeData() {
    this.router.navigate(['employeehome']);
  }

  ngOnInit() {
      console.log(this.firstname);

  }

}
