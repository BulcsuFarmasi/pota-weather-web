import { Injectable } from '@angular/core';
import { Weather } from '../data/weather';
import { catchError, map, Observable, of } from 'rxjs';
import { Location } from '../data/location';
import { WeatherRemote } from './weather_remote';
import { DailyWeather } from '../data/daily-weather';
import { WeatherCondition } from '../data/weather-condition';

@Injectable({ providedIn: 'root' })
export class WeatherService {

    constructor(private weatherRemote: WeatherRemote) { }


    getCurrentWeather(location: Location): Observable<Weather> {
        return this.weatherRemote.getCurrentWeather(location.position).pipe(map(result => <Weather>{ location, currentWeather: <DailyWeather>{ temperature: Math.round(result.main.temp), condition: new WeatherCondition(result.weather[0].main, result.weather[0].icon) } }), catchError(() => of(<Weather>{ location })));
    }

    getForecast(weather: Weather): Observable<Weather> {
        return this.weatherRemote.getForecast(weather.location!.position).pipe(map(result => <Weather>{ ...weather, forecast: this.createForecast(result) }), catchError(() => of(weather)));
    }

    private createForecast(result: any): DailyWeather[] {
        const tommorrowMidnight = new Date()
        tommorrowMidnight.setDate(tommorrowMidnight.getDate() + 1);
        tommorrowMidnight.setUTCHours(0, 0, 0, 0);

        const dailyWeathers: DailyWeather[] = [];
        let index: number = 0;

        result.list.forEach((weather: any) => {

            const date = new Date(weather.dt * 1000);
            date.setUTCHours(0, 0, 0, 0);
            if (date < tommorrowMidnight) {
                return;
            }

            const dateEqual = date.getUTCFullYear() === dailyWeathers[index]?.date?.getUTCFullYear() && date.getMonth() === dailyWeathers[index]?.date?.getMonth() && date.getUTCDay() === dailyWeathers[index]?.date?.getUTCDay();

            console.log(dateEqual);


            if (dailyWeathers.length == 0) {

                dailyWeathers.push(<DailyWeather>{ temperature: Math.round(weather.main.temp), condition: new WeatherCondition(weather.weather[0].main, weather.weather[0].icon), date })
            } else if (dateEqual && Math.round(weather.main.temp) > dailyWeathers[index].temperature) {
                dailyWeathers[index] = <DailyWeather>{ temperature: Math.round(weather.main.temp), condition: new WeatherCondition(weather.weather[0].main, weather.weather[0].icon), date }
            } else if (dailyWeathers[index].date! < date) {
                dailyWeathers.push(<DailyWeather>{ temperature: Math.round(weather.main.temp), condition: new WeatherCondition(weather.weather[0].main, weather.weather[0].icon), date })
                index++;
            }

        });
        console.log(dailyWeathers);
        return dailyWeathers;
    }
}