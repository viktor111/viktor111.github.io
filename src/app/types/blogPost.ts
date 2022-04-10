export interface BlogPosts {
  posts: BlogPost[];
}

export interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  contentPath: string;
}
