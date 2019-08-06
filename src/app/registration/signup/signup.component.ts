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
  gender = 'Female';
  role = 'CEO';
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
    console.log(ceoForm.value.password);
    localStorage.setItem('user', JSON.stringify(ceoForm.value));
    localStorage.setItem('manager', JSON.stringify(ceoForm.value));
    this.router.navigate(['login']);
  }
}
