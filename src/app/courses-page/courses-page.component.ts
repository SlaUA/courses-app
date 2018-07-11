import { Component, OnInit } from '@angular/core';
import { FilterByNamePipe } from '../core/pipes/filter-by-name/filter-by-name.pipe';
import CoursesService, {
  Course
} from '../core/services/courses-service/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  providers: [FilterByNamePipe]
})
export class CoursesPageComponent implements OnInit {
  findInputValue: string;
  courseList: Course[];

  constructor(
    private filterByName: FilterByNamePipe,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.courseList = this.coursesService.getAllCourses();
  }

  findCourse() {
    if (!this.findInputValue) {
      return this.courseList = this.coursesService.getAllCourses();
    }
    this.courseList = this.filterByName.transform(
      this.coursesService.getAllCourses(),
      this.findInputValue
    );
  }

  loadMoreCourses() {
    console.log('loading more...');
  }
}
