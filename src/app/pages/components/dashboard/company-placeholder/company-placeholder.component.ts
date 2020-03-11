import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services';

@Component({
    selector: 'app-company-placeholder',
    templateUrl: './company-placeholder.component.html',
    styleUrls: ['./company-placeholder.component.scss']
})
export class CompanyPlaceholderComponent implements OnInit {

    currentTheme: string;

    constructor(private authService: AuthService) {
        this.currentTheme = this.authService.getTheme();
    }

    ngOnInit() {
    }

}
