import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
    selector: 'app-company-review-dialog',
    templateUrl: './company-review-dialog.component.html',
    styleUrls: ['./company-review-dialog.component.scss']
})
export class CompanyReviewDialogComponent {

    constructor(protected ref: NbDialogRef<CompanyReviewDialogComponent>) { }

    cancel() {
        this.ref.close();
    }

    submit() {
        this.ref.close({});
    }

}
