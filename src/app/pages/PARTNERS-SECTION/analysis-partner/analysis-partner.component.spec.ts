import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisPartnerComponent } from './analysis-partner.component';

describe('AnalysisPartnerComponent', () => {
  let component: AnalysisPartnerComponent;
  let fixture: ComponentFixture<AnalysisPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
