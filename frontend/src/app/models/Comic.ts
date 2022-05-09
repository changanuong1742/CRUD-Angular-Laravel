import firebase from 'firebase';
import auth = firebase.auth;
import {Author} from './Author';
import {Category} from './Category';

export class Comic {
  id: number;
  name: string;
  image: string;
  categoryId: number;
  authorId: number;
  status: string;
  views: number;
  author?: Author;
  category?: Category;
  constructor(id: number,
              name: string,
              image: string,
              categoryId: number,
              authorId: number,
              status: string,
              views: number,
              author?: Author,
              category?: Category) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.categoryId = categoryId;
    this.authorId = authorId;
    this.status = status;
    this.views = views;
    this.author = author;
    this.category = category;
  }
}
