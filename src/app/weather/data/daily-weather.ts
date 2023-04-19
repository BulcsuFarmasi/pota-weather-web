class DailyWeather {
    temperature: number;
    condition:WeatherCondition;
    date:Date;

    constructor(temperature: number, condition:WeatherCondition, date:Date) {
        this.temperature = temperature;
        this.condition = condition;
        this.date = date;
    }
}