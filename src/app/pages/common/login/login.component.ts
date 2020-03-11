import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

    model: any = {};
    isCheckName = true;
    returnUrl: string;
    loginForm: FormGroup;
    submitted = false;
    loading = false;

    constructor(
        private router: Router,
        // private userService: UserService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private toastrService: NbToastrService,
    ) {
        this.createForm();
    }

    createForm() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
    }

    ngOnInit() {
        // if (this.authService.currentUserValue) {
        //     this.router.navigate(['/pages']);
        // }
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.login();
    }

    login() {
        this.loading = true;
        const params = {
            password: this.f.password.value,
            email: this.f.email.value,
        };
        this.authService.login(params)
            .subscribe(
                res => { console.log(res); this.handleCode(res); },
                error => { console.log(error); }
            );
    }

    handleCode(res) {
        switch (res.code) {
            case 0:
                this.authService.setStoreTokens(res);
                this.router.navigate([this.returnUrl]);
                break;
            case 401:
                this.showToast(res, 'danger');
                this.loading = false;
                break;
            default:
                break;
        }
    }

    showToast(res: any, status: NbComponentStatus) {
        this.toastrService.show(
            `${res.message}`,
            `Status: ${res.code}`
            , { status });
    }
}
