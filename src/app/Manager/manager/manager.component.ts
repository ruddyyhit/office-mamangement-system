import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private router: Router) { }
  addManager() {
    this.router.navigate(['singup']);
  }
  deleteManager() {
    localStorage.removeItem('manager');
  }
  ngOnInit() {
  }

}
