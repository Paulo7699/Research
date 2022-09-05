import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsMonitorPartnerComponent } from './cards-monitor-partner.component';

describe('CardsMonitorPartnerComponent', () => {
  let component: CardsMonitorPartnerComponent;
  let fixture: ComponentFixture<CardsMonitorPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsMonitorPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsMonitorPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
