import { DailyWeather } from './daily-weather';
import { Location } from './location';

export interface Weather {
    location?: Location;
    currentWeather?: DailyWeather;
    forecast?: DailyWeather[];

}