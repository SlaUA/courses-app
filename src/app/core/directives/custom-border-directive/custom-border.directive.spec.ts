import { TestBed, ComponentFixture } from '@angular/core/testing';
import * as moment from 'moment';
import { CustomBorderDirective } from './custom-border.directive';
import { Component, DebugElement, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div [appCustomBorder]="futureDate"></div>`
})
class DummyComponent implements OnInit {
  futureDate: number;
  ngOnInit() {
    this.futureDate = 1536285929000;
  }
}

describe('CustomBorderDirective', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyComponent, CustomBorderDirective]
    });
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('div'));
  });
  it('should change border color to blue when a course is in future', () => {
    expect(debugElement.nativeElement.style.borderColor).toBe('blue');
  });
});
