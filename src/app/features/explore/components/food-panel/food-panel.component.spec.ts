import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPanelComponent } from './food-panel.component';

describe('FoodPanelComponent', () => {
  let component: FoodPanelComponent;
  let fixture: ComponentFixture<FoodPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodPanelComponent]
    });
    fixture = TestBed.createComponent(FoodPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
