
import { Effect, Actions } from "@ngrx/effects";
import { AuthActionTypes, Login } from "./auth.actions";
import { ofType } from "@ngrx/effects";
import { tap } from "rxjs/internal/operators/tap";
import { Injectable } from "@angular/core";



@Injectable()
export class AuthEffects {

    constructor(private action$:Actions){
       console.log('Invoking '); 
    }

    @Effect({dispatch:false})
    login$ = this.action$.pipe(
        ofType<any>(AuthActionTypes.LoginAction),
        tap(action => localStorage.setItem('user',action))

    )
}