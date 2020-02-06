import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    // canActivate() {
    //     // canActive can return Observable<boolean>, which is exactly what isAuthenticated returns
    //     return this.authService.isAuthenticated()
    //         .pipe(
    //             tap(authenticated => {
    //                 if (!authenticated) {
    //                     this.router.navigate(['auth/login']);
    //                 }
    //             }),
    //         );
    // }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authService.currentUserValue;
        console.log(currentUser);
        if (currentUser) {
            // logged in so return true
            console.log('CO currentUser');
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
