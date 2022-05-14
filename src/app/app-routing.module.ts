import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';

const routes: Routes = [
  { path: '',   redirectTo: '/blog', pathMatch: 'full' },
  { path: 'personal-data', component: PersonalDataComponent },
  { path: 'projects', component: MyProjectsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'post/:title', component: BlogPostComponent },
  { path: 'courses', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
