import { Component } from '@angular/core';
import { NewCourse, CoursesService } from '../core/services/courses-service/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent {
  model: NewCourse;

  constructor(private coursesService: CoursesService, private router: Router) {
    this.model = {
      name: '',
      description: '',
      length: 0,
      date: Date.now(),
      isTopRated: false,
      authors: []
    };
  }

  onAddNewCourse() {
    this.coursesService.createCourse(this.model)
      .subscribe(() => this.router.navigateByUrl('/'));
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }
}
