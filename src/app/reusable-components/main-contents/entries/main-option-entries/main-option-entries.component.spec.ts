import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOptionEntriesComponent } from './main-option-entries.component';

describe('MainOptionEntriesComponent', () => {
  let component: MainOptionEntriesComponent;
  let fixture: ComponentFixture<MainOptionEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainOptionEntriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainOptionEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
