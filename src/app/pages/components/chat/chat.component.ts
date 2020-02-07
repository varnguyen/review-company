import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private time: Date = new Date();
  users: any[] = [
    {
      name: 'ADMIN', title: 'Administrator', time: this.time.setHours(12, 11), user_id: 1,
      picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
    },
    // {
    //   name: 'Bob Kelso', title: 'Doctor of Medicine', time: this.time.setHours(21, 12), user_id: 2,
    //   picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
    // },
    // {
    //   name: 'Janitor', title: 'Janitor', time: this.time.setHours(11, 12), user_id: 3,
    //   picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
    // },
    // {
    //   name: 'Perry Cox', title: 'Doctor of Medicine', time: this.time.setHours(23, 50), user_id: 4,
    //   picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
    // },
    // {
    //   name: 'Ben Sullivan', title: 'Carpenter and photographer', time: this.time.setHours(24, 19), user_id: 5,
    //   picture: 'https://via.placeholder.com/50/4479e7/ffffff?Text=IMG'
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

}
