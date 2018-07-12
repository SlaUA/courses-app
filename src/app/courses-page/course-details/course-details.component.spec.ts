import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsComponent } from './course-details.component';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { detectChanges } from '@angular/core/src/render3';
import { DurationPipe } from '../../core/pipes/duration/duration.pipe';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CourseDetailsComponent, DurationPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should raises "deleteCourse" event when clicked on delete button', () => {
    const COURSE_ID = 1;
    component.data = {
      id: COURSE_ID
    };
    component.deleteCourse.subscribe((deletedCourseId) =>
      expect(deletedCourseId).toBe(COURSE_ID)
    );
    component.onDeleteCourse(COURSE_ID);
  });
  it('should raises "editCourse" event when clicked on delete button', () => {
    const COURSE_ID = 2;
    component.data = {
      id: COURSE_ID
    };
    component.deleteCourse.subscribe((deletedCourseId) =>
      expect(deletedCourseId).toBe(COURSE_ID)
    );
    component.onEditCourse(COURSE_ID);
  });
});
