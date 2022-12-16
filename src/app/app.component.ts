import { Component, OnInit } from '@angular/core';
import { IPOST } from './interfaces/i-post';
import { Product } from './models/product';
import { PostService } from './services/post.service';
import { productService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  posts: IPOST[] = [];
  // products: Product[];
  // productService: productService;

  constructor(private postService: PostService){
    // this.products = [];
    // this.productService = new productService();
  }
  ngOnInit(): void {
    this.posts = this.postService.getAllPost();
  }

  // getProducts(){
  //   this.products = this.productService.getProducts();
  // }
}
