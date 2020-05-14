import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Add header token for all request
import { AuthInterceptor } from './_services/auth/auth.interceptor';
import { AuthGuard } from './_helpers/auth.guard';
import { AuthService } from './_services/auth/auth.service';

import { LoginModule } from './pages/common/login/login.module';
import { RegisterModule } from './pages/common/register/register.module';
import { RequestPasswordModule } from './pages/common/request-password/request-password.module';

import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
registerLocaleData(localeVi);

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
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import * as es from 'date-fns/locale/es';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        LoginModule,
        RegisterModule,
        RequestPasswordModule,

        // Nebular Module
        ThemeModule.forRoot(),
        NbThemeModule.forRoot({ name: 'dark' }), // dark - default
        NbMenuModule.forRoot(),
        NbToastrModule.forRoot(),
        NbLayoutModule,
        NbEvaIconsModule,
        NbSidebarModule.forRoot(),
        NbDatepickerModule.forRoot(),
        NbDateFnsDateModule.forRoot({
            format: 'dd.MM.yyyy',
            parseOptions: { locale: es, awareOfUnicodeTokens: true }, // useAdditionalWeekYearTokens: true,
            formatOptions: { locale: es, awareOfUnicodeTokens: true }, // useAdditionalWeekYearTokens: true,
        }),
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
        CoreModule.forRoot(),

    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: LOCALE_ID, useValue: 'vi-VN' }, // ja-JP
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
