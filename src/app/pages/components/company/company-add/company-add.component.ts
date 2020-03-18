import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailRegex, phoneRegex } from 'src/app/_data';
import { CompanyService } from 'src/app/_services';
import { NbComponentStatus, NbToastrService, NbMenuService } from '@nebular/theme';
import { staff } from '../../../../_data';

@Component({
    selector: 'app-company-add',
    templateUrl: './company-add.component.html',
    styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

    submitted = false;
    isLoading = false;
    companyForm: FormGroup;
    staff = staff;
    positonToastr = 'bottom-left';

    constructor(
        private companyService: CompanyService,
        private toastrService: NbToastrService,
        private menuService: NbMenuService
    ) {
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
                Validators.maxLength(20),
            ]),
            job_id: new FormControl(1, []),
            province_id: new FormControl(1, []),
            address: new FormControl('', [
                Validators.required,
                Validators.maxLength(256)
            ]),
            member_total: new FormControl(1, []),
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

        if (this.companyForm.status === 'VALID') {
            this.isLoading = true;
            this.addCompany();
        }
    }

    showToast(position, status: NbComponentStatus, message = '') {
        this.toastrService.show(
            message,
            'Success',
            { position, status });
    }

    addCompany() {
        const company = this.companyForm.value;
        this.companyService.createCompany(company).subscribe(
            res => {
                if (res.code === 0) {
                    this.isLoading = false;
                    this.submitted = false;
                    this.showToast(this.positonToastr, 'success', res.message);
                    this.menuService.navigateHome();
                }
            }
        )
    }

}
