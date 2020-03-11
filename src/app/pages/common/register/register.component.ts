import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

    constructor() {
        this.createForm();
    }

    createForm() {
        this.registerForm = new FormGroup({
            nick_name: new FormControl('', [
                Validators.required,
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.maxLength(10)
            ]),
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

        console.log(this.f);
        if (this.registerForm.invalid) {
            return;
        }

        this.register();
    }

    register() {
        console.log('register');
    }

}
