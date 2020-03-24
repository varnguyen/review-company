import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { CONFIG } from 'src/app/_data';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services';

@Component({
    selector: 'app-company-review-dialog',
    templateUrl: './company-review-dialog.component.html',
    styleUrls: ['./company-review-dialog.component.scss']
})
export class CompanyReviewDialogComponent implements OnInit {

    reviewForm: FormGroup;
    who = CONFIG.WHO;
    submitted = false;
    currentUser: any;

    constructor(
        private authService: AuthService,
        protected ref: NbDialogRef<CompanyReviewDialogComponent>,
    ) {
        this.initReviewForm();
        this.currentUser = this.authService.getCurrentUser();
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
            data.user_id = this.currentUser.user_id;
            data.is_review = 1;
            console.log(data);
            this.ref.close(data);
        }
    }

}
