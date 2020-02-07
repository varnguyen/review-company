import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnInit, OnChanges {

  userId = 0;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.userId = this.route.snapshot.params.user_id;
    console.log(this.userId);
  }

  ngOnChanges() {
    console.log(this.userId);
  }

  ngOnInit() {
  }

}
