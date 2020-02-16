import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

    changePasswordForm: FormGroup;
    submitted = false;

    constructor() {
        this.initChangePasswordForm();
    }

    initChangePasswordForm() {
        this.changePasswordForm = new FormGroup({
            old_password: new FormControl('', [Validators.required]),
            new_password: new FormControl('', [Validators.required]),
            confirm_password: new FormControl('', [Validators.required]),
        });
    }

    ngOnInit() {
    }

    get f() { return this.changePasswordForm.controls; }


    onSubmit() {
        this.submitted = true;
    }

}
