import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { REVIEWS_LIST } from './data-review';

@Component({
    selector: 'app-company-detail',
    templateUrl: './company-detail.component.html',
    styleUrls: ['./company-detail.component.scss'],

})
export class CompanyDetailComponent implements OnInit {

    userId = 0;
    company = {
        name: 'Boosting performance of Angular applications with manual change detection',
        company_id: 1,
        address: 'Nick Jones',
        member_total: '100',
        picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
    };
    private time: Date = new Date();
    displayReviewForm = false;
    reviews_list = REVIEWS_LIST;

    constructor(
        private route: ActivatedRoute,
    ) {
        this.userId = this.route.snapshot.params.company_id;
        console.log(this.userId);
    }

    ngOnInit() {
        console.log(this.reviews_list);
    }

    openReviewForm() {
        this.displayReviewForm = true;
    }

    onSubmitComment(id) {
        // const review_obj = this.reviews_list.find(e => e.review_id === id);
        // console.log(review_obj);
        // const newComment = {
        //     fake_name: 'Fake Name',
        //     cmt: 'A asda  askdjasd aslkdlkqwoppov xzvklasdfklas',
        //     avatar: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG',
        //     created: this.time.setHours(15, 29),
        // };
        // this.comments.push(newComment);
    }

}
