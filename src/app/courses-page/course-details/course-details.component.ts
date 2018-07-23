import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Course } from '../../core/services/courses-service/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  @Input() data: Course;
  @Output() deleteCourse = new EventEmitter<number>();
  @Output() editCourse = new EventEmitter<number>();

  ngOnInit() {}

  onDeleteCourse(courseId: number) {
    this.deleteCourse.emit(courseId);
  }

  onEditCourse(courseId: number) {
    this.editCourse.emit(courseId);
  }
}
