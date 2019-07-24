import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Roles} from 'src/app/model/roles.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  role = 'Role List';
  gender = 'Female';
  roles: Roles [] = [
    {id: 1, name: 'CEO'},
    {id: 2, name: 'Manager'},
    {id: 3, name: 'Employee'},
    {id: 4, name: 'Admin'}
  ];
  constructor() { }

  ngOnInit() {
  }
  saveForm(ceoForm: NgForm) {
    console.log(ceoForm.value);
  }
}
