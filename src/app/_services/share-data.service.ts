import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ShareDataService {

    public dataSource = new Subject<any>();

    constructor() { }

    passData(data) {
        this.dataSource.next(data);
    }

    listenData(): Observable<any> {
        return this.dataSource.asObservable();
    }

}
