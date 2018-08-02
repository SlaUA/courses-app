import { Routes } from '@angular/router';
import { CoursesPageComponent } from '../../courses-page/courses-page.component';
import { LoginPageComponent } from '../../login-page/login-page.component';
import { AddCoursePageComponent } from '../../add-course-page/add-course-page.component';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';
import { EditCourseComponent } from '../../edit-course/edit-course.component';
import { AuthGuardService } from '../services/auth-guard/auth-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesPageComponent, canActivate: [AuthGuardService]  },
  { path: 'login', component: LoginPageComponent },
  { path: 'courses/new', component: AddCoursePageComponent, canActivate: [AuthGuardService] },
  { path: 'courses/:id', component: EditCourseComponent, canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent }
];
