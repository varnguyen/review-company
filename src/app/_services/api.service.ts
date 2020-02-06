import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class ApiService {
    constructor(protected httpClient: HttpClient) { }

    call(request: any): Observable<any> {
        return this.httpClient.post<any>(environment.api, request)
            .pipe(
                map(this.handleResponseNotSuccess),
            );
    }

    handleResponseNotSuccess(res: any) {
        return res;
    }

}
