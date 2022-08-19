import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { MovieService } from "src/app/shared/movie.service";
import { ITopWinnerList } from "./top-winner.model";

@Injectable({
    providedIn: 'root'
})
export class TopWinnersResolver implements Resolve<ITopWinnerList> {
    
    constructor(
        private movieService: MovieService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ITopWinnerList | Observable<ITopWinnerList> | Promise<ITopWinnerList> {
        return this.movieService.loadTopWinner();
    }

}