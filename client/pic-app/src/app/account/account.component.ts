import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  name:string;
  email:string;
  password:string;

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.name, this.email, this.password);

  }

}
