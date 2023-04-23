import { Component, Input } from '@angular/core';
import { Weather } from '../../data/weather';

@Component({
  selector: 'weather-successful',
  templateUrl: './weather-successful.component.html',
  styleUrls: ['./weather-successful.component.scss',
  ]
})
export class WeatherSuccessfulComponent {
  @Input()
  weather?: Weather
  
}
