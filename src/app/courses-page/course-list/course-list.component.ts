import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../core/services/courses-service/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Input() courseList: Course[];

  ngOnInit() {}

  handleDeleteCourse(courseId: number) {
    console.log(`courseID to remove: ${courseId}`);
  }

  handleEditCourse(courseId: number) {
    console.log(`courseID to edit: ${courseId}`);
  }
}
