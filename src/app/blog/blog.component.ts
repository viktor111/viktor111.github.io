import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../services/blog-data.service';
import { BlogPost } from '../types/blogPost';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts: BlogPost[];
  sortTag!: string;

  constructor(blogDataService: BlogDataService) {
    this.blogPosts = blogDataService.getAllPosts();
    console.log(this.sortTag)
   }

   openDialog(){
   }



  ngOnInit(): void {
  }

}

