import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MarkdownModule } from 'ngx-markdown';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { CoursesComponent } from './pages/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    AppTopBarComponent,
    MyProjectsComponent,
    BlogComponent,
    BlogPostComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    MatGridListModule,
    MatChipsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
