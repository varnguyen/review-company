import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Params } from 'src/app/_models';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { API } from 'src/app/@config';

@Injectable({ providedIn: 'root' })

export class ProvincesService extends ApiService {

    getProvinceLists(): Observable<any> {
        const url = API.PROVINCE;
        return this.httpClient.get<any>(url).pipe(catchError(this.handleErrorPromise));
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}