import { Component, OnInit } from '@angular/core';
import { JobTypeService, ProvincesService, ShareDataService } from 'src/app/_services';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

    provinces = [];
    jobs = [];
    obj: any = {};

    constructor(
        private provincesService: ProvincesService,
        private jobTypeService: JobTypeService,
        private shareDataService: ShareDataService
    ) { }

    ngOnInit() {
        this.getProvinceLists();
    }

    getProvinceLists() {
        this.provincesService.getProvinceLists().subscribe(
            res => {
                console.log('Provinces :', res);
                if (res.code === 0) {
                    this.provinces = res.data;
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

                    this.obj.jobs = this.jobs;
                    this.obj.provinces = this.provinces;
                    this.shareDataService.passData(this.obj);
                }
            }
        );
    }

}
