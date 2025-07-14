import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyPanelComponent } from './safety-panel.component';

describe('SafetyPanelComponent', () => {
  let component: SafetyPanelComponent;
  let fixture: ComponentFixture<SafetyPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafetyPanelComponent]
    });
    fixture = TestBed.createComponent(SafetyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
