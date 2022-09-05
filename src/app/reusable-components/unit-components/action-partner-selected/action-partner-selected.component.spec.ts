import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPartnerSelectedComponent } from './action-partner-selected.component';

describe('ActionPartnerSelectedComponent', () => {
  let component: ActionPartnerSelectedComponent;
  let fixture: ComponentFixture<ActionPartnerSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionPartnerSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionPartnerSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
