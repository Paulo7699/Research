import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionEntriesComponent } from './option-entries.component';

describe('OptionEntriesComponent', () => {
  let component: OptionEntriesComponent;
  let fixture: ComponentFixture<OptionEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionEntriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
