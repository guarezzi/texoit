import { Component, OnInit } from '@angular/core';
import { IMovieList } from 'src/app/list/shared/movie-list.model';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-card-winners-year',
  templateUrl: './card-winners-year.component.html',
  styleUrls: ['./card-winners-year.component.css']
})
export class CardWinnersYearComponent implements OnInit {

  year: number;
  result: IMovieList[];

  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
  }

  search() {
    this.movieService.getWinnerByYear(this.year).subscribe(
      response => this.result = response
    );
  }

}
