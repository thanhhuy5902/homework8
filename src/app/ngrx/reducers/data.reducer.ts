import { createReducer, on } from '@ngrx/store';
import { DataState } from '../states/data.state';
import * as DataActions from '../actions/data.actions';

export const initialState: DataState = {
  isLoading: false,
  isSuccess: false,
  articalist: [],
  error: '',
};

export const dataReducer = createReducer(
  initialState,
  on(DataActions.get, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: true,
      isSuccess: false,
      error: '',
    };
    return newState;
  }),

  on(DataActions.getSuccess, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: false,
      isSuccess: true,
      articalist: action.articlelist,
      error: '',
    };
    return newState;
  }),

  on(DataActions.getFailure, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: false,
      isSuccess: false,
      error: action.error,
    };
    return newState;
  })
);
