import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { AuthActionTypes } from './auth.actions';
import { tap } from 'rxjs/internal/operators/tap';



@Injectable()
export class AuthEffects {

  constructor(private action$:Actions){
    console.log('Invoking '); 
 }

 @Effect({dispatch:false})
 login$ = this.action$.pipe(
     ofType<any>(AuthActionTypes.LoginAction),
     tap(action => {localStorage.setItem('user',action.user)})

 )
}
