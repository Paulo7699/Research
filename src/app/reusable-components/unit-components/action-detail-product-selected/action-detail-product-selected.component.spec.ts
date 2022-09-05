import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDetailProductSelectedComponent } from './action-detail-product-selected.component';

describe('ActionDetailProductSelectedComponent', () => {
  let component: ActionDetailProductSelectedComponent;
  let fixture: ComponentFixture<ActionDetailProductSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionDetailProductSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionDetailProductSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
