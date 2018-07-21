import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxWindowTokenModule } from 'ngx-window-token';
import { RouterModule, Routes } from '@angular/router';

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
  ],
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule, NgxWindowTokenModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
