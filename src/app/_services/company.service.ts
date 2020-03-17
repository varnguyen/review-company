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

    getCompanyLists(data, pagination): Observable<any> {
        let params = new HttpParams();
        params = params.append('page', pagination.page);
        params = params.append('row', pagination.row);
        if (data.jobId) { params = params.append('job_id', data.jobId.toString()); }
        if (data.provinceId) { params = params.append('province_id', data.provinceId.toString()); }
        if (data.companyName) { params = params.append('company_name', data.companyName); }
        console.log(data);
        const url = API.COMPANY;
        return this.httpClient.get<any>(url, { params }).pipe(catchError(this.handleErrorPromise));
    }

    getCompanyById(companyId): Observable<any> {
        const url = API.COMPANY;
        return this.httpClient.get<any>(`${url}/${companyId}`).pipe(catchError(this.handleErrorPromise));
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}