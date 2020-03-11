import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { catchError } from 'rxjs/operators';
import { API } from 'src/app/_api_config';

@Injectable({ providedIn: 'root' })

export class JobTypeService extends ApiService {

    // constructor(private httpClient: HttpClient) {
    //     super(httpClient);
    // }

    getJobTypeLists(): Observable<any> {
        const url = API.JOB_TYPE;
        return this.httpClient.get<any>(url).pipe(catchError(this.handleErrorPromise));
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}