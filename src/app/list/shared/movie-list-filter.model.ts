export interface IMovieListFilter {
    year: number;
    winner: boolean;
    get isWinnerDefined(): boolean;
}

export class MovieListFilter implements IMovieListFilter {
    year: number;
    winner: boolean;

    constructor(
        year?: number,
        winner?: boolean
    ) {
        this.year = year;
        this.winner = winner;
    }
    
    get isWinnerDefined(): boolean {
        return [null, undefined].indexOf(this.winner) == -1;
    }
}