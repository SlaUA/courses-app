import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoursesPageComponent } from './courses-page.component';
import { text } from '@angular/core/src/render3/instructions';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CoursesPageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call console.log with input value when clicking on find button', () => {
    spyOn(console, 'log');
    const textToFind = 'course # 1';
    component.findInputValue = textToFind;
    component.findCourse();
    expect(console.log).toHaveBeenCalledWith(`text to find: ${textToFind}`);
  });
  it('should NOT call console.log when clicking on find button with empty input', () => {
    spyOn(console, 'log');
    component.findCourse();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('should clear input value after clicking on find button', () => {
    const textToFind = 'course # 1';
    component.findInputValue = textToFind;
    component.findCourse();
    expect(component.findInputValue).toEqual('');
  });
  it('should call console.log after clicking on load more button', () => {
    const spy = spyOn(console, 'log');
    component.loadMoreCourses();
    expect(spy).toHaveBeenCalledWith('loading more...');
  });
});
