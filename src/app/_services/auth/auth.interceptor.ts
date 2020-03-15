import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(public authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // add authorization header with basic auth credentials if available
        const currentUser = this.authService.currentUser;
        const token = this.authService.getJwtToken();

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }

        return next.handle(request);

    }
}
