import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailPartnerComponent } from './main-detail-partner.component';

describe('MainDetailPartnerComponent', () => {
  let component: MainDetailPartnerComponent;
  let fixture: ComponentFixture<MainDetailPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDetailPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDetailPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
