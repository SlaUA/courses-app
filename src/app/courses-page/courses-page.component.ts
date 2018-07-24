import { Component, OnInit } from '@angular/core';
import { FilterByNamePipe } from '../core/pipes/filter-by-name/filter-by-name.pipe';
import { CoursesService, Course } from '../core/services/courses-service/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
})
export class CoursesPageComponent {}
