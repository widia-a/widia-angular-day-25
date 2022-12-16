import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username : string = "widia";
  name: string = "widia anggraeni";
  email: string = "widia@gmail.com";

  constructor() { }

  ngOnInit(): void {
  }

}
