import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../../services/blog-data.service';
import { BlogPost } from '../../types/blogPost';
import {MatDialog} from '@angular/material/dialog';
import { Tag } from '../../types/tag';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts: BlogPost[];
  tags: Tag[];
  blogDataService: BlogDataService;
  filterTagsByNameVal: string;

  constructor(blogDataService: BlogDataService) {
    this.blogDataService = blogDataService; 
    this.blogPosts = blogDataService.getAllPosts();
    this.tags = blogDataService.getTagsWithCount();
    this.filterTagsByNameVal = '';
   }

   openDialog(){
   }

   sortByTagName(tagName: string){
     this.blogPosts = this.blogDataService.getByTags(tagName);
   }

   clearTagSearch(){
    this.blogPosts = this.blogDataService.getAllPosts();
    this.filterTagsByNameVal = '';
    this.filterTagsByName();
   }

   filterTagsByName(){
      console.log(this.filterTagsByNameVal);
      let tags = this.blogDataService.getTagsWithCount();
      this.tags = this.blogDataService.searchTags(tags, this.filterTagsByNameVal);
   }

  ngOnInit(): void {
  }

}

