import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDataService } from '../services/blog-data.service';
import { BlogPost } from '../types/blogPost';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: BlogPost;

  constructor(activeRoute: ActivatedRoute, blogDataService: BlogDataService) { 
    const title = activeRoute.snapshot.params['title'];
    this.post = blogDataService.getByTitle(title)
  }

  ngOnInit(): void {
  }

}
