import { Component, OnInit } from '@angular/core';
import { CoursesService, Course, NewCourse } from '../core/services/courses-service/courses.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  currentCourse: Course | null = null;
  currentCourseId: number | null = null;

  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.currentCourseId = parseInt(params.id, 10);
      this.currentCourse = this.coursesService.getCourseById(this.currentCourseId);
    });
  }

  onUpdateCourse() {
    this.coursesService.updateCourse(this.currentCourseId, this.currentCourse);
    this.router.navigateByUrl('courses');
  }

  onCancel() {
    this.router.navigateByUrl('courses');
  }
}
