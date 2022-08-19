import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/movie.service';
import { IPage, Page } from 'src/app/shared/page.model';
import { IMovieListFilter, MovieListFilter } from '../shared/movie-list-filter.model';
import { IMovieList } from '../shared/movie-list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movieList: IPage<IMovieList> = new Page();
  filter: IMovieListFilter = new MovieListFilter();

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.movieList.update(this.activatedRoute.snapshot.data.movieList);
  }

  changePage() {
    this.search();
  }

  search(resetPage = false) {
    if (resetPage)
      this.movieList.number = 1;
      
    this.movieService.listMovies(this.movieList.number-1, this.filter).subscribe(
      response => this.movieList.update(response)
    );
  }

}
