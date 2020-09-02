import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationDetailsComponent } from './recommendation-details.component';

describe('RecommendationDetailsComponent', () => {
  let component: RecommendationDetailsComponent;
  let fixture: ComponentFixture<RecommendationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
