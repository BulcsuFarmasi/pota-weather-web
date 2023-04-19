class Weather {
    settlement:string;
    currentWeather: DailyWeather | null;
    forecast: DailyWeather[] | null;

    constructor(settlement: string, currentWeather: DailyWeather | null, forecast: DailyWeather[] | null) {
        this.settlement = settlement;
        this.currentWeather = currentWeather;
        this.forecast = forecast;
    }
}