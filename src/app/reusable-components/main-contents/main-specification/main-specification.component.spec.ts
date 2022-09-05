import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSpecificationComponent } from './main-specification.component';

describe('MainSpecificationComponent', () => {
  let component: MainSpecificationComponent;
  let fixture: ComponentFixture<MainSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSpecificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
