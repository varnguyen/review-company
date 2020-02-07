import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverstationComponent } from './converstation.component';

describe('ConverstationComponent', () => {
  let component: ConverstationComponent;
  let fixture: ComponentFixture<ConverstationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverstationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
