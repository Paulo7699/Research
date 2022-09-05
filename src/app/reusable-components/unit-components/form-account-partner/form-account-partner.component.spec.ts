import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccountPartnerComponent } from './form-account-partner.component';

describe('FormAccountPartnerComponent', () => {
  let component: FormAccountPartnerComponent;
  let fixture: ComponentFixture<FormAccountPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAccountPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAccountPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
