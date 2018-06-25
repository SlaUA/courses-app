import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageComponent } from './shared/page/page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { CourseListComponent } from './courses-page/course-list/course-list.component';
import { CourseDetailsComponent } from './courses-page/course-details/course-details.component';
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    CoursesPageComponent,
    BreadcrumbsComponent,
    CourseListComponent,
    CourseDetailsComponent
  ],
  imports: [MomentModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
