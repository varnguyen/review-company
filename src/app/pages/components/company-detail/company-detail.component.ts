import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  userId = 0;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.userId = this.route.snapshot.params.company_id;
    console.log(this.userId);
  }

  ngOnInit() {
  }

}
