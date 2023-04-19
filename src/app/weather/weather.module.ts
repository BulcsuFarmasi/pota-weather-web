import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { WeatherContainerComponent } from './components/weather-container/weather-container.component';



@NgModule({
  declarations: [
    WeatherPageComponent,
    WeatherContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherPageComponent
  ]
})
export class WeatherModule { }
