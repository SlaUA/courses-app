import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent {
  title: string;
  description: string;
  date: string;
  duration: string;

  onAddNewCourse() {}
  onCancel() {}
}
