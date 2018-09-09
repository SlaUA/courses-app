import { createSelector } from '@ngrx/store'

import { AppAction } from '../../actions/actions';

import * as constants from './constants';

export interface AuthState {
  loggedIn: Boolean,
  token: String,
};

const initialState = {
  loggedIn: false,
  token: '',
};

export function authReducer(state: object = initialState, action: AppAction) {
  switch (action.type) {
    case constants.LOGGED_IN:
      return {
        loggedIn: true,
        token: action.payload
      };

    case constants.LOGGED_OUT:
      return initialState;

    default:
      return state;
  }
}

export const authState = createSelector(
  (state: any) => state.authReducer
);
