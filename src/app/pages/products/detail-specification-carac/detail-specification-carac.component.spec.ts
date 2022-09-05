import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSpecificationCaracComponent } from './detail-specification-carac.component';

describe('DetailSpecificationCaracComponent', () => {
  let component: DetailSpecificationCaracComponent;
  let fixture: ComponentFixture<DetailSpecificationCaracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSpecificationCaracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSpecificationCaracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
