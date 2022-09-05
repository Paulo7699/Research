import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDarkLightComponent } from './toggle-dark-light.component';

describe('ToggleDarkLightComponent', () => {
  let component: ToggleDarkLightComponent;
  let fixture: ComponentFixture<ToggleDarkLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleDarkLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleDarkLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
