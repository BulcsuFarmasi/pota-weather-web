import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Location } from "../data/location";
import { Position } from "../data/position";
import { PositionLocal } from "./position.local";
import { PositionRemote } from "./position.remote";

@Injectable({ providedIn: 'root' })
export class PositionService {

    constructor(private positionLocal: PositionLocal, private positionRemote: PositionRemote) { }

    getPosition(): Observable<Position> {
        return this.positionLocal.getPosition().pipe(map(position => <Position>{ longitude: position.coords.longitude, latitude: position.coords.latitude }));
    }

    getLocationByPosition(position: Position): Observable<Location> {
        return this.positionRemote.getSettlementByPosition(position).pipe(map(settlement => <Location>{ position, settlement }));
    }
}