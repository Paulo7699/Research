import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteEntryComponent } from './complete-entry.component';

describe('CompleteEntryComponent', () => {
  let component: CompleteEntryComponent;
  let fixture: ComponentFixture<CompleteEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
