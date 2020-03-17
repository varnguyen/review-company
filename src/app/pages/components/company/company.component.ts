import { Component, OnInit } from '@angular/core';
import { JobTypeService, ProvincesService } from 'src/app/_services';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

    provinces = [];
    provinceId = 0;
    jobs = [];
    jobId = 0;

    constructor(
        private provincesService: ProvincesService,
        private jobTypeService: JobTypeService,
    ) { }

    ngOnInit() {
        this.getProvinceLists();
        this.getJobTypeLists();
    }

    getProvinceLists() {
        this.provincesService.getProvinceLists().subscribe(
            res => {
                console.log('Provinces :', res);
                if (res.code === 0) {
                    this.provinces = res.data;
                    this.provinceId = this.provinces[0].province_id;
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
                }
            }
        );
    }

}
