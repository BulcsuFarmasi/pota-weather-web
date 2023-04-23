import { Weather } from './weather';

export interface WeatherState {
    type: WeatherStateType;
    weather?: Weather;    
}

export enum WeatherStateType { initial, positionLoading, positionSuccessful, positionFailed, locationSuccessful, weatherSuccessful, weatherFailed }