import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';
import { PageComponent } from './core/page/page.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { BreadcrumbsComponent } from './core/breadcrumbs/breadcrumbs.component';
import { SearchResultsComponent } from './courses-page/search-results/search-results.component';
import { SearchResultComponent } from './courses-page/search-result/search-result.component';
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    CoursesPageComponent,
    BreadcrumbsComponent,
    SearchResultsComponent,
    SearchResultComponent
  ],
  imports: [MomentModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
