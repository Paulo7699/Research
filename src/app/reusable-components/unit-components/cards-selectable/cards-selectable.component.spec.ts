import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSelectableComponent } from './cards-selectable.component';

describe('CardsSelectableComponent', () => {
  let component: CardsSelectableComponent;
  let fixture: ComponentFixture<CardsSelectableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSelectableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsSelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
