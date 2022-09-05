import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPartnersPageComponent } from './details-partners-page.component';

describe('DetailsPartnersPageComponent', () => {
  let component: DetailsPartnersPageComponent;
  let fixture: ComponentFixture<DetailsPartnersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPartnersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPartnersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
