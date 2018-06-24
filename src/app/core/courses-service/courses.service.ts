import { Injectable } from '@angular/core';

export interface Course {
  courseNumber: number;
  duration: number;
  creationDate: number;
}

@Injectable({
  providedIn: 'root'
})
export default class CoursesService {
  getAllCourses(): Course[] {
    return [
      {
        courseNumber: 1,
        duration: 120,
        creationDate: Date.now()
      },
      {
        courseNumber: 2,
        duration: 86,
        creationDate: Date.now()
      },
      {
        courseNumber: 3,
        duration: 12,
        creationDate: Date.now()
      },
      {
        courseNumber: 4,
        duration: 55,
        creationDate: Date.now()
      }
    ];
  }
}
