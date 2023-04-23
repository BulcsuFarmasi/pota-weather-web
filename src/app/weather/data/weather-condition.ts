export class WeatherCondition {
    description: string;
    icon: string;

    constructor(decription: string, icon: string) {
        this.description = decription;
        this.icon = icon;
    }


    public get iconUrl(): string {
        return `https://openweathermap.org/img/wn/${this.icon}@4x.png`
    }

}