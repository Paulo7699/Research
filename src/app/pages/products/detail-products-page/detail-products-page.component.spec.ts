import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductsPageComponent } from './detail-products-page.component';

describe('DetailProductsPageComponent', () => {
  let component: DetailProductsPageComponent;
  let fixture: ComponentFixture<DetailProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProductsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
