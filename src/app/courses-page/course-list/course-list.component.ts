import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course, CoursesService } from '../../core/services/courses-service/courses.service';
import { FilterByNamePipe } from '../../core/pipes/filter-by-name/filter-by-name.pipe';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [FilterByNamePipe]
})
export class CourseListComponent implements OnInit, OnDestroy {
  findInputValue = '';
  courseList: Course[];
  courseListSubscription: Subscription;

  constructor(
    private coursesService: CoursesService,
    private filterByName: FilterByNamePipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.courseListSubscription = this.coursesService.getAllCourses()
      .subscribe((courses) => this.courseList = courses);
  }

  ngOnDestroy(){
    this.courseListSubscription.unsubscribe();
  }

  handleEditCourse(courseId: number) {
    return this.router.navigateByUrl(`/courses/${courseId}`);
  }

  handleDeleteCourse(courseId: number) {
    const userChoice = confirm('Do you really want to delete this course?');
    if (userChoice) {
      this.courseList = this.coursesService.removeCourse(courseId);
    }
  }

  findCourse() {
    this.courseList = this.filterByName.transform(
      this.courseList,
      this.findInputValue
    );
  }

  loadMoreCourses() {
    console.log('loading more...');
  }
}
