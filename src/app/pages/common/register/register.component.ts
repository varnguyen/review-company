import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CONFIG } from 'src/app/_data';
import { UserService, AuthService } from 'src/app/_services';
import { Router } from '@angular/router';

import { NbToastrService, NbComponentStatus } from '@nebular/theme';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

    submitted = false;
    loading = false;
    errors = [];
    messages = [];
    user: any = {};
    registerForm: FormGroup;
    duration = 5000; // 5s
    position = 'bottom-left';

    constructor(
        private router: Router,
        private userService: UserService,
        private authService: AuthService,
        private toastrService: NbToastrService,
    ) {
        this.createForm();
    }

    createForm() {
        this.registerForm = new FormGroup({
            nick_name: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(30)
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern(CONFIG.REGEX_EMAIL)
            ]),
            gender: new FormControl('1', []),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(12)
            ]),
            rep_password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(12)
            ]),
        });
    }

    ngOnInit() {
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        console.log(this.registerForm);
        if (this.registerForm.status === 'INVALID') {
            return;
        }

        this.register();
    }

    handleCode(res) {
        switch (res.code) {
            case 0:
                this.authService.setCurrentUser(res.data);
                this.router.navigate(['/']);
                break;
            case 2:
            case 4:
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
            , { position, duration, status });
    }

    register() {
        this.userService.registerUser(this.registerForm.value).subscribe(
            res => {
                console.log(res);
                this.handleCode(res);
            }
        );
    }

}
