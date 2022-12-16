import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pbb',
  templateUrl: './pbb.component.html',
  styleUrls: ['./pbb.component.css']
})
export class PbbComponent implements OnInit {

  luasTanah: number = 0;
  luasBangunan: number = 0;
  njopTanah: number = 0;
  njopBangunan: number = 0;
  njopKTP: number = 12_000_000;
  njkp: number = 0.2;
  pbbTerutang: number = 0.005;
  stimulus: number = 15000;
  result: number = 0;
  pbb:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  hitungPBB(){
    let hargaTanah = this.luasTanah * this.njopTanah;
    let hargaBangunan = this.luasBangunan * this.njopBangunan;
    console.log("hargaTanah : " + hargaTanah);
    console.log("hargaBangunan : " + hargaBangunan);

     let hasil = ((((hargaTanah + hargaBangunan) - this.njopKTP) * this.njkp) * this.pbbTerutang) - this.stimulus;
    console.log("hasil : " + hasil);

    this.result = hasil;
  }

}
