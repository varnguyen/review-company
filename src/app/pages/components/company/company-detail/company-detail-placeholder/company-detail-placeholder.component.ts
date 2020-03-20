import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services';

@Component({
    selector: 'app-company-detail-placeholder',
    templateUrl: './company-detail-placeholder.component.html',
    styleUrls: ['./company-detail-placeholder.component.scss']
})
export class CompanyDetailPlaceholderComponent implements OnInit {

    currentTheme: string;

    constructor(private authService: AuthService) {
        this.currentTheme = this.authService.getTheme();
    }

    ngOnInit() {
    }

}
