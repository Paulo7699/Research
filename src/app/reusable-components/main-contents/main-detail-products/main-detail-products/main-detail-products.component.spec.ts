import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailProductsComponent } from './main-detail-products.component';

describe('MainDetailProductsComponent', () => {
  let component: MainDetailProductsComponent;
  let fixture: ComponentFixture<MainDetailProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDetailProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDetailProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
