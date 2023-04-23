import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPositionErrorComponent } from './weather-position-failed.component';

describe('WeatherPositionErrorComponent', () => {
  let component: WeatherPositionErrorComponent;
  let fixture: ComponentFixture<WeatherPositionErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPositionErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherPositionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
