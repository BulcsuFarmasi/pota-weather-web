import { Component, Input } from '@angular/core';
import { DailyWeather } from '../../data/daily-weather';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  @Input()
  forecast?: DailyWeather[];
}
