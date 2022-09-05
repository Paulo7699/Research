import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTeamSelectedComponent } from './action-team-selected.component';

describe('ActionTeamSelectedComponent', () => {
  let component: ActionTeamSelectedComponent;
  let fixture: ComponentFixture<ActionTeamSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionTeamSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionTeamSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
