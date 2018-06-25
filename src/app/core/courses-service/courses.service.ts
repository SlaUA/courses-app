import { Injectable } from '@angular/core';

export interface Course {
  id: number;
  duration: number;
  creationDate: number;
}

@Injectable({
  providedIn: 'root'
})
export default class CoursesService {
  private allCourses = [
    {
      id: 1,
      duration: 120,
      creationDate: Date.now()
    },
    {
      id: 2,
      duration: 86,
      creationDate: Date.now()
    },
    {
      id: 3,
      duration: 12,
      creationDate: Date.now()
    },
    {
      id: 4,
      duration: 55,
      creationDate: Date.now()
    }
  ];

  getAllCourses(): Course[] {
    return this.allCourses;
  }
}
