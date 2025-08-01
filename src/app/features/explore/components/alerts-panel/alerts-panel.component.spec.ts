import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsPanelComponent } from './alerts-panel.component';

describe('AlertsPanelComponent', () => {
  let component: AlertsPanelComponent;
  let fixture: ComponentFixture<AlertsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsPanelComponent]
    });
    fixture = TestBed.createComponent(AlertsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
