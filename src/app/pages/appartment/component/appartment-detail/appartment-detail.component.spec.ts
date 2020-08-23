import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentDetailComponent } from './appartment-detail.component';

describe('AppartmentDetailComponent', () => {
  let component: AppartmentDetailComponent;
  let fixture: ComponentFixture<AppartmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartmentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
