import { Action } from '@ngrx/store';

export interface AppAction extends Action {
  type: string;
  payload?: any;
}
