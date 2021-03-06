import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxWindowTokenModule } from 'ngx-window-token';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { PageComponent } from './shared/page/page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { CourseListComponent } from './courses-page/course-list/course-list.component';
import { CourseDetailsComponent } from './courses-page/course-details/course-details.component';
import { CustomBorderDirective } from './core/directives/custom-border-directive/custom-border.directive';
import { DurationPipe } from './core/pipes/duration/duration.pipe';
import { OrderByPipe } from './core/pipes/order-by/order-by.pipe';
import { FilterByNamePipe } from './core/pipes/filter-by-name/filter-by-name.pipe';
import { routes } from './core/routes/routes';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlHttpInterceptor } from './core/interceptors/base-url-http-interceptor';
import { AuthHttpInterceptor } from './core/interceptors/auth-http-interceptor';
import { LoadingComponent } from './loading/loading.component';
import { authReducer } from './core/services/authorization/reducer';
import { coursesReducer } from './core/services/courses-service/reducer';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    CoursesPageComponent,
    BreadcrumbsComponent,
    CourseListComponent,
    CourseDetailsComponent,
    CustomBorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterByNamePipe,
    LoginPageComponent,
    AddCoursePageComponent,
    PageNotFoundComponent,
    EditCourseComponent,
    LoadingComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      authReducer,
      coursesReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    NgxWindowTokenModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlHttpInterceptor,
    multi: true,
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
