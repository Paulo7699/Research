import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSelectedComponent } from './action-selected.component';

describe('ActionSelectedComponent', () => {
  let component: ActionSelectedComponent;
  let fixture: ComponentFixture<ActionSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
