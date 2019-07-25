import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Roles} from 'src/app/model/roles.model';
import { Signup } from 'src/app/model/signup.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: Signup = new Signup();
  role = 'Role List';
  gender = 'Female';
  roles: Roles [] = [
    {id: 1, name: 'CEO'},
    {id: 2, name: 'Manager'},
    {id: 3, name: 'Employee'},
    {id: 4, name: 'Admin'}
  ];
  private signup: Signup;
 constructor(private router: Router) {
}

  ngOnInit() {
    this.signup = new Signup({
      firstname: '',
      lastname: ',',
      gender: '',
      photoPath : '',
      email: '',
      role:  '' ,
      password: {
        pwd: '',
        confirmPwd: '',
      },
    });

  }
  saveForm(ceoForm: NgForm) {
    console.log(ceoForm.value);
    console.log(this.signup.email);
    console.log(this.signup.password.confirmPwd);
    this.router.navigate(['login']);
    // let  user = JSON.parse(localStorage.getItem('user'));
    localStorage.setItem('user', JSON.stringify(ceoForm.value));
  }
}
