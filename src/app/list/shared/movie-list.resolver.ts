import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { MovieService } from "src/app/shared/movie.service";
import { IPage } from "src/app/shared/page.model";
import { IMovieList } from "./movie-list.model";

@Injectable({
    providedIn: 'root'
})
export class MovieResolver implements Resolve<IPage<IMovieList>> {
    constructor(
        private movieService: MovieService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPage<IMovieList> | Observable<IPage<IMovieList>> | Promise<IPage<IMovieList>> {
        return this.movieService.listMovies();
    }
}