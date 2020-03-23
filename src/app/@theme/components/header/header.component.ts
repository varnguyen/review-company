import { Component, OnInit } from '@angular/core';
import {
    NbMediaBreakpointsService,
    NbMenuService,
    NbSidebarService,
    NbThemeService,
    NbToastrService,
    NbComponentStatus
} from '@nebular/theme';

import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CONFIG } from 'src/app/_data';
import { AuthService, CustomersService } from 'src/app/_services';

@Component({
    selector: 'app-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    token: string;
    currentUser: {};
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
    private destroy$: Subject<void> = new Subject<void>();

    constructor(
        private authService: AuthService,
        private sidebarService: NbSidebarService,
        private menuService: NbMenuService,
        private themeService: NbThemeService,
        private breakpointService: NbMediaBreakpointsService,
        private customersService: CustomersService,
        private toastrService: NbToastrService,
    ) {
        // Get current theme
        this.currentTheme = this.authService.getTheme();
        this.token = this.authService.getJwtToken();
        this.currentUser = this.authService.getCurrentUser();
        console.log(this.token, this.currentUser);
    }

    ngOnInit() {
        this.token && this.currentUser ? this.getUserInfo() : this.isContected = false;
        const { xl } = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(
                map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
                takeUntil(this.destroy$),
            )
            .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);
    }



    toggleSidebar(): boolean {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    }

    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }

    goLogout() {
        console.log('Go to Logout');
        this.authService.logout();
    }

    showToast(position, duration, status: NbComponentStatus) {
        this.toastrService.show(
            'Phiên đăng nhập đã hết hạn.',
            'Cảnh báo',
            { position, duration, status });
    }

    initMenu() {
        this.menuService.onItemClick()
            .pipe(filter(({ tag }) => tag === 'my-context-menu'), map(({ item: { title } }) => title),
            ).subscribe(title => {
                switch (title) {
                    case 'Đăng xuất':
                        this.goLogout();
                        break;
                    default:
                        break;
                }
            });
    }

    changeTheme(themeName: string) {
        this.authService.setTheme(themeName);
        return false;
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

}
