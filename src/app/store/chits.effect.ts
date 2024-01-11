import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CHITS, addChitSuccess, getChitsSuccess } from './chits.action';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ChitsService } from '../core/services/chits.service';

@Injectable()
export class ChitsEffectService {
  constructor(private actions$: Actions, private chitsService: ChitsService) {}

  loadChits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CHITS.GET_START),
      exhaustMap(() =>
        this.chitsService.fetchChits().pipe(
          map((chits) => getChitsSuccess({ payload: chits })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addChit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CHITS.ADD_START),
      tap((v) => v),
      exhaustMap((action: any) =>
        this.chitsService.createChit(action.payload).pipe(
          map((chit: any) => addChitSuccess({ payload: chit })),
          catchError((error: any) => error)
        )
      )
    )
  );
}
