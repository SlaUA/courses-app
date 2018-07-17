import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../core/services/courses-service/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  @Input() courseList: Course[];
  @Output() deleteCourse = new EventEmitter<any>();
  @Output() editCourse = new EventEmitter<any>();

  handleEdit($event) {
    this.editCourse.emit($event);
  }
  handleDelete($event) {
    this.deleteCourse.emit($event);
  }
}
