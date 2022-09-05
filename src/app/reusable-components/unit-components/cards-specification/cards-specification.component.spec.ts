import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSpecificationComponent } from './cards-specification.component';

describe('CardsSpecificationComponent', () => {
  let component: CardsSpecificationComponent;
  let fixture: ComponentFixture<CardsSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSpecificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
