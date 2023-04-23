import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Location } from '../data/location';
import { Observable } from 'rxjs';
import { openWeatherMapKey } from '../shared/keys';
import { Position } from '../data/position';

@Injectable({providedIn: 'root'})
export class WeatherRemote {
    constructor(private httpClient:HttpClient) {}

    private static readonly baseUrl = 'https://api.openweathermap.org/data/2.5'

    getCurrentWeather(position:Position): Observable<any> {
        return this.httpClient.get(`${WeatherRemote.baseUrl}/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${openWeatherMapKey}&units=metric`);
    }

    getForecast(position:Position): Observable<any> {
        return this.httpClient.get(`${WeatherRemote.baseUrl}/forecast?lat=${position.latitude}&lon=${position.longitude}&appid=${openWeatherMapKey}&units=metric`);
    }
}