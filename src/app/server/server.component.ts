import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  // templateUrl: './server.component.html',
  template:`
<h1>Halo</h1>
<p>{{name}}</p>
`,
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  name = 'widia-day23';
  angka1 = 10;
  angka2 = 90;
  
  constructor() { }

  ngOnInit(): void {
  }

}
