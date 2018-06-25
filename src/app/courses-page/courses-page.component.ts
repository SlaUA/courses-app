import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  private findInputValue: string;

  ngOnInit() {
    this.clearFindInput();
  }

  findCourse() {
    if (!this.findInputValue) {
      return;
    }
    console.log(`text to find: ${this.findInputValue}`);
    this.clearFindInput();
  }

  clearFindInput() {
    this.findInputValue = '';
  }
}
