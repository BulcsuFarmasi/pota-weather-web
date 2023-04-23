export class WeatherCondition {
    description: string;
    icon: string;

    constructor(description: string, icon: string) {
        this.description = description;
        this.icon = icon;
    }


    public get iconUrl(): string {
        return `https://openweathermap.org/img/wn/${this.icon}@4x.png`
    }

}