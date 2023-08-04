import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import * as DataActions from '../actions/data.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
@Injectable()
export class DataEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  getData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.get),
      exhaustMap(() =>
        this.apiService.getData().pipe(
          map((articles) => {
            return DataActions.getSuccess({ articlelist: articles });
          }),
          catchError((error) => of(DataActions.getFailure({ error })))
        )
      )
    )
  );
}
