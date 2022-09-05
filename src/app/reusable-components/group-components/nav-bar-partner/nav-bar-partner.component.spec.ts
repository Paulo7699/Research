import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPartnerComponent } from './nav-bar-partner.component';

describe('NavBarPartnerComponent', () => {
  let component: NavBarPartnerComponent;
  let fixture: ComponentFixture<NavBarPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
