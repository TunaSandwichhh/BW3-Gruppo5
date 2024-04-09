import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from 'src/app/models/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  apiURL = 'http://localhost:3000/posts/';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.apiURL);
  }

  getPost(id:number): Observable<PostInterface> {
    return this.http.get<PostInterface>(this.apiURL + id);
  }

  createPost(body:PostInterface) {
    return this.http.post<any>(this.apiURL, body)
  }

}