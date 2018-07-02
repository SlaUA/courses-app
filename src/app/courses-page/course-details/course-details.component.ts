import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  @Input() data: object;
  @Output() deleteCourse = new EventEmitter<number>();
  @Output() editCourse = new EventEmitter<number>();

  onDeleteCourse(courseId: number) {
    this.deleteCourse.emit(courseId);
  }

  onEditCourse(courseId: number) {
    this.editCourse.emit(courseId);
  }
}
