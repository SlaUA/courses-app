import { Component, OnInit } from '@angular/core';
import CoursesService, {
  Course
} from '../../core/courses-service/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList: Course[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courseList = this.coursesService.getAllCourses();
  }

  handleDeleteCourse(courseId: number) {
    console.log(`courseID to remove: ${courseId}`);
  }
}
