import { Component, Input } from '@angular/core';
import { DailyWeather } from '../../data/daily-weather';

@Component({
  selector: 'forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent {
    @Input()
    dailyWeather?:DailyWeather
}
