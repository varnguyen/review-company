import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { REVIEWS_LIST } from './data-review';
import { CompanyService, CommentsService } from 'src/app/_services';
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
    // reviewsList = REVIEWS_LIST;
    isLoading = true;
    names: string[] = [];
    reviewsList: [] = [];
    replyReviews = [
        {
            reply_review_id: 1,
            fake_name: 'Minh Nguyen',
            cmt: 'I usually finish my talks with the philosophical phrase that nothing stays the same.',
            avatar: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG',
            created: '9:12 PM',
        },
        {
            reply_review_id: 2,
            fake_name: 'Linh Ka',
            cmt: 'The current rendering engine is being rewritten with the new much enhanced version called Ivy.',
            avatar: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG',
            created: '9:12 PM',
        },
        {
            reply_review_id: 3,
            fake_name: 'Ngoc Hoang',
            cmt: 'I usually finish my talks with the philosophical phrase that nothing stays the same. And as you probably know it’s more then true with Angular. The current rendering engine is being rewritten with the new much enhanced version called Ivy.',
            avatar: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG',
            created: '9:12 PM',
        },
    ];
    page = 1;
    row = 10;

    constructor(
        private route: ActivatedRoute,
        private dialogService: NbDialogService,
        private companyService: CompanyService,
        private commentsService: CommentsService,
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
                    this.isLoading = false;
                    this.getCommentsByCompany();
                }
            }
        );
    }

    getCommentsByCompany() {
        const pagination = {
            page: this.page,
            row: this.row
        };
        this.commentsService.getCommentsByCompanyId(this.companyId,pagination).subscribe(
            res => {
                console.log('Comments :', res);
                if (res.code === 0) {
                    this.reviewsList = res.data;
                }
            }
        );
    }

}
