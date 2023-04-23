import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { Location } from "../../data/location";
import { PositionService } from "../../services/position.service";
import { getLocationByPosition, getPosition, locationSuccessful, positionFailed, positionLoading } from "../actions/weather.actions";

@Injectable({ providedIn: 'root' })
export class PositionEffects {

    constructor(private actions$: Actions, private positionService: PositionService) {

    }

    getPosition$ = createEffect(() => this.actions$.pipe(
        ofType(getPosition),
        map(() => positionLoading({})),
        exhaustMap(() => this.positionService.getPosition().pipe(
            map((position) => {
                console.log(position);
                return positionLoading({ position })
            },
                catchError(() => of(positionFailed())
                )
            )
        ))));

    getSettlementByPosition = createEffect(() => this.actions$.pipe(
        ofType(getLocationByPosition),
        exhaustMap((action) => this.positionService.getLocationByPosition(action.position).pipe(
            map((location: Location) => locationSuccessful({ location }),
                catchError(() => of(positionFailed())
                )
            )
        ))));

}