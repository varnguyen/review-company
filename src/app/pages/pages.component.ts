import { Component, OnInit, Inject } from '@angular/core';
import { NbSidebarService, NbMenuService, NB_WINDOW, NbComponentStatus, NbToastrService } from '@nebular/theme';
import { MENU_ITEMS } from './pages-menu';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '../_services/auth/auth.service';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { CustomersService } from '../_services';
import { CONFIG } from '../_data';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {

    token: string;
    currentUser: any;
    sidebarMenu = MENU_ITEMS;
    themes = CONFIG.THEMES;
    currentTheme: string;
    userPictureOnly = false;
    userMenu = [
        { title: 'Thông tin cá nhân', link: '/pages/profile', icon: 'person-outline', },
        { title: 'Đăng xuất', icon: 'unlock-outline', }];
    user: any;
    isContected = false;
    loading = true;
    positionPopover = 'bottom';

    constructor(
        private sidebarService: NbSidebarService,
        private menuService: NbMenuService,
        @Inject(NB_WINDOW) private window,
        private authService: AuthService,
        private router: Router,
        private customersService: CustomersService,
        private toastrService: NbToastrService,
    ) {
        // Get current theme
        this.currentTheme = this.authService.getTheme();
        this.token = this.authService.getJwtToken();
        this.currentUser = this.authService.getCurrentUser();

        this.router.events.subscribe((e: RouterEvent) => {
            this.navigationInterceptor(e);
        });

    }

    ngOnInit() {
        console.log(this.currentUser);
        this.token = this.authService.getJwtToken();
        console.log('TOKEN => ', this.token);
        this.token ? this.getUserInfo() : this.isContected = false;

        // if (this.token) {
        //     this.getUserInfo();
        // } else {
        //     this.isContected = false;
        // }

        // if (this.currentUser) {
        //     this.user = this.currentUser;
        //     this.isContected = true;
        //     if (this.token) {
        //         this.getUserInfo();
        //     }
        // } else {
        //     this.isContected = false;
        // }

        this.initMenu();
        // console.log(this.sidebarMenu);
        // const childMenuLogout = { title: 'Logout', icon: 'unlock-outline' };

    }

    showToast(position, duration, status: NbComponentStatus) {
        this.toastrService.show(
            'Phiên đăng nhập đã hết hạn.',
            'Cảnh báo',
            { position, duration, status });
    }

    getUserInfo() {
        this.customersService.getUserInfo().subscribe(
            res => {
                console.log(res);
                if (res.code === 0) {
                    this.user = res.data;
                    console.log(this.user);
                    this.isContected = true;
                }
            },
            error => {
                if (error.status === 401) {
                    console.log('Phiên đăng nhập đã hết hạn.');
                    this.showToast('bottom-left', 5000, 'warning');
                }
            }
        );
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
                    case 'Thông tin cá nhân':
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
        this.authService.setTheme(themeName);
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

}
