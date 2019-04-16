import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from './../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    
    constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return of(true);
        // return this.auth.authUser.pipe(
        //     map(user => {
        //         if (user) {
        //             return true;
        //         } else {
        //             this.router.navigate(['login']);
        //             return false;
        //         }
        //     })
        // );
    }
}
