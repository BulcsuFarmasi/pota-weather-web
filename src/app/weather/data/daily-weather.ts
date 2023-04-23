import { WeatherCondition } from './weather-condition';

export interface DailyWeather {
    temperature: number;
    condition: WeatherCondition;
    date?: Date;
}