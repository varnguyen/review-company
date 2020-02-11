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
    names: string[] = [];
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

}
