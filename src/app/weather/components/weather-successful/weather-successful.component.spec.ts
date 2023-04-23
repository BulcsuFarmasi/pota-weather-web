import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSuccessfulComponent } from './weather-successful.component';

describe('WeatherSuccessfulComponent', () => {
  let component: WeatherSuccessfulComponent;
  let fixture: ComponentFixture<WeatherSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherSuccessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
