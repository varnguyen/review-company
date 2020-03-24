import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Params } from 'src/app/_models';
import { catchError } from 'rxjs/operators';
import { API } from 'src/app/_api_config';

@Injectable({ providedIn: 'root' })

export class UserService extends ApiService {

    registerUser(user): Observable<any> {
        const url = API.REGISTER_USER;
        return this.httpClient.post<any>(url, user).pipe(catchError(this.handleErrorPromise));
    }

    getUserInfo(): Observable<any> {
        const url = API.USER_INFO;
        return this.httpClient.get<any>(url).pipe(catchError(this.handleErrorPromise));
    }

    updateUserInfo(user): Observable<any> {
        const url = API.UPDATE_USER_INFO;
        return this.httpClient.post<any>(url, user).pipe(catchError(this.handleErrorPromise));
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error);
    }
}