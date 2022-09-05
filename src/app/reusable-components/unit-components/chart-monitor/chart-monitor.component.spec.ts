import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMonitorComponent } from './chart-monitor.component';

describe('ChartMonitorComponent', () => {
  let component: ChartMonitorComponent;
  let fixture: ComponentFixture<ChartMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
