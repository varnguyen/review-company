import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Params } from 'src/app/_models';
import { catchError } from 'rxjs/operators';
import { API } from 'src/app/_api_config';

@Injectable({ providedIn: 'root' })

export class CompanyService {

    constructor(private httpClient: HttpClient) {
    }

    createCompany(company): Observable<any> {
        return this.httpClient.post<any>(API.COMPANY, company).pipe(catchError(this.handleErrorPromise));
    }

    createReviewCompany(review): Observable<any> {
        return this.httpClient.post<any>(API.COMMENT_COMPANY, review).pipe(catchError(this.handleErrorPromise));
    }

    getCompanyLists(data, pagination): Observable<any> {
        let params = new HttpParams();
        params = params.append('page', pagination.page);
        params = params.append('row', pagination.row);
        if (data.jobId > 0) { params = params.append('job_id', data.jobId); }
        if (data.provinceId > 0) { params = params.append('province_id', data.provinceId); }
        if (data.companyName) { params = params.append('name', data.companyName); }
        return this.httpClient.get<any>(API.COMPANY, { params }).pipe(catchError(this.handleErrorPromise));
    }

    getCompanyById(companyId): Observable<any> {
        return this.httpClient.get<any>(`${API.COMPANY}/${companyId}`).pipe(catchError(this.handleErrorPromise));
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}
