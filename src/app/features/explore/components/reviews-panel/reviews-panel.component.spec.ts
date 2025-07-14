import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsPanelComponent } from './reviews-panel.component';

describe('ReviewsPanelComponent', () => {
  let component: ReviewsPanelComponent;
  let fixture: ComponentFixture<ReviewsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsPanelComponent]
    });
    fixture = TestBed.createComponent(ReviewsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
