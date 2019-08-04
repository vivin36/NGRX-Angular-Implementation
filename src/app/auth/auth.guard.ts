import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { State } from "@ngrx/store";
import { AppState } from "../reducers";
import { isLoggedIn } from "./auth.selector";
import { select } from "@ngrx/store";
import { tap } from "rxjs/internal/operators/tap";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private store:State<AppState>,private router:Router){
        
    }
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>{
        return this.store
        .pipe(
            select(isLoggedIn),
            tap(loggedIn =>{
                if(!loggedIn){
                    this.router.navigateByUrl('/login');
                }
            }
                
            )
        )
    }
}