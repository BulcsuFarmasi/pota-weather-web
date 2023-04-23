import { Component } from '@angular/core';
import { WeatherState, WeatherStateType } from '../../data/weather-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent {
  weatherState$: Observable<WeatherState>;
  weatherStateType: typeof WeatherStateType = WeatherStateType;

  constructor(private store: Store<{ weather: WeatherState }>) {
    this.weatherState$ = this.store.select('weather');
  }
}
