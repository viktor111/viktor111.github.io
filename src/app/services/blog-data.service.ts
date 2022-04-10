import { Injectable } from '@angular/core';
import { BlogPost, BlogPosts } from '../types/blogPost';
import postsFile from '../data/blog-posts.json';

@Injectable({
  providedIn: 'root',
})
export class BlogDataService{
  constructor() {}

  getAllPosts(): BlogPost[] {
    let posts = postsFile as BlogPosts;
    return posts.posts;
  }

  getByTitle(title: string): BlogPost{
    let posts = postsFile as BlogPosts;
    let post = posts.posts.find((post => post.title === title))!
    return post;
  }
}
