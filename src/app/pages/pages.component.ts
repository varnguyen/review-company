import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
})

export class PagesComponent {
    sidebarMenu = MENU_ITEMS;
}
