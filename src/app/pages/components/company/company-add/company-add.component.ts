import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailRegex,phoneRegex } from 'src/app/_data';

@Component({
    selector: 'app-company-add',
    templateUrl: './company-add.component.html',
    styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

    submitted = false;
    companyForm: FormGroup;

    constructor() {
        this.initCompanyForm();
    }

    initCompanyForm() {
        this.companyForm = new FormGroup({
            full_name: new FormControl('', [
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(256),
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern(emailRegex)
            ]),
            phone: new FormControl('', [
                Validators.required,
                Validators.pattern(phoneRegex),
                Validators.minLength(10),
                Validators.maxLength(12),
            ]),
            job_id: new FormControl('1', []),
            province_id: new FormControl('1', []),
            address: new FormControl('', [
                Validators.maxLength(256)
            ]),
            member_total: new FormControl('1', []),
            website: new FormControl('', [
                Validators.minLength(12),
                Validators.maxLength(256)
            ]),
        });
    }

    ngOnInit() {
    }

    get f() { return this.companyForm.controls; }

    onSubmit() {
        this.submitted = true;
        console.log(this.companyForm);

        if (this.companyForm.status === 'VALID') {
            this.addCompany();
        }
    }

    addCompany() {
        console.log('addCompany');
    }

}
