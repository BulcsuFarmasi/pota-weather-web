import { ActionCreator, createAction, props } from '@ngrx/store';
import { Location } from '../../data/location';
import { Position } from '../../data/position';
import { Weather } from '../../data/weather';

export const getPosition = createAction('getPosition',);
export const positionLoading = createAction('positonLoading', props<{ position?: Position }>());
export const positionFailed = createAction('positionFailed');
export const getLocationByPosition = createAction('getSettlementByPosition', props<{position: Position}>());
export const locationSuccessful = createAction('locationSuccessful', props<{location: Location}>());
export const getSettlement = createAction('getSettlement');
export const settlementSuccessful = createAction('getSettlementSuccesful');
export const settlementFailed = createAction('getSettlementFailed');
export const getWeather = createAction('getWeather', props<{ location:Location }>());
export const weatherLoading = createAction('getWeatherloading');
export const weatherSuccessful = createAction('getWeatherSuccessful', props<{weather:Weather}>());
export const weatherFailed = createAction('getWeatherFailed', props<{weather:Weather}>());
export const restore = createAction('restore'); 