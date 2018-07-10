import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  findInputValue: string;

  ngOnInit() {}

  findCourse() {
    if (!this.findInputValue) {
      return;
    }
    console.log(`text to find: ${this.findInputValue}`);
    this.findInputValue = '';
  }

  loadMoreCourses() {
    console.log('loading more...');
  }
}
