import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEntriesComponent } from './table-entries.component';

describe('TableEntriesComponent', () => {
  let component: TableEntriesComponent;
  let fixture: ComponentFixture<TableEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEntriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
