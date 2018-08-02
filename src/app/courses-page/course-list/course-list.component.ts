import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {
  Course,
  CoursesService
} from '../../core/services/courses-service/courses.service';
import { FilterByNamePipe } from '../../core/pipes/filter-by-name/filter-by-name.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [FilterByNamePipe]
})
export class CourseListComponent implements OnInit {
  findInputValue = '';
  courseList: Course[];

  ngOnInit() {
    this.courseList = this.coursesService.getAllCourses();
  }

  constructor(
    private coursesService: CoursesService,
    private filterByName: FilterByNamePipe,
    private router: Router
  ) {}

  handleEditCourse(courseId: number) {
    this.router.navigateByUrl(`/courses/${courseId}`);
  }

  handleDeleteCourse(courseId: number) {
    const userChoice = confirm('Do you really want to delete this course?');
    if (userChoice) {
      this.courseList = this.coursesService.removeCourse(courseId);
    }
  }

  findCourse() {
    this.courseList = this.filterByName.transform(
      this.coursesService.getAllCourses(),
      this.findInputValue
    );
  }

  loadMoreCourses() {
    console.log('loading more...');
  }
}
