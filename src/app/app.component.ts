import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    constructor(private authService: AuthService, ) {
        // Get and set theme
        const theme = this.authService.getTheme();
        theme ? this.authService.setTheme(theme) : this.authService.setTheme();
    }
}
