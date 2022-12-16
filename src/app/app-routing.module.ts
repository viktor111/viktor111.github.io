import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';
import { VideosComponent } from './pages/videos/videos.component';

const routes: Routes = [
  { path: '',   redirectTo: '/blog', pathMatch: 'full' },
  { path: 'personal-data', component: PersonalDataComponent },
  { path: 'projects', component: MyProjectsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'post/:title', component: BlogPostComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'videos', component: VideosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
