import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { MovieService } from "src/app/shared/movie.service";
import { IIntervalWinnerList } from "./interval-winner.model";

@Injectable({
    providedIn: 'root'
})
export class IntervalWinnersResolver implements Resolve<IIntervalWinnerList> {
    constructor(
        private movieService: MovieService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IIntervalWinnerList | Observable<IIntervalWinnerList> | Promise<IIntervalWinnerList> {
        return this.movieService.loadIntervalWinner();
    }
}