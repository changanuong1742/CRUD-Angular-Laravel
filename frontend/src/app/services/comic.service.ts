import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comic} from '../models/Comic';
import {Category} from '../models/Category';
import {Author} from '../models/Author';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private API_URL = 'http://localhost:3000/comics';

  constructor(private http: HttpClient) { }
  getAll(expand: boolean = false): Observable<Comic[]>{
    const requestUrl = expand ? `${this.API_URL}?_expand=author&_expand=category` : this.API_URL;
    return this.http.get<Comic[]>(requestUrl);
  }
  searchByName(keyword: string): Observable<Comic[]>{
    let requestUrl = `${this.API_URL}?name_like=${keyword}`;
    return this.http.get<Comic[]>(requestUrl);
  }
  addNewComic(data: any): Observable<any>{
    return this.http.post<any>(this.API_URL, data);
  }
  deleteComic(comicId: number){
    const requestUrl = `${this.API_URL}/` + comicId;
    return this.http.delete<any>(requestUrl);
  }
  findById(comicId: string): Observable<Comic>{
    const requestUrl = `${this.API_URL}/${comicId}?_expand=author&_expand=category`;
    return this.http.get<Comic>(requestUrl);
  }
  editComic(data: Comic): Observable<any>{
    let requestUrl = `${this.API_URL}/${data.id}`;
    return this.http.put<any>(requestUrl, data);
  }
}
