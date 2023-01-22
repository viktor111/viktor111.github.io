import { Injectable } from '@angular/core';
import { Tag } from '../types/tag';
import { BlogPost, BlogPosts } from '../types/blogPost';
import postsFile from '../data/blog-posts.json';

@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  constructor() { }

  getAllPosts(): BlogPost[] {
    let posts = postsFile as BlogPosts;

    return posts.posts.sort((a, b) => {
      let dateA = new Date(a.date.split(".").reverse().join("-"));
      let dateB = new Date(b.date.split(".").reverse().join("-"));
      return dateB.getTime() - dateA.getTime();
    });

  }

  getByTitle(title: string): BlogPost {
    let posts = postsFile as BlogPosts;
    let post = posts.posts.find((post => post.title === title))!
    return post;
  }

  searchTags(tags: Tag[], tagNameToSearch: string | undefined): Tag[] {
    if (!tagNameToSearch) {
      return tags;
    }
    let tagsFiltered = tags.filter(t => t.name.includes(tagNameToSearch));

    return tagsFiltered;
  }

  getByTags(tagNameToSearch: string): BlogPost[] {
    const blogPosts = postsFile as BlogPosts;
    const posts = blogPosts.posts;

    let postsByTags = posts.filter(p => {
      return p.tags.includes(tagNameToSearch);
    });

    return postsByTags;
  }

  getTagsWithCount(): Tag[] {
    const blogPosts = postsFile as BlogPosts;
    const posts = blogPosts.posts;

    let tagsNames: string[] = [];
    let tags: Tag[] = [];

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];

      const tags = post.tags;

      for (let j = 0; j < tags.length; j++) {
        const tagName = tags[j];
        tagsNames.push(tagName);
      }
    }

    for (let i = 0; i < tagsNames.length; i++) {
      let newTag: Tag = {
        name: tagsNames[i],
        count: 1
      };

      const conatinsNewTag = !!tags.find(tag => {
        return tag.name === newTag.name
      });

      if (conatinsNewTag) {
        const indexOfExistTag = tags.findIndex(tag => tag.name === newTag.name);

        tags[indexOfExistTag].count += 1;
      }
      else {
        tags.push(newTag);
      }
    }

    return tags;
  }
}
