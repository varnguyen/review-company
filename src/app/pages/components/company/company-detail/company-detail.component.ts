import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { REVIEWS_LIST } from './data-review';
import { CompanyService } from 'src/app/_services';
import { NbDialogService } from '@nebular/theme';
import { CompanyReviewDialogComponent } from '../company-review-dialog/company-review-dialog.component';

@Component({
    selector: 'app-company-detail',
    templateUrl: './company-detail.component.html',
    styleUrls: ['./company-detail.component.scss'],

})
export class CompanyDetailComponent implements OnInit {

    companyId = 0;
    company: any = {};
    // company = {
    //     name: 'Boosting performance of Angular applications with manual change detection',
    //     company_id: 1,
    //     address: 'Nick Jones',
    //     member_total: '100',
    //     picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
    // };
    private time: Date = new Date();
    displayReviewForm = false;
    reviewsList = REVIEWS_LIST;

    names: string[] = [];
    constructor(
        private route: ActivatedRoute,
        private companyService: CompanyService,
        private dialogService: NbDialogService,
    ) {
        this.companyId = this.route.snapshot.params.company_id;
        this.getCompanyDetail(this.companyId);
    }

    ngOnInit() {
        console.log(this.reviewsList);
    }

    openReviewForm() {
        this.dialogService.open(CompanyReviewDialogComponent)
            .onClose.subscribe(
                data => {
                    console.log(data);
                }
            );
    }

    onSubmitComment(id) {
        // const review_obj = this.reviewsList.find(e => e.review_id === id);
        // console.log(review_obj);
        // const newComment = {
        //     fake_name: 'Fake Name',
        //     cmt: 'A asda  askdjasd aslkdlkqwoppov xzvklasdfklas',
        //     avatar: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG',
        //     created: this.time.setHours(15, 29),
        // };
        // this.comments.push(newComment);
    }

    getCompanyDetail(companyId) {
        this.companyService.getCompanyById(companyId).subscribe(
            res => {
                if (res.code === 0) {
                    console.log(res);
                    this.company = res.data;
                }
            }
        );
    }

}
