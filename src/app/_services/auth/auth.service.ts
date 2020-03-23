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

    public currentUser: Observable<any>;

    constructor(
        private httpClient: HttpClient,
        private router: Router,
        private themeService: NbThemeService,
    ) {
        this.currentUser = this.getCurrentUser()
    }

    // Login
    login(params) {
        return this.httpClient.post<any>(API.LOGIN, params)
            .pipe(map(res => {
                return res;
            }));
    }

    // Login
    refreshToken(accessToken) {
        return this.httpClient.post<any>(API.COMPANY, accessToken).pipe(catchError(this.handleErrorPromise));
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

    // Set token in local storage
    setStoreTokens(token: string) {
        localStorage.setItem('token', token);
    }

    // Get user info from localStorage
    getCurrentUser() {
        const user = localStorage.getItem('currentUser');
        if (user !== null && user !== '' && user !== undefined) {
            return JSON.parse(localStorage.getItem('currentUser'));
        }
        return null;
    }

    // Set user info in local storage
    setCurrentUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    getJwtToken() {
        const token = localStorage.getItem('token');
        if (token !== null && token !== '' && token !== undefined) {
            return localStorage.getItem('token');
        }
        return null;
    }

    logout() {
        // remove user from local storage to log user out
        this.removeCurrentUser();
        this.removeToken();
        this.router.navigate(['/auth/login']);
    }

    removeCurrentUser() {
        localStorage.removeItem('currentUser');
    }

    removeToken() {
        localStorage.removeItem('token');
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
