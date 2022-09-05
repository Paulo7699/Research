import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCompletedEntriesComponent } from './main-completed-entries.component';

describe('MainCompletedEntriesComponent', () => {
  let component: MainCompletedEntriesComponent;
  let fixture: ComponentFixture<MainCompletedEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCompletedEntriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCompletedEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
