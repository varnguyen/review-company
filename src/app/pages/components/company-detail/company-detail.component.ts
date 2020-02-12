import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    comments = [
        {
            fake_name: 'Minh Nguyen',
            cmt: 'I usually finish my talks with the philosophical phrase that nothing stays the same.',
            avatar: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG',
            created: this.time.setHours(5, 29),
        },
        {
            fake_name: 'Linh Ka',
            cmt: 'The current rendering engine is being rewritten with the new much enhanced version called Ivy.',
            avatar: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG',
            created: this.time.setHours(12, 33),
        },
        {
            fake_name: 'Ngoc Hoang',
            cmt: 'I usually finish my talks with the philosophical phrase that nothing stays the same. And as you probably know it’s more then true with Angular. The current rendering engine is being rewritten with the new much enhanced version called Ivy.',
            avatar: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG',
            created: this.time.setHours(10, 31),
        },
    ];
    displayReviewForm = false;

    constructor(
        private route: ActivatedRoute,
    ) {
        this.userId = this.route.snapshot.params.company_id;
        console.log(this.userId);
    }

    ngOnInit() {
    }

    openReviewForm() {
        this.displayReviewForm = true;
    }

    onSubmitComment() {
        const newComment = {
            fake_name: 'Fake Name',
            cmt: 'A asda  askdjasd aslkdlkqwoppov xzvklasdfklas',
            avatar: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG',
            created: this.time.setHours(15, 29),
        };
        this.comments.push(newComment);
    }

}
