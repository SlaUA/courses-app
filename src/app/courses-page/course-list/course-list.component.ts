import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course, CoursesService } from '../../core/services/courses-service/courses.service';
import { FilterByNamePipe } from '../../core/pipes/filter-by-name/filter-by-name.pipe';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [FilterByNamePipe]
})
export class CourseListComponent implements OnInit, OnDestroy {
  courseList: Course[];
  courseListSubscription: Subscription;
  findCourseSubscription: Subscription;
  inputEventSubject = new Subject<string>();

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) {
    this.findCourseSubscription = this.inputEventSubject.pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((value) => {
      if (value.length >= 3) {
        this.coursesService.findCourse(value);
      }
    });
  }

  ngOnInit() {
    this.courseListSubscription = this.coursesService
      .getAllCourses()
      .subscribe(({ courses }) => this.courseList = courses);
  }

  ngOnDestroy() {
    this.courseListSubscription.unsubscribe();
    this.findCourseSubscription.unsubscribe();
  }

  handleEditCourse(courseId: number) {
    return this.router.navigateByUrl(`/courses/${courseId}`);
  }

  handleDeleteCourse(courseId: number) {
    const userChoice = confirm('Do you really want to delete this course?');
    if (userChoice) {
      this.coursesService.removeCourse(courseId);
    }
  }

  loadMoreCourses() {
    this.coursesService.loadMoreCourses();
  }
}
