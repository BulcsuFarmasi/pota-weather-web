import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { map } from "rxjs";
import { Position } from "../data/position";
import { openWeatherMapKey } from "../shared/keys";

@Injectable({providedIn: 'root'})
export class PositionRemote {
    constructor(private httpClient:HttpClient) {
        
    }

    private static readonly baseUrl:string = 'https://api.openweathermap.org/geo/1.0'

    getSettlementByPosition(position: Position) {
        return this.httpClient.get(`${PositionRemote.baseUrl}//reverse?lat=${position.latitude}&lon=${position.longitude}&limit=1&appid=${openWeatherMapKey}`).pipe(map((result:any) => <string>result[0].local_names.en));
    }


}