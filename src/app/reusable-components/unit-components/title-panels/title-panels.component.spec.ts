import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePanelsComponent } from './title-panels.component';

describe('TitlePanelsComponent', () => {
  let component: TitlePanelsComponent;
  let fixture: ComponentFixture<TitlePanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlePanelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
