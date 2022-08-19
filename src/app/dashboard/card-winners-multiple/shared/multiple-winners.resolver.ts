import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { MovieService } from "src/app/shared/movie.service";
import { IMultipleWinnerList } from "./multiple-winner.model";

@Injectable({
    providedIn: 'root'
})
export class MultipleWinnersResolver implements Resolve<IMultipleWinnerList> {
    
    constructor(
        private movieService: MovieService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IMultipleWinnerList | Observable<IMultipleWinnerList> | Promise<IMultipleWinnerList> {
        return this.movieService.loadMultipleWinner();
    }

}