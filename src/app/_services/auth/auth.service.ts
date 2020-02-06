import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { API } from 'src/app/@config';
import { tap, mapTo, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class AuthService {

    private readonly TOKEN = 'token';
    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
    private loggedUser: string;

    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private httpClient: HttpClient, private router: Router) {
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

    getVerificationCode() {
        return this.httpClient.get<any>(API.VCODE).pipe(catchError(this.handleErrorPromise));
    }

    login(params) {
        return this.httpClient.post<any>(API.LOGIN, params)
            .pipe(map(res => { // res:{token:'',user:{}}
                this.setStoreTokens(res);
                this.currentUserSubject.next(res.user);
                return res.user;
            }));
    }

    // set data in local storage
    private setStoreTokens(res: any) {
        localStorage.setItem('currentUser', JSON.stringify(res.user));
        localStorage.setItem(this.TOKEN, res.token);
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
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
