import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLaboratoriesPageComponent } from './detail-laboratories-page.component';

describe('DetailLaboratoriesPageComponent', () => {
  let component: DetailLaboratoriesPageComponent;
  let fixture: ComponentFixture<DetailLaboratoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLaboratoriesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLaboratoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
