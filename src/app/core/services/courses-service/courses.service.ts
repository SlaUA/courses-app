import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { flatMap, switchMap, map } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';
import { Store, select } from '@ngrx/store';
import { CoursesState, coursesState } from './reducer';
import * as constants from './constants';

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
  private lastCount: any = 4;
  private loadMoreCount: any = 4;

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private store: Store<CoursesState>
  ) {
    this.retrieveAllCourses().subscribe((response: Course[]) => {
      this.store.dispatch({
        type: constants.COURSES_LOADED,
        payload: response
      });
    });
  }

  retrieveAllCourses() {
    this.loadingService.startLoading();
    return this.http.get(`courses?start=0&count=${this.lastCount}`).pipe(
      map((courses) => {
        this.loadingService.stopLoading();
        return courses;
      })
    );
  }

  getAllCourses(): Observable<CoursesState> {
    return this.store.pipe(select(coursesState));
  }

  loadMoreCourses() {
    this.loadingService.startLoading();
    this.lastCount += this.loadMoreCount;
    this.retrieveAllCourses().subscribe((response: Course[]) => {
      this.loadingService.stopLoading();
      this.store.dispatch({
        type: constants.COURSES_LOADED,
        payload: response
      });
      return this.getAllCourses();
    });
  }

  findCourse(textToFind: String) {
    this.loadingService.startLoading();
    this.http.get(`courses?textFragment=${textToFind}`).subscribe((response: Course[]) => {
      this.loadingService.stopLoading();
      this.store.dispatch({
        type: constants.COURSES_LOADED,
        payload: response
      });
      return this.getAllCourses();
    });
  }

  createCourse(courseDetails: NewCourse): Observable<any> {
    this.loadingService.startLoading();
    return this.http
      .post(`courses`, courseDetails)
      .pipe(
        flatMap(() => this.retrieveAllCourses()),
        map((response: Course[]) => {
          this.loadingService.stopLoading();
          this.store.dispatch({
            type: constants.COURSES_LOADED,
            payload: response
          });
          return this.getAllCourses();
        })
      );
  }

  getCourseById(id: number): Observable<Course | null> {
    return this.getAllCourses().pipe(
      switchMap((courses) => of(
        courses.find((course) => course.id === id)
      ))
    );
  }

  updateCourse(id: number, courseDetails: NewCourse) {
    this.loadingService.startLoading();
    this.http
      .patch(`courses/${id}`, courseDetails)
      .pipe(flatMap(() => this.retrieveAllCourses()))
      .subscribe((response: Course[]) => {
        this.store.dispatch({
          type: constants.COURSES_LOADED,
          payload: response
        });
      });
  }

  removeCourse(id: number) {
    this.loadingService.startLoading();
    this.http
      .delete(`courses/${id}`)
      .pipe(flatMap(() => this.retrieveAllCourses()))
      .subscribe((response: Course[]) => {
        this.store.dispatch({
          type: constants.COURSES_LOADED,
          payload: response
        });
      });
  }
}
