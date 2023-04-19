class WeatherState {
    type: WeatherStateType;
    weather: Weather | null;

    constructor(type: WeatherStateType, weather: Weather | null) {
        this.type = type;
        this.weather = weather;
    }
}

enum WeatherStateType { initial, positionLoaded, positionError, weatherLoaded, weatherError }