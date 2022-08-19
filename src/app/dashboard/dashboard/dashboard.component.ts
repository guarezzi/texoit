import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/movie.service';
import { IIntervalWinnerList } from '../card-interval/shared/interval-winner.model';
import { IMultipleWinnerList } from '../card-winners-multiple/shared/multiple-winner.model';
import { ITopWinnerList } from '../card-winners-top/shared/top-winner.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  multipleWinners: IMultipleWinnerList;
  topWinners: ITopWinnerList;
  IntervalWinners: IIntervalWinnerList;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.multipleWinners = this.activatedRoute.snapshot.data.multipleWinners;
    this.topWinners = this.activatedRoute.snapshot.data.topWinners;
    this.IntervalWinners = this.activatedRoute.snapshot.data.IntervalWinners;
  }

}
