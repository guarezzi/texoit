import { Component, Input, OnInit } from '@angular/core';
import { ITopWinnerList } from './shared/top-winner.model';

@Component({
  selector: 'app-card-winners-top',
  templateUrl: './card-winners-top.component.html',
  styleUrls: ['./card-winners-top.component.css']
})
export class CardWinnersTopComponent implements OnInit {

  @Input() winners: ITopWinnerList;
  
  constructor() { }

  ngOnInit(): void {
  }

}
