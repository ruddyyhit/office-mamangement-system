import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userid: string;
  private password: string;
  constructor(private router: Router) { }
  loginForm(logForm: NgForm) {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (this.userid === user.email && this.password === user.password.confirmPwd) {

      this.router.navigate(['ceohome']);
    } else {
    this.router.navigate(['login']);
  }
    console.log(user.password.confirmPwd);
    console.log(user.email);

  }
  ngOnInit() {
  }

}
