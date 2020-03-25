import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { CONFIG } from 'src/app/_data';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-company-review-dialog',
    templateUrl: './company-review-dialog.component.html',
    styleUrls: ['./company-review-dialog.component.scss']
})
export class CompanyReviewDialogComponent implements OnInit {

    reviewForm: FormGroup;
    who = CONFIG.WHO;
    submitted = false;

    constructor(
        protected ref: NbDialogRef<CompanyReviewDialogComponent>,
    ) {
        this.initReviewForm();
    }

    initReviewForm() {
        this.reviewForm = new FormGroup({
            who_id: new FormControl(1, [
                Validators.required,
            ]),
            comment: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(500),
            ]),
        });
    }
    get f() { return this.reviewForm.controls; }

    ngOnInit() { }

    cancel() {
        this.ref.close();
    }

    submit() {
        this.submitted = true;

        if (this.reviewForm.status === 'VALID') {
            const data = this.reviewForm.value;
            this.ref.close(data);
        }
    }

}
