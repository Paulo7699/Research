import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePartMainComponent } from './title-part-main.component';

describe('TitlePartMainComponent', () => {
  let component: TitlePartMainComponent;
  let fixture: ComponentFixture<TitlePartMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlePartMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlePartMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
