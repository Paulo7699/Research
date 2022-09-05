import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailLaboratoriesComponent } from './main-detail-laboratories.component';

describe('MainDetailLaboratoriesComponent', () => {
  let component: MainDetailLaboratoriesComponent;
  let fixture: ComponentFixture<MainDetailLaboratoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDetailLaboratoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDetailLaboratoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
