import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    private time: Date = new Date();
    users = {
        nick: { name: 'Nick Jones', picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        eva: { name: 'Eva Moor', picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        jack: { name: 'Jack Williams', picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        lee: { name: 'Lee Wong', picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        alan: { name: 'Alan Thompson', picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
        kate: { name: 'Kate Martinez', picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG' },
    };

    private types = {
        mobile: 'mobile',
        home: 'home',
        work: 'work',
    };
    contacts: any[] = [
        { user: this.users.nick, type: this.types.mobile },
        { user: this.users.eva, type: this.types.home },
        { user: this.users.jack, type: this.types.mobile },
        { user: this.users.lee, type: this.types.mobile },
        { user: this.users.alan, type: this.types.home },
        { user: this.users.kate, type: this.types.work },
    ];
    recent: any[] = [
        { user: this.users.alan, type: this.types.home, time: this.time.setHours(21, 12) },
        { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45) },
        { user: this.users.nick, type: this.types.mobile, time: this.time.setHours(5, 29) },
        { user: this.users.lee, type: this.types.mobile, time: this.time.setHours(11, 24) },
        { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(10, 45) },
        { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 42) },
        { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 31) },
        { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(8, 0) },
        { user: this.users.alan, type: this.types.home, time: this.time.setHours(21, 12) },
        { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45) },
        { user: this.users.nick, type: this.types.mobile, time: this.time.setHours(5, 29) },
        { user: this.users.lee, type: this.types.mobile, time: this.time.setHours(11, 24) },
        { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(10, 45) },
        { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 42) },
        { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 31) },
        { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(8, 0) },
    ];

    news = [
        {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        },
        {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        }, {
            title: 'Boosting performance of Angular applications with manual change detection',
            name: 'Nick Jones',
            picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
        },
    ];
    placeholders = [];
    pageSize = 10;
    pageToLoadNext = 1;
    loading = false;

    constructor() { }

    ngOnInit() {
    }

    loadNext() {
        if (this.loading) { return; }

        this.loading = true;
        this.placeholders = new Array(this.pageSize);
        // this.newsService.load(this.pageToLoadNext, this.pageSize)
        //     .subscribe(news => {
        //         this.placeholders = [];
        //         this.news.push(...news);
        //         this.loading = false;
        //         this.pageToLoadNext++;
        //     });
    }

}
