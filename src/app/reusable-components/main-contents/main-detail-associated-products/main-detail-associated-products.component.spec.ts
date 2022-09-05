import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailAssociatedProductsComponent } from './main-detail-associated-products.component';

describe('MainDetailAssociatedProductsComponent', () => {
  let component: MainDetailAssociatedProductsComponent;
  let fixture: ComponentFixture<MainDetailAssociatedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDetailAssociatedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDetailAssociatedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
