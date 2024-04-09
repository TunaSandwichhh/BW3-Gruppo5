import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {


  apiURL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any>(this.apiURL + 'posts');
  }
}
