import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPanelComponent } from './health-panel.component';

describe('HealthPanelComponent', () => {
  let component: HealthPanelComponent;
  let fixture: ComponentFixture<HealthPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthPanelComponent]
    });
    fixture = TestBed.createComponent(HealthPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
