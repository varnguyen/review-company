import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    getCommentsByCompanyId(companyId = 0, pagination): Observable<any> {
        let params = new HttpParams();
        params = params.append('page', pagination.page);
        params = params.append('row', pagination.row);
        return this.httpClient.get<any>(`${API.COMPANY}/${companyId}/comment`, { params }).pipe(catchError(this.handleErrorPromise));
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}
