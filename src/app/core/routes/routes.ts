import { Routes } from '@angular/router';
import { CoursesPageComponent } from '../../courses-page/courses-page.component';
import { LoginPageComponent } from '../../login-page/login-page.component';
import { AddCoursePageComponent } from '../../add-course-page/add-course-page.component';

export const routes: Routes = [
  { path: '', component: CoursesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'new', component: AddCoursePageComponent },
];
