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
    vCode: any;
    src: string;
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
        this.getVerificationCode();
        this.createForm();
    }

    createForm() {
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            verification_code: new FormControl('', [Validators.required]),
        });
    }

    ngOnInit() {
        // if (this.authService.currentUserValue) {
        //     this.router.navigate(['/pages']);
        // }
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }

    get f() { return this.loginForm.controls; }

    getVerificationCode() {
        this.authService.getVerificationCode().subscribe(
            vcode => {
                this.vCode = vcode;
                this.src = `data:image/png;base64,${this.vCode.img}`;
            }
        );
    }

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
            code: this.f.verification_code.value,
            password: this.f.password.value,
            username: this.f.username.value,
            uuid: this.vCode.uuid
        };
        this.authService.login(params)
            .subscribe(
                res => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                    this.showToast(error.error, 'danger');
                    this.getVerificationCode();
                    this.loading = false;
                }
            );
    }

    showToast(error: any, status: NbComponentStatus) {
        this.toastrService.show(
            `${error.message}`,
            `Status: ${error.status}`
            , { status });
    }
}
