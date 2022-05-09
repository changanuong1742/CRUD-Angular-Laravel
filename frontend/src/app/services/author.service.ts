import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Author} from '../models/Author';
import {Category} from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private API_URL = 'http://localhost:3000/authors';

  constructor(private http: HttpClient) { }
  getAll(embed: boolean = false): Observable<Author[]>{
    let requestUrl = embed ? `${this.API_URL}?_embed=comics` : this.API_URL;
    return this.http.get<Author[]>(requestUrl);
  }
  searchByName(keyword: string, embed: boolean = false): Observable<Author[]>{
    let requestUrl = `${this.API_URL}?name_like=${keyword}`;
    if (embed){
      requestUrl += `&_embed=comics`;
    }
    return this.http.get<Author[]>(requestUrl);
  }
  deleteAuthor(authorId: number){
    let requestUrl = `${this.API_URL}/` + authorId;
    return this.http.delete<any>(requestUrl);
  }
  findById(authorId: string): Observable<Author>{
    let requestUrl = `${this.API_URL}/${authorId}?_embed=comics`;
    return this.http.get<Author>(requestUrl);
  }
  addNewAuthor(data: any): Observable<any>{
    return this.http.post<any>(this.API_URL, data);
  }
  editAuthor(data: Author): Observable<any>{
    let requestUrl = `${this.API_URL}/${data.id}`;
    return this.http.put<any>(requestUrl, data);
  }
}
