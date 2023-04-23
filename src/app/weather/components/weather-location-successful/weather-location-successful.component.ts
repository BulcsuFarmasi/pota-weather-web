import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '../../data/location';
import { WeatherState } from '../../data/weather-state';
import { getWeather } from '../../store/actions/weather.actions';

@Component({
  selector: 'weather-location-successful',
  templateUrl: './weather-location-successful.component.html',
  styleUrls: ['./weather-location-successful.component.scss']
})
export class WeatherLocationSuccessfulComponent {

  constructor(private store: Store<{ weather: WeatherState }>) { }

  private _location?: Location;

  @Input()
  public set location(location: Location | undefined) {
    if (location) {
      this._location = location;
      this.store.dispatch(getWeather({ location: this._location }));
    }

  }


  public get location(): Location | undefined {
    return this._location;
  }


}
