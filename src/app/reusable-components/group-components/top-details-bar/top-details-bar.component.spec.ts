import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDetailsBarComponent } from './top-details-bar.component';

describe('TopDetailsBarComponent', () => {
  let component: TopDetailsBarComponent;
  let fixture: ComponentFixture<TopDetailsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDetailsBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDetailsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
