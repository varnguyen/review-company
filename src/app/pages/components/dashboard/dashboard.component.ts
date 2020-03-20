import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NbListItemComponent } from '@nebular/theme';
import { ProvincesService, JobTypeService, CompanyService } from 'src/app/_services';

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


    // infinity list
    placeholders = [];
    pageSize = 10;
    pageToLoadNext = 1;
    loading = false;

    @ViewChildren(NbListItemComponent, { read: ElementRef }) listItems: QueryList<ElementRef<Element>>;

    provinces: any;
    jobs: any;
    companys: [] = [];
    provinceId = 0;
    jobId = 0;
    companyName = '';
    page = 1;
    row = 10;
    timer: any;

    constructor(
        private router: Router,
        private provincesService: ProvincesService,
        private jobTypeService: JobTypeService,
        private companyService: CompanyService,
    ) {
        this.getProvinceLists();
    }

    ngOnInit() {
    }

    onChangeFilter(jobId: any, provinceId: any) {
        this.companys = [];
        this.loading = true;
        this.placeholders = new Array(5);
        if (jobId) { this.jobId = jobId; }
        if (provinceId) { this.provinceId = provinceId; }
        this.getCompanyLists();
    }

    findCompanyByName(event) {
        this.companyName = event.target.value;
        if (event.key === 'Enter') {
            console.log(this.companyName);
            this.getCompanyLists();
        } else {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.getCompanyLists();
            }, 3000);
        }
    }

    renderTextSubTitle(comp) {
        return `Nhân viên : ${comp.member_total} - Lĩnh vực : ${comp.job_id} - Tỉnh/Thành Phố : ${comp.province_id}`;
    }

    loadNext() {
        return;
        if (this.loading) { return; }


        this.loading = true;
        console.log('Loading ... ');
        console.log(this.companys);

        this.placeholders = new Array(this.pageSize);
        const newsData = [
            {
                address: '200 Cầu Giấy, Nghĩa Đô, Hoàng Quốc Việt, Hà Nội',
                company_id: 1,
                full_name: 'Công ty Cổ phẩn công nghệ GVN Technology',
                member_total: 100,
                date_add: '2020-03-06T03:36:41.000Z',
                date_upd: '2020-03-06T03:36:41.000Z',
                job_id: null,
                province_id: null,
                short_name: 'xxx',
                active: 1
            },
            {
                address: '200 Cầu Giấy, Nghĩa Đô, Hoàng Quốc Việt, Hà Nội',
                company_id: 1,
                full_name: 'Công ty Cổ phẩn công nghệ GVN Technology',
                member_total: 100,
                date_add: '2020-03-06T03:36:41.000Z',
                date_upd: '2020-03-06T03:36:41.000Z',
                job_id: null,
                province_id: null,
                short_name: 'xxx',
                active: 1
            },
            {
                address: '200 Cầu Giấy, Nghĩa Đô, Hoàng Quốc Việt, Hà Nội',
                company_id: 1,
                full_name: 'Công ty Cổ phẩn công nghệ GVN Technology',
                member_total: 100,
                date_add: '2020-03-06T03:36:41.000Z',
                date_upd: '2020-03-06T03:36:41.000Z',
                job_id: null,
                province_id: null,
                short_name: 'xxx',
                active: 1
            },
            {
                address: '200 Cầu Giấy, Nghĩa Đô, Hoàng Quốc Việt, Hà Nội',
                company_id: 1,
                full_name: 'Công ty Cổ phẩn công nghệ GVN Technology',
                member_total: 100,
                date_add: '2020-03-06T03:36:41.000Z',
                date_upd: '2020-03-06T03:36:41.000Z',
                job_id: null,
                province_id: null,
                short_name: 'xxx',
                active: 1
            },
            {
                address: '200 Cầu Giấy, Nghĩa Đô, Hoàng Quốc Việt, Hà Nội',
                company_id: 1,
                full_name: 'Công ty Cổ phẩn công nghệ GVN Technology',
                member_total: 100,
                date_add: '2020-03-06T03:36:41.000Z',
                date_upd: '2020-03-06T03:36:41.000Z',
                job_id: null,
                province_id: null,
                short_name: 'xxx',
                active: 1
            },
            {
                address: '200 Cầu Giấy, Nghĩa Đô, Hoàng Quốc Việt, Hà Nội',
                company_id: 1,
                full_name: 'Công ty Cổ phẩn công nghệ GVN Technology',
                member_total: 100,
                date_add: '2020-03-06T03:36:41.000Z',
                date_upd: '2020-03-06T03:36:41.000Z',
                job_id: null,
                province_id: null,
                short_name: 'xxx',
                active: 1
            },
            {
                address: '200 Cầu Giấy, Nghĩa Đô, Hoàng Quốc Việt, Hà Nội',
                company_id: 1,
                full_name: 'Công ty Cổ phẩn công nghệ GVN Technology',
                member_total: 100,
                date_add: '2020-03-06T03:36:41.000Z',
                date_upd: '2020-03-06T03:36:41.000Z',
                job_id: null,
                province_id: null,
                short_name: 'xxx',
                active: 1
            },
            {
                address: '200 Cầu Giấy, Nghĩa Đô, Hoàng Quốc Việt, Hà Nội',
                company_id: 1,
                full_name: 'Công ty Cổ phẩn công nghệ GVN Technology',
                member_total: 100,
                date_add: '2020-03-06T03:36:41.000Z',
                date_upd: '2020-03-06T03:36:41.000Z',
                job_id: null,
                province_id: null,
                short_name: 'xxx',
                active: 1
            },
        ];
        // setTimeout(() => {
        //     this.placeholders = [];
        //     this.companys.push(...newsData);

        //     this.loading = false;
        //     this.pageToLoadNext++;
        //     console.log(this.companys);
        // }, 2000);
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

    getProvinceLists() {
        this.provincesService.getProvinceLists().subscribe(
            res => {
                console.log('Provinces :', res);
                if (res.code === 0) {
                    this.provinces = res.data;
                    this.provinceId = this.provinces[0].province_id;
                    this.getJobTypeLists();
                }
            }
        );
    }

    getJobTypeLists() {
        this.jobTypeService.getJobTypeLists().subscribe(
            res => {
                console.log('Jobs :', res);
                if (res.code === 0) {
                    this.jobs = res.data;
                    this.jobId = this.jobs[0].job_id;
                    this.getCompanyLists();
                }
            }
        );
    }

    getCompanyLists() {

        this.placeholders = new Array(5);
        const data = {
            jobId: this.jobId,
            provinceId: this.provinceId,
            companyName: this.companyName
        };
        const pagination = {
            page: this.page,
            row: this.row
        };
        this.companyService.getCompanyLists(data, pagination).subscribe(
            res => {
                console.log('Companys :', res);
                if (res.code === 0) {
                    // setTimeout(() => {
                    this.companys = res.data;
                    this.placeholders = [];
                    this.loading = false;
                    // }, 3000);
                }
            }
        );
    }

}
