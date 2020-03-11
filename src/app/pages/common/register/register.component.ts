import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailRegex } from 'src/app/_data';

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
                Validators.minLength(5),
                Validators.maxLength(50)
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern(emailRegex)
            ]),
            // gender: new FormControl('', []),
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

    register() {
        console.log('register');
        console.log(this.registerForm.value);
    }

}
