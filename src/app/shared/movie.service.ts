import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, filter, tap } from 'rxjs/operators'
import { environment } from "src/environments/environment";
import { IIntervalWinnerList } from "../dashboard/card-interval/shared/interval-winner.model";
import { IMultipleWinnerList } from "../dashboard/card-winners-multiple/shared/multiple-winner.model";
import { ITopWinnerList } from "../dashboard/card-winners-top/shared/top-winner.model";
import { IMovieListFilter } from "../list/shared/movie-list-filter.model";
import { IMovieList } from "../list/shared/movie-list.model";
import { IPage } from "./page.model";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private API: string = environment.api;

    constructor(
        private httpClient: HttpClient
    ) {}

    listMovies(page = 0, filter?: IMovieListFilter): Observable<IPage<IMovieList>> {
        let params = new HttpParams();
        params = params.set('size', 15);
        params = params.set('page', page);

        if (filter?.isWinnerDefined)
            params = params.set('winner', filter.winner);
        
        if (filter?.year)
            params = params.set('year', filter.year);

        return this.httpClient.get<IPage<IMovieList>>(this.API, { params });
    }

    loadMultipleWinner(): Observable<IMultipleWinnerList>{
        let params = new HttpParams();
        params = params.set('projection', 'years-with-multiple-winners');

        return this.httpClient.get<IMultipleWinnerList>(this.API, { params });
    }

    loadTopWinner(): Observable<ITopWinnerList> {
        let params = new HttpParams();
        params = params.set('projection', 'studios-with-win-count');

        return this.httpClient.get<ITopWinnerList>(this.API, { params });
    }

    loadIntervalWinner(): Observable<IIntervalWinnerList> {
        let params = new HttpParams();
        params = params.set('projection', 'max-min-win-interval-for-producers');

        return this.httpClient.get<IIntervalWinnerList>(this.API, { params });
    }

    getWinnerByYear(year: number): Observable<IMovieList[]> {
        if (!year)
            throw new Error('The year params must be defined!');
        
        let params = new HttpParams();
        params = params.set('winner', true);
        params = params.set('year', year);

        return this.httpClient.get<IMovieList[]>(this.API, { params });
    }
}