import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxWindowTokenModule } from 'ngx-window-token';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PageComponent } from './page.component';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({,
      imports: [NgxWindowTokenModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
