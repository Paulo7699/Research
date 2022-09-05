import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPartnerComponent } from './team-partner.component';

describe('TeamPartnerComponent', () => {
  let component: TeamPartnerComponent;
  let fixture: ComponentFixture<TeamPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
