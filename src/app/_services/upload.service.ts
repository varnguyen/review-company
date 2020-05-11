import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Params } from 'src/app/_models';
import { catchError } from 'rxjs/operators';
import { API } from 'src/app/_api_config';

@Injectable({ providedIn: 'root' })

export class UploadService {

    constructor(private httpClient: HttpClient) {
    }

    upload(file): Observable<any> {
        return this.httpClient.post<any>(API.UPLOAD, { file }).pipe(catchError(this.handleErrorPromise));
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error);
    }
}
