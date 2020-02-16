import { Component, OnInit, Inject } from '@angular/core';
import { NbSidebarService, NbThemeService, NbMenuService, NB_WINDOW, NbPosition } from '@nebular/theme';
import { MENU_ITEMS } from './pages-menu';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '../_services/auth/auth.service';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {

    currentUser: any;
    sidebarMenu = MENU_ITEMS;
    currentTheme = 'dark';
    themes = [
        { value: 'dark', name: 'Dark' },
        { value: 'default', name: 'Light' }
    ];
    userPictureOnly = false;
    userMenu = [
        { title: 'Profile', link: '/pages/profile', icon: 'person-outline', },
        { title: 'Log out', icon: 'unlock-outline', }];
    user: any;
    isContected = false;
    position = 'bottom';
    loading = true;

    constructor(
        private sidebarService: NbSidebarService,
        private themeService: NbThemeService,
        private menuService: NbMenuService,
        @Inject(NB_WINDOW) private window,
        private authService: AuthService,
        private router: Router
    ) {
        this.currentUser = this.authService.currentUserValue;
        this.router.events.subscribe((e: RouterEvent) => {
            this.navigationInterceptor(e);
        })
    }

    ngOnInit() {
        this.isContected = this.currentUser ? true : false;
        this.currentTheme = this.themeService.currentTheme;
        this.initMenu();
        // console.log(this.sidebarMenu);
        // const childMenuLogout = { title: 'Logout', icon: 'unlock-outline' };

    }

    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading = true;
        }
        if (event instanceof NavigationEnd) {
            this.loading = false;
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof NavigationError) {
            this.loading = false;
        }
    }

    initMenu() {
        this.menuService.onItemClick()
            .pipe(filter(({ tag }) => tag === 'my-context-menu'), map(({ item: { title } }) => title),
            ).subscribe(title => {
                switch (title) {
                    case 'Profile':
                        this.goProfile();
                        break;
                    default:
                        this.goLogout();
                        break;
                }
            });
    }

    toggleSidebar() {
        this.sidebarService.toggle(true);
        return false;
    }

    changeTheme(themeName: string) {
        this.themeService.changeTheme(themeName);
    }

    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }

    goProfile() {
        // this.router.navigate(['./pages/profile/']);
    }

    goLogout() {
        console.log('Go to Logout');
        this.authService.logout();
    }

    goToLogin() {
        this.router.navigate(['./auth/login']);
    }
}
