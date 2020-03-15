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

    getCompanyLists(jobId = null, provinceId = null): Observable<any> {
        let params = new HttpParams();
        params = params.append('page', '1');
        params = params.append('row', '10');
        if (jobId) { params = params.append('job_id', jobId); }
        if (provinceId) { params = params.append('province_id', provinceId); }
        const url = API.COMPANY;
        return this.httpClient.get<any>(url, { params }).pipe(catchError(this.handleErrorPromise));
    }

    getCompanyById(companyId): Observable<any> {
        const url = API.COMPANY;
        return this.httpClient.get<any>(`${url} /${companyId}`).pipe(catchError(this.handleErrorPromise));
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}