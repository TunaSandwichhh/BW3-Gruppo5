import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from 'src/services/posts-service.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit{

  constructor(private postService: PostsServiceService){}

  ngOnInit(): void {

  }

}
