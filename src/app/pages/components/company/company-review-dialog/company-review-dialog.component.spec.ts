import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReviewDialogComponent } from './company-review-dialog.component';

describe('CompanyReviewDialogComponent', () => {
  let component: CompanyReviewDialogComponent;
  let fixture: ComponentFixture<CompanyReviewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyReviewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
