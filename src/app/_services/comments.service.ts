import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API } from 'src/app/_api_config';

@Injectable({ providedIn: 'root' })

export class CommentsService {

    constructor(private httpClient: HttpClient) {
    }

    getCommentsLists(): Observable<any> {
        return this.httpClient.get<any>(API.STATISTIC_COMMENT).pipe(catchError(this.handleErrorPromise));
    }

    getCommentsById(companyId = 0): Observable<any> {
        return this.httpClient.get<any>(`${API.COMMENT}/${companyId}`).pipe(catchError(this.handleErrorPromise));
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}