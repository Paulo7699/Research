import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPartnersComponent } from './main-partners.component';

describe('MainPartnersComponent', () => {
  let component: MainPartnersComponent;
  let fixture: ComponentFixture<MainPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
