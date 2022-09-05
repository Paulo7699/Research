import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnalysisComponent } from './table-analysis.component';

describe('TableAnalysisComponent', () => {
  let component: TableAnalysisComponent;
  let fixture: ComponentFixture<TableAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
