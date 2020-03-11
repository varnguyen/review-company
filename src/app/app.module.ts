import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    NbThemeModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbToastrModule,
    NbDatepickerModule,
    NbChatModule,
    NbWindowModule,
    NbDialogModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';

// add header token for all request
import { AuthInterceptor } from './_services/auth/auth.interceptor';
import { AuthGuard } from './_helpers/auth.guard';
import { AuthService } from './_services/auth/auth.service';

import { LoginModule } from './pages/common/login/login.module';
import { RegisterModule } from './pages/common/register/register.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LoginModule,
        RegisterModule,
        // Nebular Module
        NbThemeModule.forRoot({ name: 'dark' }), // dark - default
        NbMenuModule.forRoot(),
        NbToastrModule.forRoot(),
        NbLayoutModule,
        NbEvaIconsModule,
        NbSidebarModule,
        NbDatepickerModule.forRoot(),
        NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
        NbWindowModule.forRoot(),
        NbDialogModule.forRoot(),
        NbAuthModule.forRoot({
            strategies: [
                NbPasswordAuthStrategy.setup({
                    name: 'email',

                    login: {
                        redirect: {
                            success: '/pages/',
                            failure: null, // stay on the same page
                        },
                    },

                    register: {
                        redirect: {
                            success: '/welcome/',
                            failure: null, // stay on the same page
                        },
                    }
                }),

            ],
            forms: {},
        }),
    ],
    bootstrap: [AppComponent],
    providers: [
        AuthGuard,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class AppModule { }
