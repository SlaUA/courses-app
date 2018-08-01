import { Routes } from '@angular/router';
import { CoursesPageComponent } from '../../courses-page/courses-page.component';
import { LoginPageComponent } from '../../login-page/login-page.component';
import { AddCoursePageComponent } from '../../add-course-page/add-course-page.component';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';
import { EditCourseComponent } from '../../edit-course/edit-course.component';

export const routes: Routes = [
  { path: '', component: CoursesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'courses/new', component: AddCoursePageComponent },
  { path: 'courses/:id', component: EditCourseComponent },
  { path: '**', component: PageNotFoundComponent }
];
