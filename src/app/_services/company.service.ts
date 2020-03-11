import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Params } from 'src/app/_models';
import { catchError } from 'rxjs/operators';
import { API } from 'src/app/_api_config';

@Injectable({ providedIn: 'root' })

export class CompanyService extends ApiService {

    getCompanyLists(): Observable<any> {
        const url = API.COMPANY;
        return this.httpClient.get<any>(url).pipe(catchError(this.handleErrorPromise));
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