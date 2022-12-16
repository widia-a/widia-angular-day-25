import { Injectable } from '@angular/core';
import { IPOST } from '../interfaces/i-post';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAllPost(): IPOST[]{
    return [
      new Post(1, "Lorem ipsum", "ini postingan ke 1", true),
      new Post(2, "Lorem ipsum", "ini postingan ke 2", true),
      new Post(3, "Lorem ipsum", "ini postingan ke 3", true),
      new Post(4, "Lorem ipsum", "ini postingan ke 4", true)
  ];
  }
}

