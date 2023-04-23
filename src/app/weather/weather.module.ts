import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { WeatherBoxComponent } from './components/weather-box/weather-box.component';
import { WeatherContainerComponent } from './components/weather-container/weather-container.component';
import { WeatherInitialComponent } from './components/weather-initial/weather-initial.component';
import { WeatherLocationSuccessfulComponent } from './components/weather-location-successful/weather-location-successful.component';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { WeatherPositionErrorComponent } from './components/weather-position-error/weather-position-error.component';
import { WeatherPositionLoadingComponent } from './components/weather-position-loading/weather-position-loading.component';
import { PositionEffects } from './store/effects/position.effects';
import { WeatherEffects } from './store/effects/weather.effects';
import { weatherReducer } from './store/reducers/weather.reducer';



@NgModule({
  declarations: [
    WeatherPageComponent,
    WeatherContainerComponent,
    WeatherBoxComponent,
    WeatherLocationSuccessfulComponent,
    WeatherInitialComponent,
    WeatherPositionLoadingComponent,
    WeatherPositionErrorComponent,

  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({ weather: weatherReducer }),
    EffectsModule.forRoot(PositionEffects),
    EffectsModule.forRoot(WeatherEffects),
    HttpClientModule,
  ],
  exports: [
    WeatherPageComponent
  ]
})
export class WeatherModule { }
