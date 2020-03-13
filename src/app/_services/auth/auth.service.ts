import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { API } from 'src/app/_api_config';
import { tap, mapTo, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NbThemeService } from '@nebular/theme';

@Injectable({ providedIn: 'root' })

export class AuthService {

    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
    private loggedUser: string;

    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(
        private httpClient: HttpClient,
        private router: Router,
        private themeService: NbThemeService,
    ) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    public isAuthenticated(): boolean {

        if (this.currentUserValue !== null && this.currentUserValue !== undefined && this.currentUserValue !== '') {
            return true;
        }

        return false;
    }

    login(params) {
        return this.httpClient.post<any>(API.LOGIN, params)
            .pipe(map(res => {
                return res;
            }));
    }

    // set theme default
    setTheme(theme = 'default') {
        this.themeService.changeTheme(theme);
        localStorage.setItem('theme', theme);
    }

    // get theme default
    getTheme() {
        return localStorage.getItem('theme');
    }

    // set data in local storage
    setStoreTokens(token: string) {
        localStorage.setItem('token', token);
    }

    getJwtToken() {
        return localStorage.getItem('token');
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login']);
    }

    // login(user: { username: string, password: string }): Observable<boolean> {
    //     return this.http.post<any>(`${API.LOGIN}`, user)
    //         .pipe(
    //             tap(tokens => this.doLoginUser(user.username, tokens)),
    //             mapTo(true),
    //             catchError(error => {
    //                 alert(error.error);
    //                 return of(false);
    //             }));
    // }

    // logout() {
    //     return this.http.post<any>(`${API.LOGOUT}`, {
    //         'refreshToken': this.getRefreshToken()
    //     }).pipe(
    //         tap(() => this.doLogoutUser()),
    //         mapTo(true),
    //         catchError(error => {
    //             alert(error.error);
    //             return of(false);
    //         }));
    // }


    // isLoggedIn() {
    //     return !!this.getJwtToken();
    // }

    // refreshToken() {
    //     return this.http.post<any>(`${API.LOGOUT}/refresh`, {
    //         'refreshToken': this.getRefreshToken()
    //     }).pipe(tap((tokens: any) => {
    //         this.storeJwtToken(tokens.jwt);
    //     }));
    // }

    // getJwtToken() {
    //     return localStorage.getItem(this.JWT_TOKEN);
    // }

    // private doLoginUser(username: string, tokens: any) {
    //     this.loggedUser = username;
    //     this.storeTokens(tokens);
    // }

    // private doLogoutUser() {
    //     this.loggedUser = null;
    //     this.removeTokens();
    // }

    // private getRefreshToken() {
    //     return localStorage.getItem(this.REFRESH_TOKEN);
    // }

    // private storeJwtToken(jwt: string) {
    //     localStorage.setItem(this.JWT_TOKEN, jwt);
    // }

    // private storeTokens(tokens: any) {
    //     localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    //     localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
    // }

    // private removeTokens() {
    //     localStorage.removeItem(this.JWT_TOKEN);
    //     localStorage.removeItem(this.REFRESH_TOKEN);
    // }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}
