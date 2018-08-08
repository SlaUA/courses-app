import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { flatMap, switchMap, map } from 'rxjs/operators';

export interface Course {
  id: number;
  name: string;
  description: string;
  length: number;
  date: number;
  isTopRated: boolean;
  authors: any[];
}

export interface NewCourse {
  name: string;
  description: string;
  length: number;
  date: number;
  isTopRated: boolean;
  authors: any[];
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private allCourses: BehaviorSubject<Course []> = new BehaviorSubject<Course []>([]);
  private lastCount: any = 4;
  private loadMoreCount: any = 4;

  constructor(private http: HttpClient) {
    this.retrieveAllCourses().subscribe((response: Course[]) => {
      this.allCourses.next(response);
    });
  }

  retrieveAllCourses() {
    return this.http.get(`courses?start=0&count=${this.lastCount}`);
  }

  getAllCourses(): Observable<Course[]> {
    return this.allCourses.asObservable();
  }

  loadMoreCourses() {
    this.lastCount += this.loadMoreCount;
    this.retrieveAllCourses().subscribe((response: Course[]) => {
      this.allCourses.next(response);
    });
  }

  findCourse(textToFind: String) {
    this.http.get(`courses?textFragment=${textToFind}`).subscribe((response: Course[]) => {
      this.allCourses.next(response);
    });
  }

  createCourse(courseDetails: NewCourse): Observable<any> {
    return this.http
      .post(`courses`, courseDetails)
      .pipe(
        flatMap(() => this.retrieveAllCourses()),
        map((response: Course[]) => {
          this.allCourses.next(response);
        })
      );
  }

  getCourseById(id: number): Observable<Course | null> {
    return this.allCourses.pipe(switchMap((courses) => {
      return of(courses.find((course) => course.id === id));
    }));
  }

  updateCourse(id: number, courseDetails: NewCourse) {
    this.http
      .patch(`courses/${id}`, courseDetails)
      .pipe(flatMap(() => this.retrieveAllCourses()))
      .subscribe((response: Course[]) => this.allCourses.next(response));
  }

  removeCourse(id: number) {
    this.http
      .delete(`courses/${id}`)
      .pipe(flatMap(() => this.retrieveAllCourses()))
      .subscribe((response: Course[]) => this.allCourses.next(response));
  }
}
