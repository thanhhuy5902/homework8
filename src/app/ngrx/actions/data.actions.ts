import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/models/Article';

export const get = createAction('[Article] Get');
export const getSuccess = createAction(
  '[Article] Get Success',
  props<{ articlelist: Article[] }>()
);
export const getFailure = createAction(
  '[Article] Get Failure',
  props<{ error: any }>()
);
