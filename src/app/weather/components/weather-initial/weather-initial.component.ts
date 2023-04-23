import { Component } from '@angular/core';
import { WeatherState } from '../../data/weather-state';
import { Store } from '@ngrx/store';
import { getPosition } from '../../store/actions/weather.actions';

@Component({
  selector: 'weather-initial',
  templateUrl: './weather-initial.component.html',
  styleUrls: ['./weather-initial.component.scss']
})
export class WeatherInitialComponent {

  constructor(private store: Store<{ weather: WeatherState }>) {

  }

  locate(): void {
    this.store.dispatch(getPosition());
  }

}
