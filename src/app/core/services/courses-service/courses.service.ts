import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';

export interface Course {
  id: number;
  name: string;
  description: string;
  length: number;
  date: number;
  isTopRated: boolean;
}

export interface NewCourse {
  name: string;
  description: string;
  length: number;
  date: number;
  isTopRated: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private allCourses: BehaviorSubject<Course []> = new BehaviorSubject<Course []>([]);
  private lastCount: Number = 4;

  constructor(private http: HttpClient) {
    this.http.get(`courses?start=0&count=${this.lastCount}`).subscribe((response: Course[]) => {
      this.allCourses.next(response);
    });
  }

  getAllCourses(): Observable<Course[]> {
    return this.allCourses.asObservable();
  }

  createCourse(courseDetails: NewCourse): Course[] {
    // last course id will be incremented to have consistent values
    const id = this.allCourses[this.allCourses.length - 1].id + 1;
    this.allCourses = [{id, ...courseDetails}, ...this.allCourses];
    return this.allCourses;
  }

  getCourseById(id: number): Observable<Course | null> {
    return this.allCourses.pipe(switchMap((courses) => {
      return of(courses.find((course) => course.id === id));
    }));
  }

  updateCourse(id: number, courseDetails: NewCourse): Course[] {
    this.allCourses = this.allCourses.map(
      (course) => (course.id === id ? {...course, ...courseDetails} : course)
    );
    return this.allCourses;
  }

  removeCourse(id: number): Course[] {
    this.allCourses = this.allCourses.filter((course) => course.id !== id);
    return this.allCourses;
  }
}
