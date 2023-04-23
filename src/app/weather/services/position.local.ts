import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PositionLocal {
    getPosition(): Observable<GeolocationPosition> {
        return new Observable((observer) => {
            navigator.geolocation.getCurrentPosition((position) => {console.log(position);
            ;return observer.next(position)}, (error) => observer.error(error))
        });
    }
}