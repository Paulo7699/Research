import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCompleteEntryComponent } from './main-complete-entry.component';

describe('MainCompleteEntryComponent', () => {
  let component: MainCompleteEntryComponent;
  let fixture: ComponentFixture<MainCompleteEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCompleteEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCompleteEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
