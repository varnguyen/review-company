import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailRegex, phoneRegex } from 'src/app/_data';
import { CompanyService, ShareDataService } from 'src/app/_services';
import { NbComponentStatus, NbToastrService, NbMenuService, NbDialogService } from '@nebular/theme';
import { STAFFS } from '../../../../_data';

@Component({
    selector: 'app-company-add',
    templateUrl: './company-add.component.html',
    styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

    @ViewChild('dialog') public dialog: TemplateRef<any>;

    submitted = false;
    isLoading = false;
    companyForm: FormGroup;
    staff = STAFFS;
    positonToastr = 'bottom-left';

    provinces = [];
    provinceId = 0;
    jobs = [];
    jobId = 0;


    constructor(
        private companyService: CompanyService,
        private toastrService: NbToastrService,
        private menuService: NbMenuService,
        private shareDataService: ShareDataService,
        private dialogService: NbDialogService,
    ) {
        this.shareDataService.listenData().subscribe(res => {
            this.provinces = res.provinces;
            this.provinceId = this.provinces[0].province_id;
            this.jobs = res.jobs;
            this.jobId = this.jobs[0].job_id;
        });
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

    open(dialog: TemplateRef<any>) {
        this.dialogService.open(this.dialog, { context: 'Cảm ơn đóng góp của bạn.' });
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
