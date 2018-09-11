import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CoursesService } from '../core/services/courses-service/courses.service';
import { dateValidator } from '../core/validators/dateValidator';
import { numberValidator } from '../core/validators/numberOnlyValidator';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  currentCourseId: number | null = null;
  currentCourseForm = new FormGroup({
    name: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
    ])),
    description: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(500)
    ])),
    date: new FormControl('', Validators.compose([
      Validators.required,
      dateValidator(),
    ])),
    length: new FormControl('', Validators.compose([
      Validators.required,
      numberValidator()
    ])),
    isTopRated: new FormControl(false),
  });

  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.currentCourseId = parseInt(params.id, 10);
      this.coursesService.getCourseById(this.currentCourseId).subscribe((course)=>{
        if (course) {
          this.currentCourseForm.controls.name.setValue(course.name);
          this.currentCourseForm.controls.description.setValue(course.description);
          this.currentCourseForm.controls.date.setValue(course.date);
          this.currentCourseForm.controls.length.setValue(course.length);
          this.currentCourseForm.controls.isTopRated.setValue(course.isTopRated);
        }
      });
    });
  }

  onUpdateCourse() {
    this.coursesService.updateCourse(this.currentCourseId, this.currentCourseForm.value);
    this.router.navigateByUrl('courses');
  }

  onCancel() {
    this.router.navigateByUrl('courses');
  }
}
