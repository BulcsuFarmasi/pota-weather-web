import { createReducer, on } from '@ngrx/store';
import { positionFailed, settlementSuccessful, settlementFailed, weatherSuccessful, weatherFailed, restore, positionLoading, locationSuccessful } from "../actions/weather.actions";
import { WeatherState, WeatherStateType } from "../../data/weather-state";
import { Weather } from "../../data/weather";
import { Location } from '../../data/location';

export const initialState = <WeatherState>{ type: WeatherStateType.initial };

export const weatherReducer = createReducer(
    initialState,
    on(positionLoading, (state: WeatherState, { position }) => <WeatherState>{ type: WeatherStateType.positionLoading, weather: <Weather>{ location: <Location>{ position } } }),
    on(positionFailed, (state: WeatherState) => <WeatherState>{ type: WeatherStateType.positionError }),
    on(locationSuccessful, (state: WeatherState, { location }) => <WeatherState>{ type: WeatherStateType.locationSuccessful, weather: <Weather>{ location } }),
    on(settlementSuccessful, (state: WeatherState) => state),
    on(settlementFailed, (state: WeatherState) => state),
    on(weatherSuccessful, (state: WeatherState) => state),
    on(weatherFailed, (state: WeatherState) => state),
    on(restore, (state: WeatherState) => <WeatherState>{ type: WeatherStateType.initial })
);