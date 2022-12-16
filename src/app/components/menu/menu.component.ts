import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/interfaces/imenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pesanan: IMenu[] = [];
  menu: IMenu;
  ppn: number = 0.11;
  harga: number = 0;
  hargaTotal: number = 0;
  bayar: number = 0;
  kembalian: number = 0;
  statusPby: boolean = false;

  constructor() {
    this.menu = {
      name: "",
      price: 0,
      quantity: 0
    }
   }

   private  calculate(): void{
    for (let i in this.pesanan){
      this.harga += this.harga + (this.pesanan[i].price * this.pesanan[i].quantity);
    }
    this.hargaTotal = (this.harga* this.ppn) + this.harga;
   }

   addPesanan(): void { 
       let temp: IMenu = {
         name: this.menu.name,
         price: this.menu.price,
         quantity: this.menu.quantity
       }
       this.pesanan.push(temp);
       this.harga = 0;
       this.calculate();

   }

   hapusPesanan(index: number): void{
    this.pesanan.splice(index,1);
    this.harga = 0;
    this.calculate();
   }

   enter($event: any): void{
    if ($event.which === 13) {
      if(this.bayar >= this.hargaTotal){
        this.kembalian = this.bayar - this.hargaTotal;
        this.statusPby = true;
      }
      else{
        this.statusPby = false;
      }
    }
   }

   bayarPesanan(){
    if(this.bayar >= this.hargaTotal){
      this.kembalian = this.bayar - this.hargaTotal;
      this.statusPby = true;
    }
    else{
      this.statusPby = false;
    }
   }

  ngOnInit(): void {
  }


}
