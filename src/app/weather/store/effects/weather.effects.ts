import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { WeatherService } from '../../services/weather_service';
import { getWeather, weatherFailed, weatherSuccessful } from '../actions/weather.actions';

@Injectable()

export class WeatherEffects {

    constructor(private actions$: Actions, private weatherService: WeatherService) {

    }

    getWeather$ = createEffect(() => this.actions$.pipe(
        ofType(getWeather),
        concatMap(action => this.weatherService.getCurrentWeather(action.location)),
        concatMap(weather => this.weatherService.getForecast(weather)),
        map(weather => {
            if (weather.currentWeather && weather.forecast) {
                return weatherSuccessful({ weather });
            } else {
                return weatherFailed({ weather })
            }
        }
        )
    )
    )



}