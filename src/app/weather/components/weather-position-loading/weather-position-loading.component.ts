import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Position } from '../../data/position';
import { WeatherState } from '../../data/weather-state';
import { getLocationByPosition } from '../../store/actions/weather.actions';

@Component({
  selector: 'weather-position-loading',
  templateUrl: './weather-position-loading.component.html',
  styleUrls: ['./weather-position-loading.component.scss']
})
export class WeatherPositionLoadingComponent {
  private _position?: Position;

  constructor(private store: Store<{ weather: WeatherState }>) {

  }

  @Input()
  public set position(position: Position | undefined) {
    this._position = position;
    console.log(this._position);

    if (this._position) {
      this.store.dispatch(getLocationByPosition({ position: this._position }))
    }
  }


}
