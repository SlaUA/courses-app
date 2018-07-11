import { Injectable } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: number;
  creationDate: number;
  topRated: boolean;
}

@Injectable({
  providedIn: 'root'
})
export default class CoursesService {
  private allCourses = [
    {
      id: 1,
      title: 'Video course 1',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      duration: 120,
      creationDate: 1536285929000,
      topRated: false,
    },
    {
      id: 2,
      title: 'Video course 2',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      duration: 86,
      creationDate: 1531031755000,
      topRated: false,
    },
    {
      id: 3,
      title: 'Video course 3',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      duration: 12,
      creationDate: 1546221737000,
      topRated: false,
    },
    {
      id: 4,
      title: 'Video course 4',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      duration: 55,
      creationDate: 1526785529000,
      topRated: true,
    }
  ];

  getAllCourses(): Course[] {
    return this.allCourses;
  }
}
