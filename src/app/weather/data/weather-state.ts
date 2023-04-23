import { Weather } from './weather';

export interface WeatherState {
    type: WeatherStateType;
    weather?: Weather;    
}

export enum WeatherStateType { initial, positionLoading, positionSuccessful, positionError, locationSuccessful, weatherSuccessful, weatherError }