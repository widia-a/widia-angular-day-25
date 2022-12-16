import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  images: string[] =[
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addImage(){
    let randomNumber: number = Math.floor(Math.random() * 60);
    this.images.push(`https://picsum.photos/300/300?random=${randomNumber}`);
  }


  gantiGambar(indeks: number, angkaRandom: number){
    this.images[indeks] = `https://picsum.photos/300/300?random=${angkaRandom}`;
  }

}
