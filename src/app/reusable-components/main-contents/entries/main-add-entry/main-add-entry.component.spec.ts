import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddEntryComponent } from './main-add-entry.component';

describe('MainAddEntryComponent', () => {
  let component: MainAddEntryComponent;
  let fixture: ComponentFixture<MainAddEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAddEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAddEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
