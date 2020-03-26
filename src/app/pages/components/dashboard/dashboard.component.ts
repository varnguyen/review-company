import { CONFIG } from 'src/app/_data';
import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NbListItemComponent } from '@nebular/theme';
import { ProvincesService, JobTypeService, CompanyService, CommentsService } from 'src/app/_services';
import * as _ from 'lodash';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    @ViewChildren(NbListItemComponent, { read: ElementRef }) listItems: QueryList<ElementRef<Element>>;

    // infinity list
    placeholders = [];
    pageSize = 10;
    pageToLoadNext = 1;
    loading = false;

    provinces = CONFIG.OPTIONS_PROVINCE_DEFAULT;
    jobs = CONFIG.OPTIONS_JOB_DEFAULT;
    companys: [] = [];
    provinceId = -1;
    jobId = -1;
    companyName = '';
    page = 1;
    row = 10;
    timer: any;
    comments: [] = [];
    topCompanyReviews: any[] = [];

    constructor(
        private router: Router,
        private provincesService: ProvincesService,
        private jobTypeService: JobTypeService,
        private companyService: CompanyService,
        private commentsService: CommentsService
    ) {
        this.getProvinceLists();
        this.getJobTypeLists();
        this.getComments();
        this.getCompanyListByTotalReview();
    }

    ngOnInit() {
        this.getCompanyLists();
    }

    onChangeFilter(provinceId: any, jobId: any) {
        this.companys = [];
        this.loading = true;
        this.placeholders = new Array(5);
        if (provinceId) { this.provinceId = provinceId; }
        if (jobId) { this.jobId = jobId; }
        this.getCompanyLists();
    }

    findCompanyByName(event) {
        this.companyName = _.trim(event.target.value);
        if (event.key === 'Enter') {
            console.log(this.companyName);
            this.getCompanyLists();
        } else {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.getCompanyLists();
            }, 1000);
        }
    }

    renderTextSubTitle(comp) {
        return `Nhân viên : ${comp.member_total} - Lĩnh vực : ${comp.job_id} - Tỉnh/Thành Phố : ${comp.province_id}`;
    }

    getStatus(index) {
        let status = 'control';
        switch (index) {
            case 0:
                status = 'danger';
                break;
            case 1:
                status = 'warning';
                break;
            case 2:
                status = 'success';
                break;
            case 3:
                status = 'info';
                break;
            case 4:
                status = 'primary';
                break;
            case 5:
                status = 'basic';
                break;
            default:
                break;
        }
        return status;
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
                if (res.code === 0) {
                    this.provinces = this.provinces.concat(res.data);

                }
            }
        );
    }

    getJobTypeLists() {
        this.jobTypeService.getJobTypeLists().subscribe(
            res => {
                if (res.code === 0) {
                    this.jobs = this.jobs.concat(res.data);
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

    getComments() {
        this.commentsService.getCommentsLists().subscribe(
            res => {
                console.log('Comments :', res);
                if (res.code === 0) {
                    this.comments = res.data;
                }
            }
        );
    }

    getCompanyListByTotalReview() {
        this.companyService.getCompanyListByTotalReview().subscribe(
            res => {
                console.log('topCompanyReviews :', res);
                if (res.code === 0) {
                    this.topCompanyReviews = res.data;
                }
            }
        );
    }

}
