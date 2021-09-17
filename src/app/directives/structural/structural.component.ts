import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss'],
})
export class StructuralComponent implements OnInit {
  title = 'Structural directives';
  username = 'thangplc';
  isLoggedIn = false;
  age = 0;
  login() {
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
  chekcAge() {}
  constructor() {}

  ngOnInit(): void {}
}
