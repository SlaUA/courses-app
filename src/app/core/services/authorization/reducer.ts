import { createSelector } from '@ngrx/store'

import { AppAction } from '../../actions/actions';

import * as constants from './constants';

export interface AuthState {
  loggedIn: Boolean,
};

const initialState = false;

export function authReducer(state: Boolean = initialState, action: AppAction) {
  switch (action.type) {
    case constants.LOGGED_IN:
      return true;

    case constants.LOGGED_OUT:
      return false;

    default:
      return state;
  }
}

export const authState = createSelector(
  (state: any) => state.authReducer
);
