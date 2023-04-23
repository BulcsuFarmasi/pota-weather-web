import { Component, Input } from '@angular/core';
import { DailyWeather } from '../../data/daily-weather';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  @Input()
  currentWeather?: DailyWeather
  @Input()
  settlement?: string
}
