import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
import { CONFIG } from 'src/app/_data';

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
    duration = 5000; // 5s
    position = 'bottom-left';

    constructor(
        private router: Router,
        // private userService: UserService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private toastrService: NbToastrService,
    ) {
        // if (this.authService.currentUser) {
        //     this.router.navigate(['/pages']);
        // }
        this.createForm();
    }

    createForm() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                Validators.pattern(CONFIG.REGEX_EMAIL),
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(12),
            ]),
        });
    }

    ngOnInit() {
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
                // this.showToast(this.position, this.duration, res, 'success');
                this.authService.setStoreTokens(res.data.token);
                this.authService.setCurrentUser(res.data);
                this.router.navigate([this.returnUrl]);
                break;
            case 3:
            case 5:
                this.showToast(this.position, this.duration, res, 'danger');
                this.loading = false;
                break;
            default:
                break;
        }
    }

    showToast(position, duration, res: any, status: NbComponentStatus) {
        this.toastrService.show(
            `${res.message}`,
            `Lỗi: ${res.code}`
            , { position, duration, status, limit: 3 });
    }
}
