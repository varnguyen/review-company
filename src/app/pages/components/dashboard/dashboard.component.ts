import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NbListItemComponent } from '@nebular/theme';
import { countries } from 'src/app/_data/countries';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    private time: Date = new Date();
    users = {
        nick: { name: 'Nick Jones', picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        eva: { name: 'Eva Moor', picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        jack: { name: 'Jack Williams', picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        lee: { name: 'Lee Wong', picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        alan: { name: 'Alan Thompson', picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        kate: { name: 'Kate Martinez', picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
    };

    private types = {
        mobile: 'mobile',
        home: 'home',
        work: 'work',
    };
    topCompanyReviews: any[] = [
        { status: 'danger', name: 'Nick Jones', total: 100, picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        { status: 'warning', name: 'Eva Moor', total: 90, picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        { status: 'success', name: 'Jack Williams', total: 80, picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        { status: 'info', name: 'Lee Wong', total: 70, picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        { status: 'primary', name: 'Alan Thompson', total: 60, picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        { status: 'basic', name: 'Kate Martinez', total: 50, picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        { status: 'controlÏ', name: 'Williams Moor', total: 40, picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
    ];
    comments: any[] = [
        {
            user_name: 'Nick Jones', type: this.types.home, time: this.time.setHours(21, 12),
            company: {
                name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
                short_name: 'VNEXT',
                address: 'Nick Jones',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            }
        },
        {
            user_name: 'Nick Jones', type: this.types.home, time: this.time.setHours(17, 45),
            company: {
                name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
                short_name: 'Angular',
                address: 'Nick Jones',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            }
        },
        {
            user_name: 'Nick Jones', type: this.types.mobile, time: this.time.setHours(5, 29),
            company: {
                name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
                short_name: 'Applications',
                address: 'Nick Jones',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            }
        },
        {
            user_name: 'Nick Jones', type: this.types.mobile, time: this.time.setHours(11, 24),
            company: {
                name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
                short_name: 'detection',
                address: 'Nick Jones',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            }
        },
        {
            user_name: 'Nick Jones', type: this.types.mobile, time: this.time.setHours(10, 45),
            company: {
                name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
                short_name: 'Manual',
                address: 'Nick Jones',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            }
        },
        {
            user_name: 'Nick Jones', type: this.types.work, time: this.time.setHours(9, 42),
            company: {
                name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
                short_name: 'Performance',
                address: 'Nick Jones',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            }
        },
        {
            user_name: 'Nick Jones', type: this.types.work, time: this.time.setHours(9, 31),
            company: {
                name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
                short_name: 'Boosting',
                address: 'Nick Jones',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            }
        },
    ];

    companys = [
        {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        },
        {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 2,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 3,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 4,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            name: 'Boosting performance of Angular applications with manual change detection', company_id: 1,
            address: 'Nick Jones',
            member_total: '100',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        },
    ];

    // infinity list
    placeholders = [];
    pageSize = 10;
    pageToLoadNext = 1;
    loading = false;

    @ViewChildren(NbListItemComponent, { read: ElementRef }) listItems: QueryList<ElementRef<Element>>;

    countries: any;

    constructor(private router: Router
    ) {
        this.countries = countries;
    }

    ngOnInit() {
    }

    loadNext() {
        if (this.loading) { return; }

        this.loading = true;
        this.placeholders = new Array(this.pageSize);
        const newsData = [
            {
                name: 'Boosting performance of Angular applications with manual change detection 1',
                company_id: 1,
                address: 'Nick Jones 1',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            },
            {
                name: 'Boosting performance of Angular applications with manual change detection 2',
                company_id: 1,
                address: 'Nick Jones 2',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            },
            {
                name: 'Boosting performance of Angular applications with manual change detection 3',
                company_id: 1,
                address: 'Nick Jones 3',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            },
            {
                name: 'Boosting performance of Angular applications with manual change detection 1',
                company_id: 1,
                address: 'Nick Jones 1',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            },
            {
                name: 'Boosting performance of Angular applications with manual change detection 2',
                company_id: 1,
                address: 'Nick Jones 2',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            },
            {
                name: 'Boosting performance of Angular applications with manual change detection 3',
                company_id: 1,
                address: 'Nick Jones 3',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            }, {
                name: 'Boosting performance of Angular applications with manual change detection 1',
                company_id: 1,
                address: 'Nick Jones 1',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            },
            {
                name: 'Boosting performance of Angular applications with manual change detection 2',
                company_id: 1,
                address: 'Nick Jones 2',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            },
            {
                name: 'Boosting performance of Angular applications with manual change detection 3',
                company_id: 1,
                address: 'Nick Jones 3',
                member_total: '100',
                picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
            },

        ];
        setTimeout(() => {
            this.placeholders = [];
            this.companys.push(...newsData);

            this.loading = false;
            this.pageToLoadNext++;
            console.log(this.companys);
        }, 2000);
        // this.newsService.load(this.pageToLoadNext, this.pageSize)
        //     .subscribe(news => {
        //         this.placeholders = [];
        //         this.news.push(...news);
        //         this.loading = false;
        //         this.pageToLoadNext++;
        //     });
    }

    goToCompayDetail(company) {
        this.router.navigate([`./pages/company/${company.company_id}`]);
    }

}
