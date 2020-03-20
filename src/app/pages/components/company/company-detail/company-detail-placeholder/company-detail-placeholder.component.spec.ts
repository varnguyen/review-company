import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailPlaceholderComponent } from './company-detail-placeholder.component';

describe('CompanyDetailPlaceholderComponent', () => {
  let component: CompanyDetailPlaceholderComponent;
  let fixture: ComponentFixture<CompanyDetailPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
