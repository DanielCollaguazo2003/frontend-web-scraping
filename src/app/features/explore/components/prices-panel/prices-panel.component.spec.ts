import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesPanelComponent } from './prices-panel.component';

describe('PricesPanelComponent', () => {
  let component: PricesPanelComponent;
  let fixture: ComponentFixture<PricesPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricesPanelComponent]
    });
    fixture = TestBed.createComponent(PricesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
