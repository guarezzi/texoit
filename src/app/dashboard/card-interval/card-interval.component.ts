import { Component, Input, OnInit } from '@angular/core';
import { IIntervalWinnerList } from './shared/interval-winner.model';

@Component({
  selector: 'app-card-interval',
  templateUrl: './card-interval.component.html',
  styleUrls: ['./card-interval.component.css']
})
export class CardIntervalComponent implements OnInit {

  @Input() winners: IIntervalWinnerList;
  
  constructor() { }

  ngOnInit(): void {
  }

}
