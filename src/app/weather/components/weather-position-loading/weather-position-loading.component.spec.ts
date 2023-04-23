import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPositionLoadingComponent } from './weather-position-loading.component';

describe('WeatherPositionLoadingComponent', () => {
  let component: WeatherPositionLoadingComponent;
  let fixture: ComponentFixture<WeatherPositionLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPositionLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherPositionLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
