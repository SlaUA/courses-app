import { createSelector } from '@ngrx/store'

import { AppAction } from '../../actions/actions';

import * as constants from './constants';
import { Course } from './courses.service';

export interface CoursesState {
  courses: Course[]
};

const initialState = {
  courses: []
};

export function coursesReducer(state: object = initialState, action: AppAction) {
  switch (action.type) {
    case constants.COURSES_LOADED:
      return {
        courses: action.payload
      };

    default:
      return state;
  }
}

export const coursesState = createSelector(
  (state: any) => state.coursesReducer
);
